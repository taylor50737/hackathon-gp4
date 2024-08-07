import { Types } from 'mongoose';
import StudentModel, { IStudent } from '../schema/StudentSchema';
import ClassModel from '../schema/ClassSchema';

/**
 * Add one or more students into the database.
 * @async
 * @param {IStudent | IStudent[]} students students to be added
 * @returns {Promise<any>} Promise
 */
export async function addStudents(
  students: IStudent | IStudent[]
): Promise<any> {
  const result = await StudentModel.create(students);
  return result;
}

/**
 * Retrieves all students from the database.
 * @async
 * @returns {Promise<IStudent[] | null>} A promise of an array of students, or null if no result found.
 */
export async function getStudents(): Promise<IStudent[] | null> {
  const students = await StudentModel.find();
  return students;
}

/**
 * Searches for a student by id
 * @async
 * @param {Types.ObjectId} id id of the student
 * @returns {Promise<IStudent | null>} A promise of a student object or null if not found
 */
export async function searchStudentById(
  id: Types.ObjectId
): Promise<IStudent | null> {
  const student = await StudentModel.findById(id);
  return student;
}

/**
 * Searches for students by their first name or last name, using a partial match.
 * @async
 * @param name - Search term
 * @returns {Promise<IStudent[] | null>} A promise that resolves to an array of student objects matching the search criteria,
 *                                      or null if no matches are found.
 */
export async function searchStudentByName(
  name: string
): Promise<IStudent[] | null> {
  const students = await StudentModel.find({
    $or: [
      { firstName: { $regex: name, $options: 'i' } },
      { lastName: { $regex: name, $options: 'i' } },
    ],
  });
  return students;
}

/**
 * Finds a list of students enrolled in a specific class by the given class ID.
 * @param {Types.ObjectId} classId - The ObjectId of the class for which to find enrolled students.
 * @returns {Promise<IStudent[] | null>} - A promise that resolves to an array of students or `null` if no students are found.
 */
export async function searchStudentsByClass(
  classId: Types.ObjectId
): Promise<IStudent[] | null> {
  const classDocument = await ClassModel.findById(classId);
  if (
    classDocument &&
    classDocument.students &&
    classDocument.students.length > 0
  ) {
    const studentList = await StudentModel.find({
      _id: { $in: classDocument.students },
    });
    return studentList;
  }
  return null;
}
