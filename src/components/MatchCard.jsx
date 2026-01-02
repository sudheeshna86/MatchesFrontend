import { Card, Button, Badge } from 'react-bootstrap';

const MatchCard = ({ match, isFavorite, onToggleFavorite, showRemove }) => {
  return (
    <Card className="bg-secondary text-white mb-3 shadow-lg border-0 h-100">
      <Card.Body className="d-flex flex-column justify-content-between">

        <div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <Badge bg="primary">{match.sport}</Badge>
            <small className="text-info">{match.league}</small>
          </div>

          <Card.Title className="fs-5">
            {match.team_a} <span className="text-warning">vs</span> {match.team_b}
          </Card.Title>

          <Card.Text className="text-light opacity-75 small">
            Starts at: {new Date(match.start_time).toLocaleString()}
          </Card.Text>
        </div>

        {/* 🔘 BUTTON LOGIC */}
        {showRemove ? (
          <Button
            variant="outline-danger"
            className="mt-3 w-100 fw-bold"
            onClick={() => onToggleFavorite(match.id)}
          >
            🗑 Remove from Favorites
          </Button>
        ) : (
          <Button
            variant={isFavorite ? "warning" : "outline-warning"}
            className="mt-3 w-100 fw-bold"
            onClick={() => onToggleFavorite(match.id)}
          >
            {isFavorite ? "★ Favorited" : "☆ Add Favorite"}
          </Button>
        )}

      </Card.Body>
    </Card>
  );
};

export default MatchCard;
