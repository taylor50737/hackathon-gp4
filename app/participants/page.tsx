import SubHeader from "@/components/ui/sub-header";
import ParticipantTable from "./participant-table";

export default function AllParticipantsPage() {
  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4">
      <SubHeader header="All Participants" />
      <ParticipantTable />
    </div>
  );
}
