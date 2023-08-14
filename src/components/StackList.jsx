export default function StackList({ name, icon: Icon }) {
  return (
    <div className="flex flex-col items-center justify-center p-5 border rounded group hover:border-primary-500 cursor-pointer hover:bg-primary-100">
      <div className="h-10 w-10 bg-gray-200 mb-2 group-hover:bg-gray-800 rounded flex justify-center items-center">
        <Icon className="text-3xl group-hover:text-primary-500" />
      </div>
      <div className="text-xs">{name}</div>
    </div>
  );
}
