"use client";

import { fontBodyNormal, fontBigTypoDesktop } from "@/styles/typography";
import Image from "next/image"; // Import Next.js Image component
import logo from "@/icons/logo.png";

const BG = "https://s3-alpha-sig.figma.com/img/97c5/77dd/b047dd3c09ed673e80bc7a6d07bed063?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c7G-LRN-ZdwgHk4t4mlU~hClSFddpnOcepvluPiXgTcbZIr4cklk1uAc0u19thuNi0K7VDoh1sBq3-95n6tPH~FeC~CImN7WrcaZ4y-pu20ghNlCPO3Jq3TqwvpkqoUMoCL6dBlVlsEAbtW9uYc7y~DEndkeI49yYvHRLaR2yMviluIhTLXU~gF5eKoXYi7ViyEzBsHYURfd3hZkHjxQRnItXeL31wN-jg6tGcCryGf5E9j9PYkc2al6fCykIokTj5HvSB~PmwtB0USacOVBNAk5KGDyvrm860fCeUlfwVsGckpecmJ4gHY62vZ4MejG2GPoiy~V79IN2oT0rC5D7A__";

export default function ServicePanel() {
  return (
    <div className="relative hidden w-1/4 min-w-[480px] overflow-hidden rounded-5 p-4 lg:flex">
      {/* Background Image */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-40 z-10" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 50%, #000 100%)" }}></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BG})` }}
      />

      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-signIn" />

      <div className="relative z-10 h-full md:p-4 flex flex-col">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={80} height={40} className="w-auto h-10" />
        </div>
        <div 
  className="mt-auto">
  <h1 className={`${fontBigTypoDesktop} text-white mb-6`}>
    Service Panel
  </h1>
  <p className={`${fontBodyNormal} text-white/90 max-w-md`}>
    Streamline your restaurant operations with BMS. Manage reservations, orders, inventory, and staff effortlessly, and focus on delivering exceptional dining experiences.
  </p>
</div>
      </div>
    </div>
  );
}
