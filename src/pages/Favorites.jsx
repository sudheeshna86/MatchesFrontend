// import { useEffect, useState } from 'react';
// import { getFavorites, removeFavorite } from '../api/favorite.api';
// import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import MatchCard from '../components/MatchCard';

// const Favorites = () => {
//   const [favoriteMatches, setFavoriteMatches] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadFavorites();
//   }, []);

//   const loadFavorites = async () => {
//     setLoading(true);
//     try {
//       // ✅ Backend already gives full match data
//       const res = await getFavorites();
//       setFavoriteMatches(res.data);
//     } catch (err) {
//       console.error("Error loading favorites:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUnfavorite = async (matchId) => {
//     try {
//       await removeFavorite(matchId);
//       setFavoriteMatches(prev =>
//         prev.filter(match => match.id !== matchId)
//       );
//     } catch (err) {
//       console.error("Could not remove favorite:", err);
//     }
//   };

//   return (
//     <Container className="py-5">
//       <div className="mb-5">
//         <h1 className="text-warning fw-bold">⭐ My Favorites</h1>
//         <p className="text-muted">Matches you have favorited</p>
//       </div>

//       {loading ? (
//         <div className="text-center py-5">
//           <Spinner animation="border" variant="warning" />
//         </div>
//       ) : favoriteMatches.length > 0 ? (
//         <Row className="g-4">
//           {favoriteMatches.map(match => (
//             <Col lg={4} md={6} key={match.id}>
//               <MatchCard
//                 match={match}
//                 isFavorite={true}
//                 onToggleFavorite={() => handleUnfavorite(match.id)}
//               />
//             </Col>
//           ))}
//         </Row>
//       ) : (
//         <div className="text-center py-5 bg-dark rounded border border-secondary">
//           <h4 className="text-white mb-3">No favorites yet</h4>
//           <p className="text-muted mb-4">
//             Add matches to favorites to see them here.
//           </p>
//           <Button as={Link} to="/dashboard" variant="warning">
//             Browse Matches
//           </Button>
//         </div>
//       )}
//     </Container>
//   );
// };

// export default Favorites;
import { useEffect, useState } from 'react';
import { getFavorites, removeFavorite } from '../api/favorite.api';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MatchCard from '../components/MatchCard';

const Favorites = () => {
  const [favoriteMatches, setFavoriteMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    setLoading(true);
    try {
      // Backend already returns full match objects
      const res = await getFavorites();
      setFavoriteMatches(res.data);
    } catch (err) {
      console.error("Error loading favorites:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUnfavorite = async (matchId) => {
    try {
      await removeFavorite(matchId);
      setFavoriteMatches(prev =>
        prev.filter(match => match.id !== matchId)
      );
    } catch (err) {
      console.error("Could not remove favorite:", err);
    }
  };

  return (
    <Container className="py-5">
      <div className="mb-5">
        <h1 className="text-warning fw-bold">⭐ My Favorites</h1>
        <p className="text-muted">Matches you have favorited</p>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="warning" />
        </div>
      ) : favoriteMatches.length > 0 ? (
        <Row className="g-4">
          {favoriteMatches.map(match => (
            <Col lg={4} md={6} key={match.id}>
              <MatchCard
                match={match}
                showRemove={true}                     // 👈 IMPORTANT
                onToggleFavorite={() => handleUnfavorite(match.id)}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center py-5 bg-dark rounded border border-secondary">
          <h4 className="text-white mb-3">No favorites yet</h4>
          <p className="text-muted mb-4">
            Add matches to favorites to see them here.
          </p>
          <Button as={Link} to="/dashboard" variant="warning">
            Browse Matches
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Favorites;
