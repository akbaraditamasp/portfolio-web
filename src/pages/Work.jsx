import Header from "../components/Header";
import WorkList from "../components/WorkList";

const works = [
  {
    company: "PT. Desa Tech Nusantara",
    position: "Software Engineer",
    year: "2022 - Sekarang",
  },
  {
    company: "Freelance",
    position: "Fullstack App Developer",
    year: "2019 - 2022",
  },
];

export default function Work() {
  return (
    <div className="bg-white rounded border-gray-400 border p-5 lg:p-8">
      <Header>Riwayat Pekerjaan</Header>
      <div className="flex flex-col space-y-5">
        {works.map((item, index) => (
          <WorkList key={`${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
