import React from "react";
import { Test } from "../models/TestModel";
import { MdModeEditOutline, MdDeleteForever } from "react-icons/md";

interface Props {
  test: Test;
}

const TestItem: React.FC<Props> = ({ test }) => {
  return (
    <div
      className={`grid grid-cols-6 pr-1 items-center transition-colors duration-200`}
    >
      <div className="col-span-1 p-2">{test.patientName}</div>
      <div className="col-span-1 p-2">{test.testType}</div>
      <div className="col-span-1 p-2">{test.result}</div>
      <div className="col-span-1 p-2">
        {new Date(test.testDate).toDateString()}
      </div>
      <div className="col-span-1 p-2">{test.notes}</div>
      <div className="col-span-1 p-2 flex flex-col gap-2">
        <button className="px-1 py-2 rounded-md bg-yellow-500">
          <MdModeEditOutline />
        </button>
        <button className="px-1 py-2 rounded-md bg-red-500">
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default TestItem;
