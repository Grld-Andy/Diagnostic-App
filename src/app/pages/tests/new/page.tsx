import Card from "@/app/components/Card";
import { TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios'
import React from "react";

const page = () => {
  return (
    <Card>
      <div className="text-2xl flex items-center gap-2">
        <h1>Create Test</h1>
        <form>
          <div>
            <TextField.Root placeholder="Patient Name"></TextField.Root>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default page;
