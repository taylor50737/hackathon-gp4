import React from 'react';
import { getAllCourses } from './getCourse';
import { getClassByCourses } from './getClass';
import { getAllParticipants } from './getParticipants';

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

export default async function CourseTable() {
  const courseList = await getAllCourses();

  let classList: ClassDetails[] | null = [];
  if (courseList) classList = await getClassByCourses(courseList[0].id);

  const studentList = await getAllParticipants();

  return (
    <div>
      {courseList?.map((course) => (
        <div key={course.id}>
          <div>Course: </div>
          {course.id}, {course.course_name}, {course.year}, {course.quarter}
        </div>
      ))}
      <div>
        <div>Class: </div>
        <div>
          {classList?.map((classObj) => (
            <div key={classObj.id}>
              {classObj.name}, {classObj.ageGroup}, {classObj.schedule},
              {classObj.participantEnrolled},{classObj.participantPaid},
              {classObj.status ? classObj.status : ''}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>Student: </div>
        {studentList?.map((student) => (
          <div key={student._id.toString()}>
            {student.firstName},{student.lastName},{student.address}
          </div>
        ))}
      </div>
    </div>
  );
}
