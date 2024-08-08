import Image from "next/image";
import Link from "next/link";
import { Types } from "mongoose";

import SubHeader from "@/components/ui/sub-header";
import ParticipantCourseTable from "./course-table";
import avatar1 from "public/avatar_1.png";
import { getEnrolledClassByStudentId } from "@/lib/api/getClass";

export default async function ParticipantProfilePage() {
  const enrolledClassList = await getEnrolledClassByStudentId(new Types.ObjectId("64c0f90a7e6b9e2b90234567"));
  console.log(enrolledClassList);
  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4">
      <SubHeader header="Participant Profile" />
      <div className="bg-light-violet">
        <div className="flex items-center justify-center gap-10 py-10">
          <Image src={avatar1} alt="avatar1" width={80} />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Matt Dickerson</h1>
            <h1>Student ID# 00001</h1>
          </div>
          <div className="text-xs">
            <p>
              <b>Date of Birth:</b> <span>13-05-2008</span>
            </p>
            <p>
              <b>Phone:</b> <span>647-123-4567</span>
            </p>
            <p>
              <b>Email:</b> <span>cics@gmail.com</span>
            </p>
            <p>
              <b>Address:</b> <span>4002 Sheppard Ave E Suite</span>
            </p>
            <p>
              <b>Special Needs:</b> <span>ADHD</span>
            </p>
            <p>
              <b>Language:</b> <span>French</span>
            </p>
            <p>
              <b>Remaining Credit:</b> <span>250</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 ">
        <div className="bg-light-gray">
          <div className="flex items-center justify-center gap-10 py-10">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">Matt Sr.</h1>
              <h1>Student ID# 00001</h1>
            </div>
            <div className="text-xs">
              <p>
                <b>Relationship:</b> <span>Father</span>
              </p>
              <p>
                <b>Phone:</b> <span>647-123-6789</span>
              </p>
              <p>
                <b>Email:</b> <span>mattsr@gmail.com</span>
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
              <h1 className="font-bold text-xl">Lucinda Smith</h1>
              <h1>Student ID# 00001</h1>
            </div>
            <div className="text-xs">
              <p>
                <b>Relationship:</b> <span>Mother</span>
              </p>
              <p>
                <b>Phone:</b> <span>647-123-2468</span>
              </p>
              <p>
                <b>Email:</b> <span>lsmith@gmail.com</span>
              </p>
              <p>
                <b>Language:</b> <span>English</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ParticipantCourseTable />
    </div>
  );
}
