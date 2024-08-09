import { fetchBySearchTerm } from "@/lib/query/search";
import { redirect } from "next/navigation";
import {
  IRestructuredClass,
  IRestructuredCourse,
  IRestructuredStudent,
} from "@/lib/query/restructureData";
import Link from "next/link";

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

  const results = await fetchBySearchTerm(term);

  const courses = results.filter(isRestructuredCourse);
  const classes = results.filter(isRestructuredClass);
  const students = results.filter(isRestructuredStudent);

  return (
    <div>
      {courses.length > 0 && (
        <div>
          <h2>Relevant courses:</h2>
          {courses.map((course, index) => (
            <Link key={index} href={`/course-list/${course.id}`}>
              <div>{course.courseName}</div>
            </Link>
          ))}
        </div>
      )}

      {classes.length > 0 && (
        <div>
          <h2>Relevant classes:</h2>
          {classes.map((cls, index) => (
            <Link key={index} href={`/course-list/${cls.courseId}/${cls.id}`}>
              <div>{cls.className}</div>
            </Link>
          ))}
        </div>
      )}

      {students.length > 0 && (
        <div>
          <h2>Relevant students:</h2>
          {students.map((student, index) => (
            <Link key={index} href={`/participants/${student.id}`}>
              <div>
                {student.firstName} {student.lastName}
              </div>
            </Link>
          ))}
        </div>
      )}

      {results.length === 0 && <p>No results found</p>}
    </div>
  );
}
