import { searchCourseByName } from "./course";
import { searchClassByName } from "./classes";
import { searchStudentByName } from "./student";
import {
  restructureCourseData,
  restructureClassData,
  restructureStudentData,
} from "./restructureData";

export async function fetchBySearchTerm(term: string) {
  const [students, courses, classes] = await Promise.all([
    searchStudentByName(term),
    searchCourseByName(term),
    searchClassByName(term),
  ]);

  const restructuredCourses = restructureCourseData(courses || []);
  const restructuredClasses = restructureClassData(classes || []);
  const restructuredStudents = restructureStudentData(students || []);

  const results = [
    ...restructuredCourses,
    ...restructuredClasses,
    ...restructuredStudents,
  ];

  return results;
}
