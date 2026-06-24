import React, { useId } from "react";

const Select = ({ options, label, classname = "", ref, ...props }) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor="id" className="inline-block mb-1 pl-1 text-gray-300">{label}</label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`${classname} px-3 py-2 text-gray-100 bg-gray-700 outline-none focus:bg-gray-600 focus:ring-2 focus:ring-blue-500 duration-200 border border-gray-600 rounded-lg w-full`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
