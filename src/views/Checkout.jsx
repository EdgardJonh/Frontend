import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Checkout() {
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: ''
  });

  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Aquí normalmente procesarías el pago
    // Por ahora, simularemos un pago exitoso
    setStep(3);
    setTimeout(() => {
      clearCart();
      navigate('/order-confirmation');
    }, 3000);
  };

  const renderShippingForm = () => (
    <form onSubmit={handleShippingSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block mb-1">Nombre completo</label>
        <input
          type="text"
          id="fullName"
          value={shippingInfo.fullName}
          onChange={(e) => setShippingInfo({...shippingInfo, fullName: e.target.value})}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="address" className="block mb-1">Dirección</label>
        <input
          type="text"
          id="address"
          value={shippingInfo.address}
          onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="city" className="block mb-1">Ciudad</label>
        <input
          type="text"
          id="city"
          value={shippingInfo.city}
          onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="postalCode" className="block mb-1">Código Postal</label>
        <input
          type="text"
          id="postalCode"
          value={shippingInfo.postalCode}
          onChange={(e) => setShippingInfo({...shippingInfo, postalCode: e.target.value})}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="country" className="block mb-1">País</label>
        <input
          type="text"
          id="country"
          value={shippingInfo.country}
          onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Continuar al pago
      </button>
    </form>
  );

  const renderPaymentForm = () => (
    <form onSubmit={handlePaymentSubmit} className="space-y-4">
      <div>
        <label htmlFor="cardNumber" className="block mb-1">Número de tarjeta</label>
        <input
          type="text"
          id="cardNumber"
          value={paymentInfo.cardNumber}
          onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="cardHolder" className="block mb-1">Titular de la tarjeta</label>
        <input
          type="text"
          id="cardHolder"
          value={paymentInfo.cardHolder}
          onChange={(e) => setPaymentInfo({...paymentInfo, cardHolder: e.target.value})}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label htmlFor="expirationDate" className="block mb-1">Fecha de expiración</label>
          <input
            type="text"
            id="expirationDate"
            value={paymentInfo.expirationDate}
            onChange={(e) => setPaymentInfo({...paymentInfo, expirationDate: e.target.value})}
            placeholder="MM/AA"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="cvv" className="block mb-1">CVV</label>
          <input
            type="text"
            id="cvv"
            value={paymentInfo.cvv}
            onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Realizar pago
      </button>
    </form>
  );

  const renderOrderSummary = () => (
    <div className="bg-gray-100 p-4 rounded">
      <h3 className="text-lg font-semibold mb-2">Resumen del pedido</h3>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.name} x {item.quantity}</span>
          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <div className="border-t pt-2 mt-2">
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-2/3">
          {step === 1 && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Información de envío</h2>
              {renderShippingForm()}
            </>
          )}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Información de pago</h2>
              {renderPaymentForm()}
            </>
          )}
          {step === 3 && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Procesando su pedido</h2>
              <p>Por favor, espere mientras procesamos su pago...</p>
            </div>
          )}
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          {renderOrderSummary()}
        </div>
      </div>
    </div>
  );
}

export default Checkout;