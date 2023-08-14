import { Fragment, useState } from "react";
import Container from "./components/Container";
import { CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg";
import Home from "./pages/Home";
import Study from "./pages/Study";
import Work from "./pages/Work";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { useSwipeable } from "react-swipeable";

const menus = [
  {
    name: "Tentang",
    element: <Home />,
  },
  {
    name: "Pendidikan",
    element: <Study />,
  },
  {
    name: "Riwayat Pekerjaan",
    element: <Work />,
  },
  {
    name: "Keahlian",
    element: <Skill />,
  },
  {
    name: "Portofolio Project",
    element: <Project />,
  },
  {
    name: "Kontak Saya",
    element: <Contact />,
  },
];

export default function Page() {
  const [active, setActive] = useState(0);
  const handlers = useSwipeable({
    delta: 10, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
    onSwipedLeft: () => {
      next();
    },
    onSwipedRight: () => {
      prev();
    },
  });

  const prev = () => {
    if (active - 1 >= 0) {
      setActive((value) => value - 1);
    }
  };

  const next = () => {
    if (active + 1 < menus.length) {
      setActive((active) => active + 1);
    }
  };

  return (
    <Fragment>
      <div className="fixed z-10 top-0 w-full bg-black bg-opacity-50">
        <Container className="h-10 flex items-center justify-center space-x-3">
          {menus.map((item, index) => (
            <div
              className={`${
                index === active ? "w-6 bg-primary-500" : "w-2 bg-gray-400"
              } h-2 rounded-full transition-all duration-500`}
              key={`${index}`}
            ></div>
          ))}
        </Container>
      </div>
      <div className="w-full bg-gray-200 overflow-x-hidden" {...handlers}>
        <div
          className="flex flex-nowrap w-full transition duration-500"
          style={{
            transform: `translateX(-${active * 100}%)`,
          }}
        >
          {menus.map((item, index) => (
            <div
              className="w-full flex-shrink-0 h-screen relative overflow-y-auto"
              key={`${index}`}
            >
              <Container className="relative min-h-screen pb-20 pt-16 flex flex-col">
                {item.element}
              </Container>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-400">
        <Container className="h-16 flex items-center justify-center space-x-4">
          <button
            type="button"
            onClick={() => {
              prev();
            }}
            className={
              "w-12 h-12 text-xl flex justify-center items-center rounded-full hover:bg-gray-100 " +
              (active > 0 ? "visible" : "invisible")
            }
          >
            <CgChevronDoubleLeft />
          </button>
          <div className="flex-1 text-center font-montserrat font-bold text-gray-800">
            {menus[active].name}
          </div>
          <button
            type="button"
            onClick={() => {
              next();
            }}
            className={
              "w-12 h-12 text-xl flex justify-center items-center rounded-full hover:bg-gray-100 " +
              (active + 1 < menus.length ? "visible" : "invisible")
            }
          >
            <CgChevronDoubleRight />
          </button>
        </Container>
      </div>
    </Fragment>
  );
}
