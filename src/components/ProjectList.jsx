export default function ProjectList({ name, url, image, position }) {
  return (
    <a
      href={url}
      className="flex items-center border border-gray-400 rounded p-3 space-x-5"
    >
      <div className="w-16 h-16 flex-shrink-0 bg-gray-100 border rounded flex justify-center items-center overflow-hidden">
        {image}
      </div>
      <div className="flex-1">
        <div className="font-bold font-montserrat">{name}</div>
        <div className="text-sm">{position}</div>
      </div>
    </a>
  );
}
