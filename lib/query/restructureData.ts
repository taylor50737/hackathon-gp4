import { ICourse } from "../schema/CourseSchema";
import { IClass } from "../schema/ClassSchema";
import { IStudent } from "@/lib/schema/StudentSchema";

export interface IRestructuredCourse {
  id: string;
  courseName: string;
  ageGroup: string;
  year: number;
  quarter: string;
  type: string;
}

export interface IRestructuredClass {
  id: string;
  courseId: string;
  className: string;
  ageGroup: string;
  schedule: string;
  type: string;
}

export interface IRestructuredStudent {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob?: string;
  phone: number;
  email: string;
  address: string;
  specialNeeds?: string;
  guardianFullName?: string;
  guardianRelationship?: string;
  emergencyFullName: string;
  emergencyPhone: number;
  emergencyRelationship: string;
  credits?: number;
  type: string;
}

export const restructureCourseData = (
  courses: ICourse[]
): IRestructuredCourse[] => {
  return courses.map((course) => ({
    id: course._id.toString(),
    courseName: course.name,
    ageGroup: course.ageGroup || "",
    year: course.year,
    quarter: course.quarter,
    type: "course",
  }));
};

export const restructureClassData = (
  classes: IClass[]
): IRestructuredClass[] => {
  return classes.map((classItem) => ({
    id: classItem._id.toString(),
    courseId: classItem.course.courseId.toString(),
    className: classItem.name,
    ageGroup: classItem.ageGroup || "",
    schedule: classItem.schedule,
    type: "class",
  }));
};

export const restructureStudentData = (
  students: IStudent[]
): IRestructuredStudent[] => {
  return students.map((student) => ({
    id: student._id.toString(),
    firstName: student.firstName,
    lastName: student.lastName,
    gender: student.gender,
    dob: student.dob ? student.dob.toLocaleDateString() : undefined,
    phone: student.phone,
    email: student.email,
    address: student.address,
    specialNeeds: student.specialNeeds,
    guardianFullName: student.guardian?.fullName,
    guardianRelationship: student.guardian?.relationship,
    emergencyFullName: student.emergency.fullName,
    emergencyPhone: student.emergency.phone,
    emergencyRelationship: student.emergency.relationship,
    credits: student.credits ? student.credits : 0,
    type: "student",
  }));
};
