"use client";

import { useState } from "react";
import "./CheckEligibilityForm.css";
import { useRouter } from "next/navigation";
// import EligibilityModal from "@/app/result/EligibilityModal";
export default function CheckEligibilityForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    patientName: "",
    dob: "",
    patientId: "",

    policyNumber: "",
    insuranceCompany: "Sukooon Insurance", // hidden but sent to API

    treatmentCategory: "",
    treatmentDate: "",

    hospital: "",
    physician: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [resultData, setResultData] = useState<any>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/check-eligibility", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    // ✅ Store Result in State
    // setResultData({
    //   eligible: data.eligible,
    //   name: formData.patientName,
    //   message: data.message,
    // });


    // setShowModal(true);

    sessionStorage.setItem(
  "eligibilityResult",
  JSON.stringify({
    eligible: data.eligible,
    name: formData.patientName,
    message: data.message,
  })
);
      router.push(
    `/result`
  );

    setFormData({
      patientName: "",
      dob: "",
      patientId: "",

      policyNumber: "",
      insuranceCompany: "Sukooon Insurance", // keep default

      treatmentCategory: "",
      treatmentDate: "",

      hospital: "",
      physician: "",
    });

  };

  return (
    <form className="eligibility-form" onSubmit={handleSubmit}>
      {/* ================= 1. Patient Information ================= */}
      <div className="form-section">
        <h2>Patient Information</h2>
        <p className="subtitle">
          Enter patient details and policy information
        </p>

        {/* Patient Name */}
        <label>Patient Full Name *</label>
        <input
          type="text"
          name="patientName"
          placeholder="Enter patient's full legal name"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <div className="two-column">
          {/* DOB */}
          <div>
            <label>Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          {/* Patient ID */}
          <div>
            <label>Patient ID <span className="optional">*</span></label>
            <input
              type="text"
              name="patientId"
              placeholder="e.g., PT-2026-001234"
              value={formData.patientId}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* ✅ Policy Number MOVED HERE */}
        <label>Policy Number *</label>
        <input
          type="text"
          name="policyNumber"
          placeholder="e.g., SUK12345"
          value={formData.policyNumber}
          onChange={handleChange}
          required
        />
      </div>

      {/* ================= 2. Treatment Information ================= */}
      <div className="form-section">
        <h2>Treatment Information</h2>
        <p className="subtitle">Select treatment type and schedule</p>

        <label>Treatment Category *</label>
        <select
          name="treatmentCategory"
          value={formData.treatmentCategory}
          onChange={handleChange}
          required
        >
          <option value="">Select treatment</option>
          <option>Surgery</option>
          <option>Dental</option>
          <option>Cardiology</option>
          <option>Orthopedic</option>
          <option>Neurology</option>
          <option>Oncology</option>
          <option>Pediatrics</option>
          <option>Dermatology</option>
          <option>Gastroenterology</option>
        </select>

        <label>Scheduled Treatment Date (Optional)</label>
        <input
          type="date"
          name="treatmentDate"
          value={formData.treatmentDate}
          onChange={handleChange}
        />
      </div>

      {/* ================= 3. Hospital Verification ================= */}
      <div className="form-section">
        <h2>Hospital Verification</h2>
        <p className="subtitle">Select healthcare facility details</p>

        <label>Healthcare Facility *</label>
        <select
          name="hospital"
          value={formData.hospital}
          onChange={handleChange}
          required
        >
          <option value="">Select hospital</option>
          <option>Apollo Hospital Mumbai</option>
          <option>Fortis Hospital Mulund</option>
          <option>Nanavati Max Hospital</option>
          <option>Kokilaben Ambani Hospital</option>
          <option>Lilavati Hospital Bandra</option>
        </select>

        <label>Referring Physician (Optional)</label>
        <input
          type="text"
          name="physician"
          placeholder="Enter physician name"
          value={formData.physician}
          onChange={handleChange}
        />
      </div>

      {/* ================= Submit ================= */}

      <button type="submit" className="submit-btn" name="submit">
        Check Eligibility
      </button>

      {/* {resultData && (
        <EligibilityModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          result={resultData}
        />
      )} */}
    </form>

  );
}
