import { Types } from 'mongoose';
import CourseModel, { ICourse } from '../schema/CourseSchema';
import { IRawCourse } from '../api/addData';
import { convertToObjectId } from '@/utils/convertToObjectId';
import Logging from '@/logging/logging';

export function convertCourseObjectId(course: IRawCourse): ICourse {
  return {
    ...course,
    _id: convertToObjectId(course._id),
    classes: course.classes.map((classObj) => {
      return {
        ...classObj,
        classId: convertToObjectId(classObj.classId),
      };
    }),
  };
}

/**
 * Add one or more courses into the database.
 * @async
 * @param {ICourse | ICourse[]} courses courses to be added
 * @returns {Promise<any>} Promise
 */
export async function addCourses(courses: ICourse | ICourse[]): Promise<any> {
  const result = await CourseModel.create(courses);
  Logging.info('Courses added to database.');
  return result;
}

/**
 * Retrieves all courses from the database.
 * @async
 * @returns {Promise<ICourse[] | null>} A promise of an array of courses, or null if no result found.
 */
export async function getCourses(): Promise<ICourse[] | null> {
  const courses = await CourseModel.find();
  return courses;
}

/**
 * Searches for a course by id
 * @async
 * @param {Types.ObjectId} id
 * @returns {Promise<ICourse | null>} A promise of a course, or null if not found
 */
export async function searchCourseById(
  id: Types.ObjectId
): Promise<ICourse | null> {
  const course = await CourseModel.findById(id);
  return course;
}

/**
 * Searches for courses by name, using a partial match.
 * @async
 * @param searchTerm - search term
 * @returns {Promise<ICourse[] | null>} A promise that resolves to an array of course objects matching the search criteria,
 *                                      or null if no matches are found.
 */
export async function searchCourseByName(
  searchTerm: string
): Promise<ICourse[] | null> {
  const course = await CourseModel.find({
    name: { $regex: searchTerm, $options: 'i' },
  });
  return course;
}
