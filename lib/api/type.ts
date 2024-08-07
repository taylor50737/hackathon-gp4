export type Course = {
    id: string;
    course_name: string;
    year: string;
    quarter: string;
    classes: { classId: string; name: string }[];
  };
  
  export type ClassDetails = {
    id: string;
    name: string;
    ageGroup?: string;
    schedule: string;
    students?: string[];
    participantEnrolled: number;
    participantPaid: number;
    status?: string;
  };