import React, { Dispatch, SetStateAction, useState } from "react";
import { Test } from "@/models/TestModel";
import axios from "axios";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Callout } from "@radix-ui/themes";
import { MdModeEditOutline, MdDeleteForever } from "react-icons/md";
import Link from "next/link";

interface Props {
  test: Test;
  setTests: Dispatch<SetStateAction<Array<Test>>>;
}

const TestItem: React.FC<Props> = ({ test, setTests }) => {
  const [error, setError] = useState<string>("");

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this test?");
    if (!confirmDelete) return;
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
      className={`grid grid-cols-[50px_repeat(5,1fr)_90px] items-center transition-colors duration-200`}
    >
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <Link
        href={`/${test.id}`}
        className="col-span-1 p-2 flex gap-1 justify-center items-center"
      >
        <HiOutlineExternalLink size={50} className="text-blue-500" />
        <p>{test.id}</p>
      </Link>
      <div className="col-span-1 p-2">
        <p>{test.patientName}</p>
      </div>
      <div className="col-span-1 p-2">
        <p>{test.testType}</p>
      </div>
      <div className="col-span-1 p-2">
        <p>{test.result}</p>
      </div>
      <div className="col-span-1 p-2">
        <p>{new Date(test.testDate).toDateString()}</p>
      </div>
      <div className="col-span-1 p-2 overflow-hidden">
        <p className="overflow-hidden text-ellipsis line-clamp-3">
          {test.notes}
        </p>
      </div>
      <div className="col-span-1 p-2 flex justify-center gap-2 text-white">
        <Link href={`/${test.id}/edit`}>
          <button className="px-2 py-2 rounded-md bg-yellow-500 active:shadow-md transition-colors hover:bg-yellow-400 cursor-pointer">
            <MdModeEditOutline size={20} />
          </button>
        </Link>
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
