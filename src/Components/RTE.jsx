import React from "react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="block mb-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field }) => (
          <textarea className="w-full border p-2 min-h-[150px]" {...field} />
        )}
      />
    </div>
  );
}
