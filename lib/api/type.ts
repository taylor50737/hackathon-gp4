import { Types } from "mongoose";
import { IGuardian, IEmergency, IClassEnrolled } from "../schema/StudentSchema";

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

  export type StudentDetails = {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    gender: string;
    dob?: Date;
    phone: number;
    email: string;
    address: string;
    specialNeeds?: string;
    guardian?: IGuardian;
    emergency: IEmergency;
    credits?: number;
    classEnrolled: IClassEnrolled[];
  }