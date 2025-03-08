"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [patients, setPatients] = useState({});

  useEffect(async () => {
    const res = await axios.get("/api/tests");
    console.log(res);
  }, []);

  return (
    <div>
      <div>
        <div>
          <h1>Name</h1>
          <h1>Test Type</h1>
          <h1>Result</h1>
          <h1>Test Date</h1>
          <h1>Notes</h1>
        </div>
        <div>
          <h1>Name</h1>
          <h1>Test Type</h1>
          <h1>Result</h1>
          <h1>Test Date</h1>
          <h1>Notes</h1>
        </div>
      </div>
    </div>
  );
}
