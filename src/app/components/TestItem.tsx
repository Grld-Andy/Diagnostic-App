import React from "react";
import { Test } from "../models/TestModel";
import { MdModeEditOutline, MdDeleteForever } from "react-icons/md";

interface Props {
  test: Test;
}

const TestItem: React.FC<Props> = ({ test }) => {
  return (
    <div
      className={`grid grid-cols-[40px_repeat(5,1fr)_90px] pr-1 items-center transition-colors duration-200`}
    >
      <div className="col-span-1 p-2 flex it">{test.id}</div>
      <div className="col-span-1 p-2">{test.patientName}</div>
      <div className="col-span-1 p-2">{test.testType}</div>
      <div className="col-span-1 p-2">{test.result}</div>
      <div className="col-span-1 p-2">
        {new Date(test.testDate).toDateString()}
      </div>
      <div className="col-span-1 p-2">{test.notes}</div>
      <div className="col-span-1 p-2 flex justify-center gap-2 text-white">
        <button className="px-2 py-2 rounded-md bg-yellow-500">
          <MdModeEditOutline size={20} />
        </button>
        <button className="px-2 py-2 rounded-md bg-red-500">
          <MdDeleteForever size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestItem;
