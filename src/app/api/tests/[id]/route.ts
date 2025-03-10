import prisma from "../../../../../prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }
  const diagnosis = await prisma.diagnosticTest.findUnique({
    where: { id: Number(id) },
  });
  return NextResponse.json(
    { data: diagnosis, message: "success" },
    { status: 200 }
  );
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
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
      testDate: new Date(body.testDate),
      notes: body.notes,
    },
  });
  return NextResponse.json(
    { data: diagnosis, message: "success" },
    { status: 200 }
  );
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }
  try {
    await prisma.diagnosticTest.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete test", details: error },
      { status: 500 }
    );
  }
}
