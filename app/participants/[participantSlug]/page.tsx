import Image from "next/image";
import { Types } from "mongoose";

import SubHeader from "@/components/ui/sub-header";
import ParticipantCourseTable from "./course-table";
import avatar1 from "public/avatar_1.png";
import { searchStudentById } from "@/lib/query/student";
import {
  IRestructuredClassEnrolled,
  restructureEnrolledClassData,
} from "./restructureData";

export default async function ParticipantProfilePage({
  params,
}: {
  params: { participantSlug: string };
}) {
  const participant = await searchStudentById(
    new Types.ObjectId(params.participantSlug)
  );

  const restructuredEnrolledClassList = participant
    ? restructureEnrolledClassData(participant.classEnrolled)
    : [];

  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4">
      <SubHeader header="Participant Profile" />
      <div className="bg-light-violet">
        <div className="flex items-center justify-center gap-10 py-10">
          <Image src={avatar1} alt="avatar1" width={80} />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">
              {participant?.firstName} {participant?.lastName}
            </h1>
            <h1>Student ID# {participant?._id.toString()}</h1>
          </div>
          <div className="text-xs">
            <p>
              <b>Date of Birth:</b>
              <span>
                {participant?.dob
                  ? participant.dob.toLocaleDateString()
                  : "N/A"}
              </span>
            </p>
            <p>
              <b>Phone:</b> <span>{participant?.phone}</span>
            </p>
            <p>
              <b>Email:</b> <span>{participant?.email}</span>
            </p>
            <p>
              <b>Address:</b> <span>{participant?.address}</span>
            </p>
            <p>
              <b>Special Needs:</b> <span>{participant?.specialNeeds}</span>
            </p>
            <p>
              <b>Remaining Credit:</b>{" "}
              <span>{participant?.credits ? participant?.credits : "N/A"}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 ">
        <div className="bg-light-gray">
          <div className="flex items-center justify-center gap-10 py-10">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">
                {participant?.guardian?.fullName}
              </h1>
              <h1>Guardian</h1>
            </div>
            <div className="text-xs">
              <p>
                <b>Relationship:</b>{" "}
                <span>{participant?.guardian?.relationship}</span>
              </p>
              <p>
                <b>Email:</b> <span>abc@gmail.com</span>
              </p>
              <p>
                <b>Language:</b> <span>English</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-light-gray">
          <div className="flex items-center justify-center gap-10 py-10">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">
                {participant?.emergency.fullName}
              </h1>
              <h1>Emergency</h1>
            </div>
            <div className="text-xs">
              <p>
                <b>Relationship:</b>{" "}
                <span>{participant?.emergency.relationship}</span>
              </p>
              <p>
                <b>Phone:</b> <span>{participant?.emergency.phone}</span>
              </p>
              <p>
                <b>Email:</b> <span>abc@gmail.com</span>
              </p>
              <p>
                <b>Language:</b> <span>English</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ParticipantCourseTable courses={restructuredEnrolledClassList} />
    </div>
  );
}
