import { Car, Shield, Clock, Star } from 'lucide-react';
import PosterBanner from '../assets/poster-banner.png';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-14 md:pb-20 min-h-screen gradient-bg flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white order-2 lg:order-1" data-aos="fade-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              Rental Mobil
              <span className="block text-yellow-300">Terpercaya</span>
              di Palembang
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 text-gray-100 leading-relaxed">
              WP RENTCAR menyediakan layanan rental mobil berkualitas dengan armada terawat 
              dan pelayanan terbaik untuk perjalanan Anda di Palembang dan sekitarnya.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-6 lg:mb-8">
              <div className="flex items-center space-x-2 lg:space-x-3">
                <Clock className="text-yellow-300 flex-shrink-0" size={20} />
                <span className="text-sm lg:text-base">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 lg:space-x-3">
                <Car className="text-yellow-300 flex-shrink-0" size={20} />
                <span className="text-sm lg:text-base">Armada Terawat</span>
              </div>
              <div className="flex items-center space-x-2 lg:space-x-3">
                <Star className="text-yellow-300 flex-shrink-0" size={20} />
                <span className="text-sm lg:text-base">Pelayanan Prima</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <a 
                href="https://wa.me/6281350002354" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-400 text-gray-900 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center text-sm lg:text-base"
              >
                Hubungi Sekarang
              </a>
              <a 
                href="#fleet" 
                className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center text-sm lg:text-base"
              >
                Lihat Armada
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative order-1 lg:order-2 mb-0" data-aos="fade-left">
            <div className="relative z-10">
              <img 
                src={PosterBanner} 
                alt="Rental Car" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-48 h-48 lg:w-72 lg:h-72 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 lg:w-72 lg:h-72 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;