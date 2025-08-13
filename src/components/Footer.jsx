import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import Logo from '../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={Logo} 
                alt="WP RENTCAR Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">WP RENTCAR</h3>
                <p className="text-gray-400 text-sm">Rental Mobil Palembang</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Penyedia layanan rental mobil terpercaya di Palembang dengan 
              komitmen memberikan pelayanan terbaik untuk perjalanan Anda.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/6281350002354" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="tel:081350002354"
                className="bg-primary-600 p-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Menu</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#fleet" className="text-gray-400 hover:text-white transition-colors">Armada</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Tentang</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Rental Harian</li>
              <li className="text-gray-400">Rental Bulanan</li>
              <li className="text-gray-400">Antar Jemput</li>
              <li className="text-gray-400">Driver Service</li>
              <li className="text-gray-400">24/7 Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-primary-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">081350002354</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">
                    Jl. Bagelen no 475<br />
                    Kel. Sukamaju kec. Sako<br />
                    Palembang 30164
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-primary-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">info@wprentcar.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 WP RENTCAR. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Melayani dengan sepenuh hati untuk perjalanan Anda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;