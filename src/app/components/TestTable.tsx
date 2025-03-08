import React from "react";
import TestItem from "./TestItem";
import { Test } from "../models/TestModel";

interface Props {
  tests: Array<Test>;
}

const TestTable: React.FC<Props> = ({ tests }) => {
  return (
    <div>
      <div className="w-full border-1 border-black/50 rounded-md overflow-hidden">
        <div className="grid grid-cols-6 text-gray-700 font-semibold border-b border-black/50 bg-[#f2f4f5]">
          <div className="col-span-1 flex p-3">
            <p>Patient Name</p>
          </div>
          <div className="col-span-1 flex p-3">
            <p>Test Type</p>
          </div>
          <div className="col-span-1 flex p-3">
            <p>Result</p>
          </div>
          <div className="col-span-1 p-3 flex">
            <p>Test Date</p>
          </div>
          <div className="col-span-1 flex p-3">
            <p>Notes</p>
          </div>
          <div className="col-span-1 p-3 flex">
            <p>Actions</p>
          </div>
        </div>
        <div className="divide-y divide-gray-300 bg-white">
          {tests.map((test, index) => (
            <TestItem key={index} test={test} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestTable;
