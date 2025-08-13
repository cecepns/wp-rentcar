import { useEffect } from 'react';
import AOS from 'aos';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Fleet from './components/Fleet';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      offset: 50,
      delay: 0,
      anchorPlacement: 'top-bottom',
    });
    
    // Refresh AOS on window resize
    const handleResize = () => {
      AOS.refresh();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App overflow-x-hidden bg-soft-gradient min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Fleet />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;