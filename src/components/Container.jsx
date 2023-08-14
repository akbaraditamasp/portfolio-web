export default function Container({
  className = "",
  containerClassName = "",
  children,
}) {
  return (
    <div className={"flex justify-center px-5 lg:px-8 " + containerClassName}>
      <div className={"w-full md:w-[640px] " + className}>{children}</div>
    </div>
  );
}
