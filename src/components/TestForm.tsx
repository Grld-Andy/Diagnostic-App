import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { useForm } from "react-hook-form";
import { Test } from "@/models/TestModel";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTestSchema } from "@/validators/testValidationSchema";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Props {
  setError: React.Dispatch<React.SetStateAction<string>>;
  apiRoute: string;
  buttonText: string;
  initialState: Test;
  apiMethod: "post" | "put";
  redirectRoute: string
}

const TestForm: React.FC<Props> = ({
  setError,
  apiRoute,
  buttonText,
  initialState,
  apiMethod,
  redirectRoute
}) => {
  const router = useRouter();
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
      setIsSubmitting(true);
      data.testDate = new Date().toDateString();
      if (apiMethod == "post") {
        await axios.post(apiRoute, data);
      } else if (apiMethod == "put") {
        await axios.put(apiRoute, data);
      }
      router.push(redirectRoute);
    } catch (error) {
      setIsSubmitting(false);
      setError("An unexpected error occured.");
    }
  });

  return (
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
            defaultValue={initialState.patientName}
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
            defaultValue={initialState.testType}
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
            defaultValue={initialState.result}
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
            defaultValue={initialState.testDate}
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
            defaultValue={initialState.notes}
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
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default TestForm;
