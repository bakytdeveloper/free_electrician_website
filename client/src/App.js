import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
      <div className="App">
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <OrderForm />
        <Footer />
      </div>
  );
}

export default App;