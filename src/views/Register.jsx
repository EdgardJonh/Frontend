import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    // Aquí normalmente enviarías una solicitud a tu API para registrar al usuario
    // Por ahora, simularemos un registro exitoso
    login({ id: Date.now(), email });
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Registrarse</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-2">Confirmar contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;
