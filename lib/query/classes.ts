import { Types } from 'mongoose';
import ClassModel, { IClass } from '../schema/ClassSchema';

/**
 * Add one or more classes into the database.
 * @async
 * @param {Promise<IClass | IClass[]>} classes classes to be added
 * @returns {Promise<any>} Promise
 */
export async function addClasses(classes: IClass | IClass[]): Promise<any> {
  const result = await ClassModel.create(classes);
  return result;
}

/**
 * Retrieves all classes from the database.
 * @async
 * @returns {Promise<IClass[] | null>} - Promise that resolves to an array of classes.
 */
export async function getClasses(): Promise<IClass[] | null> {
  const classes = await ClassModel.find();
  return classes;
}

/**
 * Search a class by its object id
 * @async
 * @param {Types.ObjectId} id - The object id of the class
 * @returns {Promise<IClass | null>} - Promise of a class, or null if not found
 */
export async function searchClassById(
  id: Types.ObjectId
): Promise<IClass | null> {
  const classMatched = await ClassModel.findById(id);
  return classMatched;
}

/**
 * Search a class by its partial or full name
 * @async
 * @param name - The name of the class
 * @returns {Promise<IClass[] | null>} - Promise of a class object or class array, or null if not found
 */
export async function searchClassByName(
  name: string
): Promise<IClass[] | null> {
  const classMatched = await ClassModel.find({
    name: { $regex: name, $options: 'i' },
  });
  return classMatched;
}

/**
 * Search a class under a specified course, using the course name
 * @async
 * @param {Types.ObjectId} courseId - The object id of the course
 * @returns {Promise<IClass[] | null>} - Promise of a class array, or null if not found
 */
export async function searchClassesByCourse(
  courseId: Types.ObjectId
): Promise<IClass[] | null> {
  const classes = await ClassModel.find({ 'course.courseId': courseId });
  return classes;
}
