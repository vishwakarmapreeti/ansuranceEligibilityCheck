"use client";

import { useState } from "react";
import { dummyPatients } from "./data";
import "./policy-holder.css"
export default function PolicyHolderTable() {
  const [search, setSearch] = useState("");

  const filteredPatients = dummyPatients.filter((p) =>
    `${p.patientName} ${p.patientId} ${p.policyNumber} ${p.hospital}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search Box */}
      <input
        className="search-input"
        placeholder="Search by name, patient ID, policy, hospital..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>DOB</th>

              <th>Patient ID</th>
              <th>Policy</th>
              <th>Company</th>
              <th>Treatment</th>
              <th>Hospital</th>
              <th>Physician</th>
            </tr>
          </thead>

          <tbody>
            {filteredPatients.map((p) => (
              <tr key={p.patientId}>
                <td>{p.patientName}</td>
                <td>{p.dob}</td>

                <td>{p.patientId}</td>
                <td>{p.policyNumber}</td>
                <td>{p.insuranceCompany}</td>

                {/* Badge column */}
                <td>
                  <div className="badge-group">
                    {p.treatmentCategory.map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </td>

                <td>{p.hospital}</td>
                <td>{p.physician}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredPatients.length === 0 && (
          <p className="no-data">No matching records found</p>
        )}
      </div>
    </>
  );
}
