-- CreateTable
CREATE TABLE "DiagnosticTest" (
    "id" SERIAL NOT NULL,
    "patientName" VARCHAR(255) NOT NULL,
    "testType" VARCHAR(255) NOT NULL,
    "result" BOOLEAN NOT NULL,
    "testDate" DATE NOT NULL,
    "notes" TEXT NOT NULL,

    CONSTRAINT "DiagnosticTest_pkey" PRIMARY KEY ("id")
);
