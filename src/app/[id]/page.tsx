"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import { Test } from "@/models/TestModel";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import Spinner from "@/components/Spinner";
import TestDetails from "@/components/TestDetails";
import Link from "next/link";
import { Callout } from "@radix-ui/themes";

const TestDetailsPage = () => {
  const [test, setTest] = useState<Test | null>(null);
  const router = useRouter();
  let { id } = useParams();
  id = Array.isArray(id) ? id[0] : id || "";
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/tests/${id}`);
      const currentTest = response.data.data;
      setTest(currentTest);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm('Are you sure you want to delete this test?')
    if(!confirmDelete)return
    try {
      await axios.delete(`/api/tests/${id}`);
      router.push("/");
    } catch (_err) {
      setError("There was an error deleting data");
    }
  };

  if (!id) {
    return <h1>Page not found</h1>;
  }

  return (
    <Card>
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <div className="flex justify-between mb-5">
        <div className="text-2xl flex items-center gap-2">
          <h1>Test #{id}</h1>
        </div>
        <div className="flex gap-2">
          <Link href={`/${id}/edit`}>
            <button className="bg-yellow-500 px-3 py-2 cursor-pointer hover:bg-yellow-400 active:shadow-md transition-colors text-white font-semibold rounded-md">
              Edit
            </button>
          </Link>
          <button
            onClick={() => {
              handleDelete(id);
            }}
            className="bg-red-500 px-3 py-2 cursor-pointer hover:bg-red-400 active:shadow-md transition-colors text-white font-semibold rounded-md"
          >
            Delete
          </button>
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

export default TestDetailsPage;
