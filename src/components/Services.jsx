import { Car, Users, MapPin, Clock, DollarSign, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car className="text-primary-600" size={48} />,
      title: "Rental Harian",
      description: "Sewa mobil untuk kebutuhan harian dengan tarif terjangkau dan fleksibel.",
      features: ["Driver berpengalaman", "BBM termasuk"]
    },
    {
      icon: <Users className="text-primary-600" size={48} />,
      title: "Rental Bulanan",
      description: "Paket rental bulanan dengan harga spesial untuk kebutuhan jangka panjang.",
      features: ["Harga lebih hemat", "Penggantian unit"]
    },
    {
      icon: <MapPin className="text-primary-600" size={48} />,
      title: "Antar Jemput",
      description: "Siap melayani antar jemput bandara-Hotel-stasiun- pelabuhan-rumah dan lain lain",
      features: ["Tepat waktu", "Area coverage luas", "Layanan fleksibel"]
    },
    {
      icon: <Clock className="text-primary-600" size={48} />,
      title: "24/7 Support",
      description: "Dukungan pelanggan 24 jam untuk memastikan perjalanan Anda lancar.",
      features: ["Emergency support", "Bantuan teknis", "Customer service"]
    },
    {
      icon: <DollarSign className="text-primary-600" size={48} />,
      title: "Best Price",
      description: "Jaminan Harga Terbaik & Nego sampai Deal",
      features: ["Dapatkan harga sewa mobil yang ramah di kantong", "Bisa nego sesuai kebutuhan anda", "Harga terjangkau"]
    },
    {
      icon: <Headphones className="text-primary-600" size={48} />,
      title: "Konsultasi Gratis",
      description: "Konsultasi gratis untuk memilih mobil yang sesuai kebutuhan Anda.",
      features: ["Rekomendasi ahli", "Gratis konsultasi", "Solusi terbaik"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50/50 pattern-dots relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            WP RENTCAR menyediakan berbagai layanan rental mobil yang disesuaikan 
            dengan kebutuhan perjalanan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-xl shadow-lg card-hover card-animate"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;