import { NextResponse } from "next/server";
import { dummyPatients } from "../../policy-holders/data";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    patientId,

    treatmentCategory, // selected from dropdown (ONE value)
  } = body;

  // 1️⃣ Find patient by patientId OR policyNumber
  const patient = dummyPatients.find(
    (p) =>
      p.patientId === patientId
  );

  // 2️⃣ If patient not found
  if (!patient) {
    return NextResponse.json({
      eligible: false,
      message: "Patient or policy not found ",
    });
  }

  // 3️⃣ Validate ONLY treatmentCategory category
  const istreatmentCategoryEligible =
    patient.treatmentCategory.includes(treatmentCategory);

  // 4️⃣ If treatmentCategory NOT covered
  if (!istreatmentCategoryEligible) {
    return NextResponse.json({
      eligible: false,
      message: `Not eligible  "${treatmentCategory}" is not covered under this policy`,
    });
  }

  // 5️⃣ Eligible case
  return NextResponse.json({
    eligible: true,
    message: `Eligible  "${treatmentCategory}" is covered for ${patient.patientName}`,
  });
}
