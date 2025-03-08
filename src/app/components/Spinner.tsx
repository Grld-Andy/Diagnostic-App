import React from "react";

const Spinner = () => {
  return (
    <div className="flex gap-2 items-center">
    <div
      className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
      role="status"
    >
    </div>
    <span>Loading...</span>
    </div>
  );
};

export default Spinner;
