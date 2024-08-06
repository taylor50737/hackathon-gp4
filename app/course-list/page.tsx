import CourseCard from "@/components/course-card";
import SubHeader from "@/components/ui/sub-header";
import CourseTable from "./course-table";

export default function CoursePage() {
  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4">
      <SubHeader header="Course List" />
      <div>
        <b className="">Recent Courses →</b>
        <CourseCard />
      </div>
      <CourseTable />
    </div>
  );
}
