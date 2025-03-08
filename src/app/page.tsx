"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Test } from "./models/TestModel";
import { RiFileList3Line } from "react-icons/ri";
import TestTable from "./components/TestTable";
import Spinner from "./components/Spinner";

export default function Home() {
  const [tests, setTests] = useState<Array<Test>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/tests");
        console.log(res.data);
        setTests(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {tests.length > 0 ? (
        <div className="bg-white p-5 border border-black/50 rounded-md">
          <div className="text-2xl flex items-center mb-5 gap-2">
            <h1>Tests List</h1>
            <RiFileList3Line size={18} />
          </div>
          <TestTable tests={tests} />
        </div>
      ) : isLoading ? (
        <Spinner />
      ) : (
        <h1 className="text-[20px] font-medium text-gray-700">No test found</h1>
      )}
    </>
  );
}
