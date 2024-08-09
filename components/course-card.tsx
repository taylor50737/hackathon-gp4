"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

export default function CourseCard() {
  const list = [
    {
      title: "Summer 2024 S.T.E.A.M Camp",
      img: "https://clas.ucdenver.edu/cpe/sites/default/files/styles/medium/public/page/steamcampatcularge.jpg?itok=sD4EeYlA",
      participants: "Age 6-9",
      courseId: "64c0f8bdfd6f9d3c123f45ab",
    },
    {
      title: "Spring 2024 Specific Skill Class",
      img: "https://media.istockphoto.com/id/466335022/photo/space-hopper-challenge.jpg?s=612x612&w=0&k=20&c=nEqdwhaLdW7FU3l1nDi5jvCIH8pWHj94zKiBrsXuB68=",
      participants: "Age 10-14",
      courseId: "64c0fa6afd6f9d3c123f45d5",
    },
    {
      title: "Spring 2024 Kinder Enrichment Class",
      img: "https://skole.vamtam.com/wp-content/uploads/2020/02/h-20.jpg",
      participants: "Age 4-6",
      courseId: "64c0fcbafd6f9d3c123f45f3",
    },
    {
      title: "Summer 2024 Saturday Classes",
      img: "https://thumbnails.cbsig.net/CBS_Production_News_VMS/2023/07/01/2240501827541/0701_SatMo_Library_Preston_2094723_1920x1080.jpg",
      participants: "Age 10-14",
      courseId: "f85e247f897d42cabec9e9dd",
    },
    {
      title: "Summer 2024 S.T.E.A.M Camp",
      img: "https://www.ourkids.net/images/school-header/steam-project-camp-making-education-fun.jpg",
      participants: "Age 6-9",
      courseId: "af1e0daf12e041d9b460193f",
    },
    {
      title: "Summer 2024 Kinder Enrichment Class",
      img: "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Articles/Summer+Camp+for+Preschoolers/Preschool+Campers-carousel.jpg",
      participants: "Age 4-6",
      courseId: "d4da0692a67148748d48c8ec",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 pt-2">
      {list.map((item, index) => (
        <Link key={index} href={`/course-list/${item.courseId}`}>
          <Card
            shadow="sm"
            isPressable
            className="w-full flex flex-col justify-between"
          >
            <CardBody className="overflow-hidden p-0">
              <Image
                shadow="sm"
                radius="lg"
                alt={item.title}
                className="w-full h-full object-fit: cover sm:h-[190px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="flex flex-col text-small items-start truncate">
              <b className="truncate">{item.title}</b>
              <p className="text-default-500">{item.participants}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
