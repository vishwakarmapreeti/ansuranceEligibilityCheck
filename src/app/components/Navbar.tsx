"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import "./navbar.css";

export default function Navbar() {
  const router = useRouter();

  // Logout Function
  const handleLogout = () => {
    router.push("/"); // Redirect to Login Page
  };

  return (
    <nav className="navbar">
      {/* Left Logo */}
       <div className="navbar-left">
        <div className="logo-area">
          <img src="/header.png" alt="Sukooon Logo" className="logo-img" />
        </div>
        {/* <span className="tagline">Insurance Verification</span> */}
      </div>
      {/* Center Menu */}
      <ul className="navbar-menu">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/check-eligibility">Eligibility Check</Link>
        </li>
        <li>
          <Link href="/result">Results</Link>
        </li>
        <li>
          <Link href="#">Verifications</Link>
        </li>
        <li>
          <Link href="#">Reports</Link>
        </li>
      </ul>

   
      <div className="navbar-right">
        {/* <div className="user">
          <span className="avatar">JD</span>
          <p>John Doe</p>
        </div> */}

        {/* Logout Button */}
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
}
