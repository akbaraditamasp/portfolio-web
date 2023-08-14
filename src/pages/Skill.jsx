import {
  SiAdonisjs,
  SiBootstrap,
  SiCodeigniter,
  SiExpress,
  SiGit,
  SiJquery,
  SiLaravel,
  SiMysql,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPm2,
  SiPostgresql,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiUbuntu,
} from "react-icons/si";
import { TbApi, TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import Header from "../components/Header";
import SkillList from "../components/SkillList";

const skills = [
  {
    field: "Frontend",
    stacks: [
      {
        name: "jQuery",
        icon: SiJquery,
      },
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "NextJS",
        icon: TbBrandNextjs,
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
    ],
  },
  {
    field: "Mobile",
    stacks: [
      {
        name: "React Native",
        icon: TbBrandReactNative,
      },
    ],
  },
  {
    field: "Backend",
    stacks: [
      {
        name: "PHP",
        icon: SiPhp,
      },
      {
        name: "NodeJS",
        icon: SiNodedotjs,
      },
      {
        name: "Codeigniter",
        icon: SiCodeigniter,
      },
      {
        name: "Laravel",
        icon: SiLaravel,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "AdonisJS",
        icon: SiAdonisjs,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
    ],
  },
  {
    field: "DevOps",
    stacks: [
      {
        name: "Nginx",
        icon: SiNginx,
      },
      {
        name: "PM2",
        icon: SiPm2,
      },
      {
        name: "Ubuntu Server",
        icon: SiUbuntu,
      },
    ],
  },
  {
    field: "Lainnya",
    stacks: [
      {
        name: "Rest API",
        icon: TbApi,
      },
      {
        name: "GIT",
        icon: SiGit,
      },
    ],
  },
];

export default function Skill() {
  return (
    <div className="bg-white rounded border-gray-400 border p-5 lg:p-8">
      <Header>Keahlian</Header>
      <div className="flex flex-col">
        {skills.map((item, index) => (
          <SkillList key={`${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
