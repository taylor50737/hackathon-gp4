import CourseCard from "@/components/course-card";
import SubHeader from "@/components/ui/sub-header";
import CourseTable from "./course-table";
import React from "react";
import { getAllCourses } from "../../lib/api/getCourse";

export default async function CoursePage() {
  const courseList = (await getAllCourses()) ?? [];

  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4">
      <SubHeader header="All Courses" />
      <div>
        <b>Recent Courses →</b>
        <CourseCard />
      </div>
      <CourseTable courseList={courseList} />
    </div>
  );
}
