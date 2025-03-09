"use client";

import Card from "@/components/Card";
import { Callout } from "@radix-ui/themes";
import { RiFileEditLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { Test } from "@/models/TestModel";
import TestForm from "@/components/TestForm";
import { useParams } from "next/navigation";
import axios from "axios";
import Spinner from "@/components/Spinner";

const page = () => {
  const [error, setError] = useState<string>("");
  const [test, setTest] = useState<Test | null>(null);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/tests/${id}`);
      const currentTest = response.data.data;
      currentTest.testDate = new Date(currentTest.testDate)
        .toISOString()
        .split("T")[0];
      console.log(currentTest);
      setTest(currentTest);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Card>
      <div className="text-2xl flex items-center gap-2 mb-5">
        <h1>Edit Test</h1>
        <RiFileEditLine size={18} />
      </div>
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      {test ? (
        <TestForm
          setError={setError}
          apiRoute={`/api/tests/${id}`}
          buttonText={"Update Test"}
          apiMethod={"put"}
          initialState={test}
          redirectRoute={`/${id}`}
        />
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
