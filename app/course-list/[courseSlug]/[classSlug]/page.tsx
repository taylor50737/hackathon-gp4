import { searchStudentsByClass } from "@/lib/query/student";
import { Types } from "mongoose";
import ParticipantTable from "./participant-table";
import { restructureStudentData } from "./restructureData";
import SubHeader from "@/components/ui/sub-header";
import { searchCourseById } from "@/lib/query/course";
import { searchClassById } from "@/lib/query/classes";

export default async function CourseDetailPage({
  params,
}: {
  params: { courseSlug: string; classSlug: string };
}) {
  const courseId = new Types.ObjectId(params.courseSlug);
  const classId = new Types.ObjectId(params.classSlug);

  const course = await searchCourseById(courseId);
  const classItem = await searchClassById(classId);

  const courseName = course?.name;
  const className = classItem?.name

  const participantList = (await searchStudentsByClass(classId)) ?? [];
  const restructuredParticipantList = restructureStudentData(participantList);

  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4">
      <SubHeader header={courseName} subHeader={className} />
      <div className="pt-10">
        <ParticipantTable participantList={restructuredParticipantList} />
      </div>
    </div>
  );
}
