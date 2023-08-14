import Header from "../components/Header";
import ProjectList from "../components/ProjectList";

const projects = [
  {
    name: "Baring Digital",
    image: (
      <img
        src="/baring.png"
        className="w-full h-full object-contain bg-gray-800"
      />
    ),
    url: "https://app.baring.digital",
    position: "Fullstack",
  },
  {
    name: "HoffenPay",
    image: (
      <img src="/hoffenpay.png" className="w-full h-full object-contain" />
    ),
    url: "https://play.google.com/store/apps/details?id=id.aditama.hoffenpay",
    position: "Fullstack",
  },
  {
    name: "GUWA Lite",
    image: <img src="/guwa.png" className="w-full h-full object-contain" />,
    url: "https://github.com/akbaraditamasp/guwa-lite/",
    position: "Fullstack",
  },
  {
    name: "GuruPRO",
    image: <img src="/gurupro.png" className="w-full h-full object-contain" />,
    url: "https://www.gurupro.id",
    position: "Web, Backend & DevOps",
  },
  {
    name: "CloudPRO",
    image: <img src="/cloudpro.png" className="w-full h-full object-contain" />,
    url: "https://www.idprocloud.com",
    position: "Fullstack",
  },
];

export default function Project() {
  return (
    <div className="bg-white rounded border-gray-400 border p-5 lg:p-8">
      <Header>Portofolio Project</Header>
      <div className="flex flex-col space-y-5">
        {projects.map((item, index) => (
          <ProjectList key={`${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
