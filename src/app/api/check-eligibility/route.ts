import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    insuranceCompany,
    policyNumber,
    hospital,
    treatmentCategory,
  } = body;

  // ✅ Sukooon Insurance Policies Dummy Data
  const policies = [
    {
      policyNumber: "SUK12345",
      insuranceCompany: "Sukooon Insurance",
      networkHospitals: [
        "Apollo Hospital Mumbai",
        "Fortis Hospital Mulund",
        "Nanavati Max Hospital",
      ],
      coveredTreatments: ["Surgery", "Dental", "Cardiology"],
    },

    {
      policyNumber: "SUK67890",
      insuranceCompany: "Sukooon Insurance",
      networkHospitals: [
        "Kokilaben Ambani Hospital",
        "Lilavati Hospital Bandra",
      ],
      coveredTreatments: ["Orthopedic", "Neurology"],
    },
  ];

  // ✅ Step 1: Policy Match
  const policy = policies.find(
    (p) =>
      p.policyNumber === policyNumber &&
      p.insuranceCompany === insuranceCompany
  );

  if (!policy) {
    return NextResponse.json({
      eligible: false,
      message: " Sukooon Policy not found. Please enter correct Policy Number.",
    });
  }

  // ✅ Step 2: Hospital Check
  if (!policy.networkHospitals.includes(hospital)) {
    return NextResponse.json({
      eligible: false,
      message: " Hospital not covered under Sukooon Insurance network.",
    });
  }

  // ✅ Step 3: Treatment Check
  if (!policy.coveredTreatments.includes(treatmentCategory)) {
    return NextResponse.json({
      eligible: false,
      message: " Treatment not covered in Sukooon Insurance policy.",
    });
  }

  // ✅ Eligible
  return NextResponse.json({
    eligible: true,
    message: "Patient Eligible! Sukooon Insurance Cashless Available.",
  });
}
