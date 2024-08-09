import { connectDb } from "@/lib/connection";
import Logging from "@/logging/logging";
import { searchCourseByName } from "./course";
import { searchClassByName } from "./classes";
import { searchStudentByName } from "./student";
import {
  restructureCourseData,
  restructureClassData,
  restructureStudentData,
} from "./restructureData";

export async function fetchBySearchTerm(term: string) {
    let students = [], courses = [], classes = []; // Declare outside to widen scope
    try {
      await connectDb();
      const results = await Promise.all([
        searchStudentByName(term),
        searchCourseByName(term),
        searchClassByName(term),
      ]);
      students = results[0] || [];
      courses = results[1] || [];
      classes = results[2] || [];
    } catch (error) {
      Logging.error(`Data Fetching error: ${error}`);
      return null;
    }

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
