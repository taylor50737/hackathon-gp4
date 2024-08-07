import CourseCard from "@/components/course-card";
import SubHeader from "@/components/ui/sub-header";
import CourseTable from "./course-table";
import React from "react";
import { getAllCourses } from "./getCourse";
import { getClassByCourses } from "./getClass";
// import { getAllParticipants } from "./getParticipants";

export type Course = {
  id: string;
  course_name: string;
  year: string;
  quarter: string;
  classes: { classId: string; name: string }[];
};

export type ClassDetails = {
  id: string;
  name: string;
  ageGroup?: string;
  schedule: string;
  students?: string[];
  participantEnrolled: number;
  participantPaid: number;
  status?: string;
};

export default async function CoursePage() {
  const courseList = (await getAllCourses()) ?? [];

  let classList: ClassDetails[] | null = [];
  if (courseList) classList = await getClassByCourses(courseList[0].id);

  // const studentList = await getAllParticipants();

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
