import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { RiFileList3Line } from "react-icons/ri";
import { Test } from "../models/TestModel";
import axios from "axios";
import { useRouter } from "next/router";
import Spinner from "../components/Spinner";
import TestDetails from "../components/TestDetails";
import Link from "next/link";

const page = () => {
  const [test, setTest] = useState<Test | null>(null);
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/tests/${id}`);
      const currentTest = response.data.data();
      setTest(currentTest);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Card>
      <div className="flex justify-between mb-5">
        <div className="text-2xl flex items-center gap-2">
          <h1>Tests List</h1>
          <RiFileList3Line size={18} />
        </div>
        <div>
          <Link href="/new">
            <button className="bg-blue-700 px-3 py-2 cursor-pointer hover:bg-blue-500 active:shadow-md transition-colors text-white font-semibold rounded-md">
              Edit Test
            </button>
          </Link>
        </div>
      </div>

      {test ? (
        <TestDetails test={test} />
      ) : isLoading ? (
        <div className="w-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <h1 className="text-[20px] font-medium text-gray-700">No test found</h1>
      )}
    </Card>
  );
};

export default page;
