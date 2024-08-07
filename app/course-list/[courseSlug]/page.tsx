import { getClassByCourses } from "@/lib/api/getClass";
import { ClassDetails } from "@/lib/api/type";
import ClassTable from "./class-table";

export default async function CourseDetailPage() {
  const courseId = "64c0f8bdfd6f9d3c123f45ab"; // hardcode courseId...
  let classList: ClassDetails[] | null = (await getClassByCourses(courseId)) ?? [];
  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4">
        <ClassTable classList={classList} />
    </div>
  );
}
