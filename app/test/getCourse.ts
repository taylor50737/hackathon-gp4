import { connectDb } from '@/lib/connection';
import Logging from '@/logging/logging';
import { Course } from './course-table';
import { getCourses } from '@/lib/query/course';

export async function getAllCourses(): Promise<Course[] | null> {
  try {
    await connectDb();
    const courseList = await getCoursesData();
    return courseList;
  } catch (error) {
    Logging.error(`Database connection error: ${error}`);
    return null;
  }
}

/**
 * Retrieves all courses data and convert them to frontend format.
 * @async
 * @returns {Promise<Course[] | null>} A promise of an array of courses, or null if no result found.
 */
export async function getCoursesData(): Promise<Course[] | null> {
  const courses = await getCourses();

  if (courses) {
    const courseDataList = courses.map((course) => {
      const classRefList = course.classes.map((classObj) => {
        return { classId: classObj.toString(), name: classObj.name };
      });
      return {
        id: course._id.toString(),
        course_name: course.name,
        year: course.year.toString(),
        quarter: course.quarter,
        classes: classRefList,
      };
    });

    return courseDataList;
  }

  return null;
}
