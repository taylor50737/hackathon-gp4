"use client";

import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { search } from "@/actions/search";

export default function SearchInput() {
  const SearchParams = useSearchParams();
  return (
    <form action={search} className="w-full">
      <Input
        name="term"
        defaultValue={SearchParams.get("term") || ""}
        placeholder="Search by course name, class name or participant name..."
      />
    </form>
  );
}
