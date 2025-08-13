import { Award, Users, Car, Clock } from 'lucide-react';
import Logo from '../assets/logo.jpeg';

const About = () => {
  const stats = [
    {
      icon: <Car className="text-primary-600" size={48} />,
      number: "50+",
      label: "Armada Kendaraan"
    },
    {
      icon: <Users className="text-primary-600" size={48} />,
      number: "1000+",
      label: "Pelanggan Puas"
    },
    {
      icon: <Clock className="text-primary-600" size={48} />,
      number: "5+",
      label: "Tahun Pengalaman"
    },
    {
      icon: <Award className="text-primary-600" size={48} />,
      number: "100%",
      label: "Kepuasan Terjamin"
    }
  ];

  return (
    <section id="about" className="py-20 gradient-bg relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-white mb-6">Tentang WP RENTCAR</h2>
            <p className="text-lg text-white mb-6 leading-relaxed">
              WP RENTCAR adalah perusahaan rental mobil terpercaya di Palembang yang telah 
              melayani ribuan pelanggan dengan komitmen memberikan pelayanan terbaik dan 
              kendaraan berkualitas tinggi.
            </p>
            <p className="text-lg text-white mb-8 leading-relaxed">
              Dengan pengalaman lebih dari 5 tahun, kami memahami kebutuhan perjalanan Anda 
              dan menyediakan solusi transportasi yang aman, nyaman, dan terpercaya untuk 
              berbagai keperluan bisnis maupun wisata.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Kendaraan Terawat</h4>
                  <p className="text-white">Semua kendaraan menjalani perawatan rutin dan pemeriksaan berkala</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Driver Berpengalaman</h4>
                  <p className="text-white">Tim driver profesional yang menguasai rute di Palembang dan sekitarnya</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Harga Kompetitif</h4>
                  <p className="text-white">Tarif yang bersaing dengan kualitas pelayanan premium</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative" data-aos="fade-left">
            <img 
              src={Logo} 
              alt="About WP RENTCAR" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold">5+</h4>
              <p className="text-primary-100">Tahun Melayani</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center glass-effect p-8 rounded-xl shadow-lg card-hover card-animate"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;