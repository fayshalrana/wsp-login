"use client";

import ServicePanel from "@/components/Login/ServicePanel";
import LoginForm from "@/components/Login/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen p-4">
       <ServicePanel />
       <LoginForm />
    </main>
  );
}