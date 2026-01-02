import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../api/auth.api';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      login(res.data.user, res.data.token);
    } catch (err) {
      setError('Invalid credentials. Try again!');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '400px' }} className="bg-dark text-white p-4 border-warning shadow-lg">
        <h2 className="text-center text-warning mb-4">Welcome Back</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required 
              onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required 
              onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </Form.Group>
          <Button variant="warning" type="submit" className="w-100 fw-bold py-2 mb-3">LOGIN</Button>
          <p className="text-center small">New here? <Link to="/register" className="text-warning">Register Now</Link></p>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;