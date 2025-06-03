import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    document.title = "Carol Lemos • Assessoria & Social Media";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton phoneNumber="5534991806595" message="Olá! Gostaria de mais informações sobre seus serviços de Instagram!" />
    </div>
  );
}

export default App;