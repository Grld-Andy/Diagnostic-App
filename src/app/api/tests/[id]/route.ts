import prisma from "../../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }
  const diagnosis = await prisma.diagnosticTest.findFirst({
    where: { id: Number(id) },
  });
  return NextResponse.json(
    { data: diagnosis, message: "success" },
    { status: 200 }
  );
}

export async function PUT(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }
  const body = await request.json();
  const diagnosis = await prisma.diagnosticTest.update({
    where: { id: Number(id) },
    data: {
      patientName: body.patientName,
      testType: body.testType,
      result: body.result,
      testDate: body.testDate,
      notes: body.notes,
    },
  });
  return NextResponse.json(
    { data: diagnosis, message: "success" },
    { status: 200 }
  );
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }
  await prisma.diagnosticTest.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json({ message: "success" }, { status: 204 });
}
