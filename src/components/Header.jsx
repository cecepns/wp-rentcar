import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Logo from '../assets/logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={Logo} 
              alt="WP RENTCAR Logo" 
              className="h-auto w-12 md:w-24 object-contain"
            />
            {/* Desktop Company Info */}
            <div className="hidden md:block">
              <h1 className="text-xl lg:text-2xl font-bold text-primary-700">WP RENTCAR</h1>
              <p className="text-xs lg:text-sm text-gray-600">Rental Mobil Palembang</p>
            </div>
          </div>

          {/* Mobile Center Content */}
          <div className="flex md:hidden flex-col items-center flex-1 mx-4">
            <h1 className="text-lg font-bold text-primary-700 leading-tight">WP RENTCAR</h1>
            <div className="flex items-center space-x-1 text-xs text-gray-600">
              <MapPin size={12} />
              <span>Palembang</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">Beranda</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">Layanan</a>
            <a href="#fleet" className="text-gray-700 hover:text-primary-600 transition-colors">Armada</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">Tentang</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Kontak</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-primary-600">
              <Phone size={16} />
              <span className="text-sm font-medium">081350002354</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">Beranda</a>
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">Layanan</a>
              <a href="#fleet" className="text-gray-700 hover:text-primary-600 transition-colors">Armada</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Kontak</a>
              <div className="flex items-center space-x-2 text-primary-600 pt-2">
                <Phone size={16} />
                <span className="text-sm font-medium">081350002354</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;