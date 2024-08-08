import { Types } from "mongoose";
import { connectDb } from "@/lib/connection";
import { searchClassesByCourse } from "@/lib/query/classes";
import { IClass } from "@/lib/schema/ClassSchema";
import Logging from "@/logging/logging";
import StudentModel, {
  IClassEnrolled,
  IStudent,
} from "@/lib/schema/StudentSchema";
import { searchStudentsByClass } from "@/lib/query/student";
import { ClassDetails } from "./type";

export async function getClassByCourses(
  courseId: string
): Promise<ClassDetails[] | null> {
  try {
    await connectDb();
    const classList = await searchClassesByCourse(new Types.ObjectId(courseId));
    if (classList) {
      const classDetailList = await Promise.all(
        classList?.map(async (classObj) => {
          const { numberEnrolled, numberPaid } = await countParticipant(
            classObj
          );
          return {
            id: classObj._id.toString(),
            name: classObj.name,
            ...(classObj.ageGroup && { ageGroup: classObj.ageGroup }),
            schedule: classObj.schedule,
            ...(classObj.students && {
              students: classObj.students.map((studId) => studId.toString()),
            }),
            participantEnrolled: numberEnrolled,
            participantPaid: numberPaid,
            ...(classObj.status && { status: classObj.status }),
          };
        })
      );
      return classDetailList;
    }
    return null;
  } catch (error) {
    Logging.error(`Database connection error: ${error}`);
    return null;
  }
}

export async function getEnrolledClassByStudentId(
  studentId: Types.ObjectId
): Promise<IClassEnrolled[] | null> {
  const studentDocument = await StudentModel.findById(studentId);

  if (studentDocument && studentDocument.classEnrolled.length > 0) {
    return studentDocument.classEnrolled;
  }

  return null;
}

function countEnrolled(
  classId: Types.ObjectId,
  participantList: IStudent[]
): number {
  let participantEnrolled = 0;

  participantList.forEach((participant) => {
    const enrollmentDetails = participant.classEnrolled.find(
      (classObj) => classObj.classId.toString() === classId.toString()
    );

    if (
      enrollmentDetails &&
      enrollmentDetails.status &&
      enrollmentDetails.status?.toLowerCase() != "withdraw"
    ) {
      participantEnrolled = participantEnrolled + 1;
    }
  });

  return participantEnrolled;
}

function countPaid(
  classId: Types.ObjectId,
  participantList: IStudent[]
): number {
  let participantPaid = 0;

  participantList.forEach((participant) => {
    const enrollmentDetails = participant.classEnrolled.find(
      (classObj) => classObj.classId.toString() === classId.toString()
    );

    if (
      enrollmentDetails &&
      enrollmentDetails.status &&
      enrollmentDetails.status?.toLowerCase() === "paid"
    ) {
      participantPaid = participantPaid + 1;
    }
  });

  return participantPaid;
}

async function countParticipant(classObj: IClass): Promise<{
  numberEnrolled: number;
  numberPaid: number;
}> {
  let participantCount = { numberEnrolled: 0, numberPaid: 0 };
  try {
    if (classObj.students && classObj.students.length > 0) {
      // Get all students enrolled in the class
      const studentList = await searchStudentsByClass(classObj._id);

      if (studentList) {
        participantCount.numberEnrolled = countEnrolled(
          classObj._id,
          studentList
        );
        participantCount.numberPaid = countPaid(classObj._id, studentList);
      }
    }
  } catch (error) {
    Logging.error(`Database connection error: ${error}`);
  }
  return participantCount;
}
