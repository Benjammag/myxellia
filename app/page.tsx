"use client";
import FeaturedListings from "@/components/featured/page";
import Navbar from "@/components/navbar/page";
import Hero from "@/components/overview/page";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <FeaturedListings />
    </div>
  );
}
