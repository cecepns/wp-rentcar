import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 pattern-grid relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap melayani kebutuhan rental mobil Anda. Hubungi kami sekarang untuk 
            konsultasi dan reservasi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Informasi Kontak</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Phone className="text-primary-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telepon / WhatsApp</h4>
                  <p className="text-gray-600">081350002354</p>
                  <a 
                    href="https://wa.me/6281350002354" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 text-sm"
                  >
                    Chat via WhatsApp →
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <MapPin className="text-primary-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                  <p className="text-gray-600">
                    Jl. Bagelen no 475<br />
                    Kel. Sukamaju kec. Sako<br />
                    Palembang 30164
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Clock className="text-primary-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Jam Operasional</h4>
                  <p className="text-gray-600">
                    Senin - Minggu: 24 Jam<br />
                    <span className="text-sm text-primary-600">Siap melayani kapan saja</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Mail className="text-primary-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@wprentcar.com</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-4">
              <a 
                href="tel:081350002354"
                className="flex items-center justify-center space-x-3 bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                <Phone size={20} />
                <span>Telepon Sekarang</span>
              </a>
            </div>
          </div>

          {/* Map or Additional Info */}
          <div data-aos="fade-left">
            <div className="section-bg p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mengapa Memilih WP RENTCAR?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Proses Mudah & Cepat</h4>
                    <p className="text-gray-600">Booking dapat dilakukan melalui WhatsApp dengan proses yang simple dan cepat</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Harga Transparan</h4>
                    <p className="text-gray-600">Tidak ada biaya tersembunyi, semua tarif sudah termasuk BBM dan driver</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Layanan 24/7</h4>
                    <p className="text-gray-600">Tim support siap membantu Anda kapan saja, termasuk emergency support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Armada Lengkap</h4>
                    <p className="text-gray-600">Berbagai pilihan kendaraan dari ekonomis hingga premium sesuai kebutuhan</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
                <h4 className="font-semibold text-primary-900 mb-2">💡 Tips Booking</h4>
                <p className="text-primary-700 text-sm">
                  Untuk mendapatkan unit terbaik, disarankan untuk melakukan reservasi 
                  minimal H-1 sebelum tanggal keberangkatan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;