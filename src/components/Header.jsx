import { Fragment } from "react";

export default function Header({ children }) {
  return (
    <Fragment>
      <h3 className="mb-3 font-montserrat font-bold text-xl text-gray-800">
        {children}
      </h3>
      <div className="flex h-2 mb-5">
        <div className="h-full bg-primary-500 w-16 rounded-l-sm"></div>
        <div className="h-full bg-gray-900 w-5 rounded-r-sm"></div>
      </div>
    </Fragment>
  );
}
