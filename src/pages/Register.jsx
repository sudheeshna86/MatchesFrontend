import { useState } from 'react';
import { registerUser } from '../api/auth.api';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match!");
    }

    try {
      await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      // Redirect to login after successful registration
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Try again.');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '85vh' }}>
      <Card style={{ width: '450px' }} className="bg-dark text-white p-4 border-warning shadow-lg">
        <div className="text-center mb-4">
          <h2 className="text-warning fw-bold">CREATE ACCOUNT</h2>
          <p className="text-muted small">Join the ultimate sports platform</p>
        </div>

        {error && <Alert variant="danger" className="py-2 small">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="small">Full Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter your name" 
              className="bg-secondary text-white border-0"
              required 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="small">Email Address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="name@example.com" 
              className="bg-secondary text-white border-0"
              required 
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="small">Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="••••••••" 
              className="bg-secondary text-white border-0"
              required 
              onChange={(e) => setFormData({...formData, password: e.target.value})} 
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="small">Confirm Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="••••••••" 
              className="bg-secondary text-white border-0"
              required 
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} 
            />
          </Form.Group>

          <Button variant="warning" type="submit" className="w-100 fw-bold py-2 mb-3 shadow">
            REGISTER NOW
          </Button>

          <p className="text-center small opacity-75">
            Already have an account? <Link to="/" className="text-warning text-decoration-none">Login</Link>
          </p>
        </Form>
      </Card>
    </Container>
  );
};

export default Register;