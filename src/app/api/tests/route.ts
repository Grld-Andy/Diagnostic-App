import { createTestSchema } from "@/validators/testValidationSchema";
import prisma from "../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createTestSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const newDiagnosis = await prisma.diagnosticTest.create({
    data: {
      patientName: body.patientName,
      testType: body.testType,
      result: body.result,
      testDate: new Date(body.testDate),
      notes: body.notes,
    },
  });

  return NextResponse.json(
    { data: newDiagnosis, message: "success" },
    { status: 201 }
  );
}

export async function GET(request: NextRequest) {
  const diagnosis = await prisma.diagnosticTest.findMany();

  return NextResponse.json(
    { data: diagnosis, message: "success" },
    { status: 200 }
  );
}
