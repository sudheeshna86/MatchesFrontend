import { useEffect, useState } from 'react';
import { fetchMatches } from '../api/match.api';
import { getFavorites, addFavorite, removeFavorite } from '../api/favorite.api';
import { Container, Row, Col, Spinner, Form } from 'react-bootstrap';
import MatchCard from '../components/MatchCard';

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [favIds, setFavIds] = useState([]);
  const [sport, setSport] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [sport, search]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [matchRes, favRes] = await Promise.all([
        fetchMatches({ sport, search }),
        getFavorites()
      ]);

      setMatches(matchRes.data);
      setFavIds(favRes.data.map(m => m.id));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleToggleFavorite = async (matchId) => {
    try {
      if (favIds.includes(matchId)) {
        await removeFavorite(matchId);
        setFavIds(prev => prev.filter(id => id !== matchId));
      } else {
        await addFavorite(matchId);
        setFavIds(prev => [...prev, matchId]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-warning fw-bold mb-4">Live Matches</h2>

      {/* FILTERS */}
      <div className="d-flex gap-3 mb-4 flex-wrap">
        <Form.Select
          style={{ maxWidth: "200px" }}
          value={sport}
          onChange={(e) => setSport(e.target.value)}
        >
          <option value="">All Sports</option>
          <option value="Cricket">Cricket</option>
          <option value="Football">Football</option>
          <option value="Tennis">Tennis</option>
        </Form.Select>

        <Form.Control
          placeholder="Search by team name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="warning" />
        </div>
      ) : matches.length > 0 ? (
        <Row className="g-4">
          {matches.map(match => (
            <Col md={4} key={match.id}>
              <MatchCard
                match={match}
                isFavorite={favIds.includes(match.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-muted text-center mt-5">No matches found</p>
      )}
    </Container>
  );
};

export default Matches;
