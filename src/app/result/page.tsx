"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ResultPage() {
  const [result, setResult] = useState<{
    eligible: boolean;
    name: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("eligibilityResult");
    if (stored) {
      setResult(JSON.parse(stored));
    }
  }, []);

  if (!result) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3>No eligibility data found</h3>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
      <h2>Sukooon Insurance Result</h2>

      {result.eligible ? (
        <>
          <Image src="/checked.png" alt="Eligible" width={80} height={80} />
          <h3 style={{ color: "green", marginTop: "15px" }}>
            Patient Eligible
          </h3>
        </>
      ) : (
        <>
          <Image src="/close.png" alt="Not Eligible" width={80} height={80} />
          <h3 style={{ color: "red", marginTop: "15px" }}>
            Patient Not Eligible
          </h3>
        </>
      )}

      <p>
        <b>Patient Name:</b> {result.name}
      </p>
      <p style={{ color: result.eligible ? "black" : "red" }}>
        {result.message}
      </p>
    </div>
  );
}
