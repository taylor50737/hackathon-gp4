import { fetchBySearchTerm } from "@/lib/query/search";
import { redirect } from "next/navigation";
import {
  IRestructuredClass,
  IRestructuredCourse,
  IRestructuredStudent,
} from "@/lib/query/restructureData";
import Link from "next/link";
import { Card, CardBody } from "@nextui-org/react";
import { searchCourseById } from "@/lib/query/course";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

function isRestructuredCourse(result: any): result is IRestructuredCourse {
  return result.type === "course";
}

function isRestructuredClass(result: any): result is IRestructuredClass {
  return result.type === "class";
}

function isRestructuredStudent(result: any): result is IRestructuredStudent {
  return result.type === "student";
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  const results = (await fetchBySearchTerm(term)) || [];

  const courses = results.filter(isRestructuredCourse);
  const classes = results.filter(isRestructuredClass);
  const students = results.filter(isRestructuredStudent);

  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4">
      {courses.length > 0 && (
        <div>
          <h1 className="text-2xl py-2">Relevant courses:</h1>
          <div className="flex flex-col gap-4">
            {courses.map((course, index) => (
              <Link key={index} href={`/course-list/${course.id}`}>
                <Card className="bg-light-violet">
                  <CardBody>
                    <p className="text-gray-700 font-bold text-xl">
                      {course.courseName}
                    </p>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {classes.length > 0 && (
        <div>
          <h1 className="text-2xl py-2">Relevant classes:</h1>
          <div className="flex flex-col gap-4">
            {classes.map((cls, index) => (
              <Link key={index} href={`/course-list/${cls.courseId}/${cls.id}`}>
                <Card className="bg-light-violet">
                  <CardBody>
                    <p className="text-gray-700 font-bold text-xl">
                      {cls.className}
                    </p>
                    <p className="text-gray-500 text-base">
                      From course: {cls.courseName}
                    </p>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {students.length > 0 && (
        <div>
          <h1 className="text-2xl py-2">Relevant students:</h1>
          <div className="flex flex-col gap-4">
            {students.map((student, index) => (
              <Link key={index} href={`/participants/${student.id}`}>
                <Card className="bg-light-violet">
                  <CardBody>
                    <p className="text-gray-700 font-bold text-xl">
                      {student.firstName} {student.lastName}
                    </p>
                    <p className="text-gray-500 text-base">
                      Phone: {student.phone}
                    </p>
                    <p className="text-gray-500 text-base">
                      Email: {student.email}
                    </p>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {results.length === 0 && (
        <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4 gap-4 items-center">
          <p className="text-gray-500 text-base">No results found</p>
        </div>
      )}
    </div>
  );
}
