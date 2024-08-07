import { getClassByCourses } from "@/lib/api/getClass";
import { ClassDetails } from "@/lib/api/type";
import ClassTable from "./class-table";

export default async function CourseDetailPage({
  params,
}: {
  params: { courseSlug: string };
}) {
  const courseId = params.courseSlug;
  let classList: ClassDetails[] | null =
    (await getClassByCourses(courseId)) ?? [];
  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4">
      <ClassTable classList={classList} />
    </div>
  );
}
