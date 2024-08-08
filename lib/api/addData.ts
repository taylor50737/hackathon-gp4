import fs from 'fs';
import path from 'path';

import { ICourse } from '../schema/CourseSchema';
import Logging from '@/logging/logging';
import { IClass } from '../schema/ClassSchema';
import { IStudent } from '../schema/StudentSchema';
import { connectDb } from '../connection';
import { addCourses, convertCourseObjectId } from '../query/course';
import { addClasses, convertClassObjectId } from '../query/classes';
import { addStudents, convertStudentObjectId } from '../query/student';

export interface IRawCourse {
  _id: string;
  name: string;
  ageGroup?: string;
  year: number;
  quarter: string;
  classes: {
    classId: string;
    name: string;
  }[];
}

export interface IRawClass {
  _id: string;
  name: string;
  ageGroup?: string;
  schedule: string;
  course: {
    courseId: string;
    name: string;
  };
  students?: string[];
  status?: string;
}

interface IRawClassEnrolled {
  classId: string;
  className: string;
  courseName: string;
  schedule: string;
  enrolledTime: Date;
  beforeAfterCamp?: string;
  pickUpArrange?: string;
  fee: number;
  status?: string;
  [key: string]: any;
}

export interface IRawStudent {
  _id: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob?: Date;
  phone: number;
  email: string;
  address: string;
  specialNeeds?: string;
  guardian?: {
    fullName: string;
    relationship: string;
  };
  emergency: {
    fullName: string;
    phone: number;
    relationship: string;
  };
  credits?: number;
  classEnrolled: IRawClassEnrolled[];
}

/**
 * Reads a JSON file and parses its content.
 * @param filePath - The relative or absolute path to the JSON file.
 * @returns The parsed JSON content as an object.
 * @throws Will throw an error if the file cannot be read or the JSON is invalid.
 */
function readJsonFile<T>(filePath: string): T {
  try {
    const absolutePath = path.resolve(__dirname, filePath);
    const fileContent = fs.readFileSync(absolutePath, 'utf8');
    return JSON.parse(fileContent) as T;
  } catch (error) {
    throw new Error(`Unable to read or parse JSON file: ${error}`);
  }
}

try {
  const rawCourseList: IRawCourse[] = readJsonFile<IRawCourse[]>(
    '../data/courses.json'
  );
  const convertedCourseList = rawCourseList.map((course) =>
    convertCourseObjectId(course)
  );

  const rawClassList: IRawClass[] = readJsonFile<IRawClass[]>(
    '../data/classes.json'
  );
  const classList = rawClassList.map((classObj) =>
    convertClassObjectId(classObj)
  );
  const rawStudentList = readJsonFile<IRawStudent[]>('../data/students.json');
  const studentList = rawStudentList.map((student) =>
    convertStudentObjectId(student)
  );

  (async () => {
    await connectDb();

    await addCourses(convertedCourseList);
    await addClasses(classList);
    await addStudents(studentList);
  })();
} catch (error) {
  Logging.error(error);
}
