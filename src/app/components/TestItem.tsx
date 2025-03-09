import React, { Dispatch, SetStateAction, useState } from "react";
import { Test } from "../models/TestModel";
import axios from "axios";
import { Callout } from "@radix-ui/themes";
import { MdModeEditOutline, MdDeleteForever } from "react-icons/md";

interface Props {
  test: Test;
  setTests: Dispatch<SetStateAction<Array<Test>>>;
}

const TestItem: React.FC<Props> = ({ test, setTests }) => {
  const [error, setError] = useState<string>("");

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/tests/${id}`);
      setTests((prev) => prev.filter((t) => t.id != id));
    } catch (err) {
      console.error(err);
      setError("There was an error deleting data");
    }
  };

  return (
    <div
      className={`grid grid-cols-[40px_repeat(5,1fr)_90px] pr-1 items-center transition-colors duration-200`}
    >
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <div className="col-span-1 p-2 flex justify-center">{test.id}</div>
      <div className="col-span-1 p-2">{test.patientName}</div>
      <div className="col-span-1 p-2">{test.testType}</div>
      <div className="col-span-1 p-2">{test.result}</div>
      <div className="col-span-1 p-2">
        {new Date(test.testDate).toDateString()}
      </div>
      <div className="col-span-1 p-2">{test.notes}</div>
      <div className="col-span-1 p-2 flex justify-center gap-2 text-white">
        <button className="px-2 py-2 rounded-md bg-yellow-500 active:shadow-md transition-colors hover:bg-yellow-400 cursor-pointer">
          <MdModeEditOutline size={20} />
        </button>
        <button
          onClick={() => {
            handleDelete(test.id!);
          }}
          className="px-2 py-2 rounded-md bg-red-500 active:shadow-md transition-colors hover:bg-red-400 cursor-pointer"
        >
          <MdDeleteForever size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestItem;
