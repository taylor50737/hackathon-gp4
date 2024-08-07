import CourseCard from "@/components/course-card";
import SubHeader from "@/components/ui/sub-header";
import CourseTable from "./course-table";
import React from "react";
import { getAllCourses } from "../../lib/api/getCourse";
import { getClassByCourses } from "../../lib/api/getClass";
import { getAllParticipants } from "@/lib/api/getParticipants";
import { ClassDetails } from "@/lib/api/type";

export default async function CoursePage() {
  const courseList = (await getAllCourses()) ?? [];

  let classList: ClassDetails[] | null = [];

  if (courseList) classList = await getClassByCourses(courseList[0].id);

  const studentList = await getAllParticipants();

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
