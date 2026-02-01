"use client";

import Layout from "../components/Layout";
import CheckEligibilityForm from "../api/check-eligibility/CheckEligibilityForm";

export default function EligibilityPage() {
  return (
    <Layout>
      <CheckEligibilityForm />
    </Layout>
  );
}
