import { Types } from 'mongoose';
import { connectDb } from '@/lib/connection';
import Logging from '@/logging/logging';
import { IStudent } from '@/lib/schema/StudentSchema';
import { getStudents, searchStudentsByClass } from '@/lib/query/student';
import { searchCourseById } from '@/lib/query/course';

export async function getAllParticipants(): Promise<IStudent[] | null> {
  try {
    await connectDb();
    const studentList = await getStudents();
    return studentList;
  } catch (error) {
    Logging.error(`Data Fetching error: ${error}`);
    return null;
  }
}

export async function getParticipantsByCourse(
  courseId: string
): Promise<IStudent[] | null> {
  try {
    await connectDb();
    const course = await searchCourseById(new Types.ObjectId(courseId));
    if (course) {
      const studentList = await Promise.all(
        course?.classes.map(
          async (classObj) => await searchStudentsByClass(classObj.classId)
        )
      );

      // Flatten the array and remove null values
      const flattenedStudentList = studentList
        .flat()
        .filter((student) => student != null);

      // Remove duplicate students
      if (flattenedStudentList.length > 0) {
        const uniqueStudentMap = new Map<string, IStudent>();

        flattenedStudentList.forEach((student) => {
          uniqueStudentMap.set(student._id.toString(), student);
        });

        const uniqueStudentList = Array.from(uniqueStudentMap.values());
        return uniqueStudentList;
      }
    }
    return null;
  } catch (error) {
    Logging.error(`Data Fetching error: ${error}`);
    return null;
  }
}
