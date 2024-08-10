import { IStudent } from "@/lib/schema/StudentSchema";

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
  status?: string;
}

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
    status: student.classEnrolled[0].status,
  }));
};
