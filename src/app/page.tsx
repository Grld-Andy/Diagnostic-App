"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Test } from "./models/TestModel";
import { RiFileList3Line } from "react-icons/ri";
import TestTable from "./components/TestTable";
import Spinner from "./components/Spinner";
import Link from "next/link";
import Card from "@/app/components/Card";

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
        <Card>
          <div className="flex justify-between mb-5">
            <div className="text-2xl flex items-center gap-2">
              <h1>Tests List</h1>
              <RiFileList3Line size={18} />
            </div>
            <Link href="/pages/tests/new">
              <button className="bg-blue-700 px-3 py-2 cursor-pointer hover:bg-blue-500 active:shadow-md transition-colors text-white font-semibold rounded-md">
                Add Test
              </button>
            </Link>
          </div>
          <TestTable tests={tests} />
        </Card>
      ) : isLoading ? (
        <div className="w-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <h1 className="text-[20px] font-medium text-gray-700">No test found</h1>
      )}
    </>
  );
}
