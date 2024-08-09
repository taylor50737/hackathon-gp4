"use client";

import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { search } from "@/actions/search";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const [placeholder, setPlaceholder] = useState(
    "Search course name, class name or participant name..."
  );

  useEffect(() => {
    const updatePlaceholder = () => {
      if (window.innerWidth < 1024) {
        // lg breakpoint in Tailwind CSS
        setPlaceholder("Search...");
      } else {
        setPlaceholder("Search course name, class name or participant name...");
      }
    };

    // Set the initial placeholder based on the current window size
    updatePlaceholder();

    // Update placeholder when resizing
    window.addEventListener("resize", updatePlaceholder);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);

  return (
    <form action={search} className="w-full">
      <Input
        name="term"
        defaultValue={searchParams.get("term") || ""}
        placeholder={placeholder}
        className="truncate"
      />
    </form>
  );
}
