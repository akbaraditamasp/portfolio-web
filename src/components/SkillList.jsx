import StackList from "./StackList";

export default function SkillList({ field, stacks }) {
  return (
    <div className="mb-8">
      <div className="pb-3 mb-3 border-b font-bold">{field}</div>
      <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-3 gap-5">
        {stacks.map((item, index) => (
          <StackList key={`${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
