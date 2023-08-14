export default function ContactList({ name, value, icon: Icon }) {
  return (
    <div className="flex items-center border border-gray-400 rounded p-3 space-x-5">
      <div className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 bg-gray-100 border rounded flex justify-center items-center">
        <Icon size={32} className="text-gray-500" />
      </div>
      <div className="flex-1">
        <div className="text-sm">{name}</div>
        <div className="font-bold font-montserrat text-sm">{value}</div>
      </div>
    </div>
  );
}
