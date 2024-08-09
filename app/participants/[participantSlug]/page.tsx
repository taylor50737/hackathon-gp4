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
    <div className="flex flex-col flex-1 py-4 h-full sm:h-fit space-y-4 px-4">
      <SubHeader header="Participant Profile" />
      <div className="bg-light-violet p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-center gap-6 sm:gap-10 py-6">
          <Image src={avatar1} alt="avatar1" width={80} />
          <div className="flex flex-col items-center sm:items-start gap-2">
            <h1 className="font-bold text-xl text-center sm:text-left">
              {participant?.firstName} {participant?.lastName}
            </h1>
            <h1 className="text-center sm:text-left">
              Student ID# {participant?._id.toString()}
            </h1>
          </div>
          <div className="text-xs flex flex-col items-center sm:items-start space-y-2 sm:space-y-1">
            <p>
              <b>Date of Birth:</b>{" "}
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
              <span>{participant?.credits ? participant.credits : "N/A"}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
        <div className="bg-light-gray p-4 rounded-lg">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-center gap-6 sm:gap-10 py-6">
            <div className="flex flex-col items-center sm:items-start gap-2">
              <h1 className="font-bold text-xl text-center sm:text-left">
                {participant?.guardian?.fullName}
              </h1>
              <h1 className="text-center sm:text-left">Guardian</h1>
            </div>
            <div className="text-xs flex flex-col items-center sm:items-start space-y-2 sm:space-y-1">
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

        <div className="bg-light-gray p-4 rounded-lg">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-center gap-6 sm:gap-10 py-6">
            <div className="flex flex-col items-center sm:items-start gap-2">
              <h1 className="font-bold text-xl text-center sm:text-left">
                {participant?.emergency?.fullName}
              </h1>
              <h1 className="text-center sm:text-left">Emergency</h1>
            </div>
            <div className="text-xs flex flex-col items-center sm:items-start space-y-2 sm:space-y-1">
              <p>
                <b>Relationship:</b>{" "}
                <span>{participant?.emergency?.relationship}</span>
              </p>
              <p>
                <b>Phone:</b> <span>{participant?.emergency?.phone}</span>
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
