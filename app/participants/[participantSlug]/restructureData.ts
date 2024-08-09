import { IClassEnrolled } from "@/lib/schema/StudentSchema";

export interface IRestructuredClassEnrolled {
  classId: string;
  className: string;
  courseName: string;
  schedule: string;
  enrolledTime?: string; 
  beforeAfterCamp?: string;
  pickUpArrange?: string;
  fee: number;
  status?: string;
}

export const restructureEnrolledClassData = (
  enrolledClass: IClassEnrolled[]
): IRestructuredClassEnrolled[] => {
  return enrolledClass?.map((item) => ({
    classId: item.classId.toString(),
    className: item.className,
    courseName: item.courseName,
    schedule: item.schedule,
    enrolledTime: item.enrolledTime ? item.enrolledTime.toLocaleDateString() : undefined, // Returns string
    beforeAfterCamp: item.beforeAfterCamp,
    pickUpArrange: item.pickUpArrange,
    fee: item.fee,
    status: item.status || "Pending",
  }));
};
