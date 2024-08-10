import { getClassByCourses } from "@/lib/api/getClass";
import { ClassDetails } from "@/lib/api/type";
import ClassTable from "./class-table";
import SubHeader from "@/components/ui/sub-header";
import { searchCourseById } from "@/lib/query/course";
import { Types } from "mongoose";
import { connectDb } from "@/lib/connection";

export default async function CourseDetailPage({
  params,
}: {
  params: { courseSlug: string };
}) {
  await connectDb();

  const courseId = params.courseSlug;
  const course = await searchCourseById(new Types.ObjectId(courseId));

  let courseName;
  if (course) {
    courseName = course.name || "Unknown";
  }

  let classList: ClassDetails[] | null =
    (await getClassByCourses(courseId)) ?? [];
  
  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4">
      <SubHeader header={courseName} />
      <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4">
        <ClassTable classList={classList} courseId={courseId} />
      </div>
    </div>
  );
}
