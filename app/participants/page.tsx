import SubHeader from "@/components/ui/sub-header";
import ParticipantTable from "./participant-table";
import { getAllParticipants } from "@/lib/api/getParticipants";
import { restructureStudentData } from "./restructureData";

export default async function AllParticipantsPage() {
  const participantList = (await getAllParticipants()) ?? [];
  const restructuredParticipantList = restructureStudentData(participantList);

  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4">
      <SubHeader header="All Participants" />
      <ParticipantTable participantList={restructuredParticipantList} />
    </div>
  );
}
