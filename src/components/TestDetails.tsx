import React from "react";
import { Test } from "@/models/TestModel";

interface Props {
  test: Test;
}

const TestDetails: React.FC<Props> = ({ test }) => {
  return (
    <div className="flex flex-col items-center p-5 rounded-md">
      <div className="flex flex-col gap-5 min-w-[300px]">
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
          <p>{test.testDate}</p>
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
