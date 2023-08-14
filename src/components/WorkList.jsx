import { CgWorkAlt } from "react-icons/cg";

export default function WorkList({ company, position, year }) {
  return (
    <div className="flex items-center border border-gray-400 rounded p-3 space-x-5">
      <div className="w-16 h-16 flex-shrink-0 bg-gray-100 border rounded flex justify-center items-center">
        <CgWorkAlt size={40} className="text-gray-500" />
      </div>
      <div className="flex-1">
        <div className="font-bold font-montserrat">{company}</div>
        <div className="text-sm">{position}</div>
        <div className="text-sm">{year}</div>
      </div>
    </div>
  );
}
