import { getClassByCourses } from "@/lib/api/getClass";
import { ClassDetails } from "@/lib/api/type";
import { searchStudentsByClass } from "@/lib/query/student";

export default async function CourseDetailPage({
  params,
}: {
  params: { classSlug: string };
}) {
  const classId = params.classSlug;
  
  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4">
        {classId}
    </div>
  );
}
