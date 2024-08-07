import { connectDb } from '@/lib/connection';
import Logging from '@/logging/logging';
import { IStudent } from '@/lib/schema/StudentSchema';
import { getStudents } from '@/lib/query/student';

export async function getAllParticipants(): Promise<IStudent[] | null> {
  try {
    await connectDb();
    const studentList = await getStudents();
    return studentList;
  } catch (error) {
    Logging.error(`Database connection error: ${error}`);
    return null;
  }
}
