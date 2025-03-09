"use client";

import Card from "@/components/Card";
import { Callout } from "@radix-ui/themes";
import { TbReportMedical } from "react-icons/tb";
import React, { useState } from "react";
import TestForm from "@/components/TestForm";
import { Test } from "@/models/TestModel";

const CreateTestPage = () => {
  const [error, setError] = useState<string>("");
  const initialState: Test = {
    patientName: "",
    testType: "",
    testDate: new Date().toISOString().split("T")[0],
    result: "",
    notes: "",
  };

  return (
    <Card>
      <div className="text-2xl flex items-center gap-2 mb-5">
        <h1>Create Test</h1>
        <TbReportMedical size={18} />
      </div>
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <TestForm
        setError={setError}
        apiRoute={"/api/tests"}
        apiMethod={"post"}
        buttonText={"Create Test"}
        initialState={initialState}
        redirectRoute={"/"}
      />
    </Card>
  );
};

export default CreateTestPage;
