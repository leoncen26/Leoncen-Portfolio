import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white hover:_translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2">Nyamgo Delivery App</h3>
              <p className="text-gray-400 mb-4">
                NyamGo adalah aplikasi pemesanan dan pengiriman makanan berbasis
                Flutter yang terintegrasi dengan Firebase. Aplikasi ini
                mendukung autentikasi pengguna, pemesanan makanan, pengelolaan
                keranjang belanja, dan pemantauan status pesanan.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Firebase"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/leoncen26/Nyamgo-Delivery-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white hover:_translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2">Inventory System App</h3>
              <p className="text-gray-400 mb-4">
                Inventory System adalah sebuah aplikasi mobile yang dikembangkan
                menggunakan Flutter, yang dirancang untuk membantu pelacakan
                barang masuk dan keluar secara real-time dalam suatu organisasi
                atau bisnis.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Firebase"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/leoncen26/Inventory_system_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white hover:_translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2">Chatify App</h3>
              <p className="text-gray-400 mb-4">
                Chatify adalah sebuah aplikasi chatting mobile yang dibuat
                dengan menggunakan Flutter, Dart dan Firebase. Aplikasi ini
                mampu menghubungkan 2 user melalui halaman chat dan memungkinkan
                user untuk mengirim pesan hingga gambar satu dengan yang lain.
                Aplikasi ini dibuat melalui tutorial yang ada pada course udemy
                yang berjudul "Build A Chat Application With Firebase, Flutter
                and Provider" dari Hussain Mustafa.Pada aplikasi ini juga
                ditambahkan fitur tambahan yang ditambahkan secara mandiri
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Firebase", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/leoncen26/Chatify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white hover:_translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2">Finstagram App</h3>
              <p className="text-gray-400 mb-4">
                Finstagram adalah aplikasi clone sederhana dari Instagram yang
                dibuat menggunakan Flutter, Firebase, dan Provider. Aplikasi ini
                memungkinkan pengguna untuk melakukan registrasi,
                login,mengunggah gambar, dan melihat postingan pengguna lain.
                Dirancang dengan antarmuka modern dan interaktif. Aplikasi ini
                dibuat melalui tutorial yang ada pada course udemy yang berjudul
                "Build A Chat Application With Firebase, Flutter and Provider"
                dari Hussain Mustafa.Pada aplikasi ini juga ditambahkan fitur
                tambahan yang ditambahkan secara mandiri
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Firebase"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/leoncen26/Finstagram-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white hover:_translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2">E-Commerce App</h3>
              <p className="text-gray-400 mb-4">
                E-Commerce-App adalah sebuah aplikasi mobile yang dikembangkan
                menggunakan Flutter sebagai frontend framework dan Firebase
                sebagai backend service. Aplikasi ini memungkinkan pengguna
                untuk melihat daftar produk, melihat detail produk, serta
                melakukan pemesanan secara online.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Firebase"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/leoncen26/E-Commerce-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
