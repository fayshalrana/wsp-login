"use client";

import ServicePanel from "@/components/Login/ServicePanel";
import LoginForm from "@/components/Login/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen p-4 flex-col lg:flex-row">
       <ServicePanel />
       <LoginForm />
    </main>
  );
}