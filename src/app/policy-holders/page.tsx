"use client";

import Layout from "@/app/components/Layout";
import PolicyHolderTable from "./PolicyHolderTable";

export default function PolicyHolderPage() {
  return (
    <Layout>
      <div className="container">
        <h1>Policy Holder Records</h1>
        <PolicyHolderTable />
      </div>
    </Layout>
  );
}
