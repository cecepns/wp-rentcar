import { Users, Fuel, Settings, Star } from 'lucide-react';
import Avanza from '../assets/avanza.png';
import Fortuner from '../assets/fortuner.png';
import Innova from '../assets/innova.png';
import Toyota from '../assets/toyota.png';
import Xenia from '../assets/xenia.png';
import Sigra from '../assets/sigra.png';


const Fleet = () => {
  const cars = [
    {
      name: "Toyota Avanza",
      category: "MPV",
      passengers: 6,
      transmission: "Manual/Matic",
      fuel: "Bensin",
      // price: "350K",
      image: Avanza,
      features: ["AC", "Audio System", "Power Steering", "Airbag"]
    },
    {
      name: "Toyota Fortuner",
      category: "SUV",
      passengers: 7,
      transmission: "Manual/Matic",
      fuel: "Diesel",
      // price: "300K",
      image: Fortuner,
      features: ["AC", "Audio System", "Power Steering", "Eco Mode"]
    },
    {
      name: "Toyota Innova Reborn",
      category: "MPV",
      passengers: 7,
      transmission: "Manual/Matic",
      fuel: "Diesel",
      // price: "450K",
      image: Innova,
      features: ["AC", "Audio System", "Power Steering", "Cruise Control"]
    },
    {
      name: "Toyota Hiace Commuter",
      category: "MPV",
      passengers: 10,
      transmission: "Manual/Matic",
      fuel: "Diesel",
      // price: "320K",
      image: Toyota,
      features: ["AC", "Audio System", "Power Steering", "USB Port"]
    },
    {
      name: "Daihatsu Xenia",
      category: "MPV",
      passengers: 7,
      transmission: "Manual/Matic",
      fuel: "Bensin",
      // price: "280K",
      image: Xenia,
      features: ["AC", "Audio System", "Power Steering", "USB Port"]
    },
    {
      name: "Daihatsu Sigra",
      category: "MPV",
      passengers: 7,
      transmission: "Manual/Matic",
      fuel: "Bensin",
      // price: "270K",
      image: Sigra,
      features: ["AC", "Audio System", "Power Steering", "Bluetooth"]
    },
  ];

  return (
    <section id="fleet" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 pattern-grid relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Armada Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilihan lengkap kendaraan berkualitas untuk berbagai kebutuhan perjalanan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div 
              key={index}
              className="glass-effect border border-white/20 rounded-xl overflow-hidden shadow-lg card-hover card-animate"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <div className="relative p-4">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {car.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-white bg-opacity-90 px-2 py-1 rounded-full">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm font-medium ml-1">4.8</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
                
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users size={16} className="mr-2" />
                    {car.passengers} orang
                  </div>
                  <div className="flex items-center">
                    <Settings size={16} className="mr-2" />
                    {car.transmission}
                  </div>
                  <div className="flex items-center">
                    <Fuel size={16} className="mr-2" />
                    {car.fuel}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Fitur:</h4>
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  {/* <div>
                    <span className="text-3xl font-bold text-primary-600">{car.price}</span>
                    <span className="text-gray-600">/hari</span>
                  </div> */}
                  <a 
                    href={`https://wa.me/6281350002354?text=Halo, saya tertarik untuk menyewa ${car.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Sewa Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;