import Header from "../components/Header";
import StudyList from "../components/StudyList";

const schools = [
  {
    school: "SD Negeri 25 Gelumbang",
    year: "2006 - 2012",
  },
  {
    school: "SMP Negeri 1 Gelumbang",
    year: "2012 - 2015",
  },
  {
    school: "SMA Negeri 1 Gelumbang",
    year: "2015 - 2018",
  },
  {
    school: "Universitas Indo Global Mandiri",
    year: "2018 - 2022",
  },
];

export default function Study() {
  return (
    <div className="bg-white rounded border-gray-400 border p-5 lg:p-8">
      <Header>Pendidikan</Header>
      <div className="flex flex-col space-y-5">
        {schools.map((item, index) => (
          <StudyList key={`${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
