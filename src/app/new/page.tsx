"use client";

import Card from "@/app/components/Card";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Callout } from "@radix-ui/themes";
import { TbReportMedical } from "react-icons/tb";
import React, { useState } from "react";
import { Test } from "@/app/models/TestModel";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTestSchema } from "@/app/validators/testValidationSchema";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/app/components/ErrorMessage";

const CreateTaskPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Test>({
    resolver: zodResolver(createTestSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log("submitting data");
      setIsSubmitting(true);
      data.testDate = new Date().toDateString();
      console.log("current data: ", data);
      await axios.post("/api/tests", data);
      router.push("/");
    } catch (error) {
      setIsSubmitting(false);
      setError("An unexpected error occured.");
    }
  });

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
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center p-5 rounded-md"
      >
        <div className="flex flex-col gap-5 min-w-[300px]">
          <div className="flex flex-col gap-1">
            <label
              className="font-semibold text-[18px] text-gray-800"
              htmlFor="patientName"
            >
              Patient Name
            </label>
            <input
              required
              className="border rounded-sm px-2 py-1"
              placeholder="Patient Name"
              id="patientName"
              {...register("patientName")}
            ></input>
            <ErrorMessage>{errors.patientName?.message}</ErrorMessage>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="font-semibold text-[18px] text-gray-800"
              htmlFor="testType"
            >
              Test Type
            </label>
            <input
              required
              id="testType"
              className="border rounded-sm px-2 py-1"
              placeholder="Test Type"
              {...register("testType")}
            ></input>
            <ErrorMessage>{errors.testType?.message}</ErrorMessage>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="font-semibold text-[18px] text-gray-800"
              htmlFor="result"
            >
              Result
            </label>
            <input
              required
              id="result"
              className="border rounded-sm px-2 py-1"
              placeholder="Result"
              {...register("result")}
            ></input>
            <ErrorMessage>{errors.result?.message}</ErrorMessage>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="font-semibold text-[18px] text-gray-800"
              htmlFor="testDate"
            >
              Test Date
            </label>
            <input
              type="date"
              id="testDate"
              defaultValue={new Date().toISOString().split("T")[0]}
              className="border rounded-sm px-2 py-1"
              {...register("testDate")}
            />
            <ErrorMessage>{errors.testDate?.message}</ErrorMessage>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="font-semibold text-[18px] text-gray-800"
              htmlFor="notes"
            >
              Notes
            </label>
            <textarea
              required
              cols={6}
              id="notes"
              className="border w-full rounded-sm px-2 py-1"
              placeholder="Notes"
              {...register("notes")}
            ></textarea>
            <ErrorMessage>{errors.notes?.message}</ErrorMessage>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-800 w-full px-3 py-2 cursor-pointer hover:bg-blue-500 active:shadow-md transition-colors text-white font-semibold rounded-md"
          >
            Create Test
          </button>
        </div>
      </form>
    </Card>
  );
};

export default CreateTaskPage;
