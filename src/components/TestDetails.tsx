import React from "react";
import { Test } from "@/models/TestModel";

interface Props {
  test: Test;
}

const TestDetails: React.FC<Props> = ({ test }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-5 p-5 rounded-md min-w-[300px] border border-black/50">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-[18px] text-gray-800">
            Patient Name
          </h2>
          <p>{test.patientName}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-[18px] text-gray-800">Test Type</h2>
          <p>{test.testType}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-[18px] text-gray-800">Result</h2>
          <p>{test.result}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-[18px] text-gray-800">Test Date</h2>
          <p>{new Date(test.testDate).toDateString()}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-[18px] text-gray-800">Notes</h2>
          <p>{test.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default TestDetails;
