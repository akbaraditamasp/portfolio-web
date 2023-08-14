import { RiDownload2Line } from "react-icons/ri";

export default function Home() {
  return (
    <div className="bg-white rounded mt-0 lg:mt-20 border-gray-400 border">
      <div className="flex items-center lg:items-end mt-0 lg:-mt-24 border-b border-gray-400 p-5 lg:p-8">
        <div className="flex-1 mr-5">
          <h1 className="font-montserrat font-bold text-gray-800 text-xl lg:text-2xl">
            Akbar Aditama
          </h1>
          <h2>Fullstack App Developer</h2>
        </div>
        <div className="w-16 h-16 lg:w-40 lg:h-40 rounded-full border border-gray-800 bg-white overflow-hidden">
          <img src="/profile-pic.jpg" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-5 lg:p-8 prose max-w-full">
        <p className="text-justify">
          Halo, nama saya Akbar Aditama Supriyono Putra, lulusan S1 Ilmu
          Komputer dari Universitas Indo Global Mandiri. Saya memiliki keahlian
          dalam app development dengan pengalaman selama 3 tahun.
        </p>
        <p className="text-justify">
          Dengan usia 23 tahun, saya memiliki semangat yang tinggi dalam
          mempelajari hal-hal baru dan selalu ingin tahu. Saya senang mengikuti
          perkembangan teknologi terbaru dan mencari cara untuk menghadirkan
          solusi kreatif melalui aplikasi.
        </p>
        <p className="text-justify">
          Saya percaya bahwa kemampuan saya untuk cepat belajar dan
          keingintahuan yang tinggi adalah aset berharga dalam menghadapi
          tantangan dalam industri ini. Saya selalu siap untuk tantangan baru
          dan berkomitmen untuk terus mengembangkan diri dalam dunia app
          development.
        </p>
        <p className="text-justify">
          Saya berharap dapat berkontribusi dan menciptakan dampak positif
          melalui karya-karya saya. Terima kasih telah mengunjungi website saya!
        </p>
      </div>
      <div className="p-5 lg:p-8 pt-0 lg:pt-0">
        <a
          href="/resume.pdf"
          className="w-full py-3 flex items-center justify-center space-x-3 bg-primary-500 rounded text-center border border-gray-700 font-bold hover:bg-primary-400 hover:shadow-lg "
        >
          <RiDownload2Line />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
}
