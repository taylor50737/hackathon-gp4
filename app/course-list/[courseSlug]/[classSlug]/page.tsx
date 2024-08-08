import { searchStudentsByClass } from "@/lib/query/student";
import { Types } from "mongoose";
import ParticipantTable from "./participant-table";
import { restructureStudentData } from "./restructureData";

export default async function CourseDetailPage({
  params,
}: {
  params: { classSlug: string };
}) {
  const classId = new Types.ObjectId(params.classSlug);
  const participantList = (await searchStudentsByClass(classId)) ?? [];
  const restructuredParticipantList = restructureStudentData(participantList);

  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4">
      <ParticipantTable participantList={restructuredParticipantList} />
    </div>
  );
}
