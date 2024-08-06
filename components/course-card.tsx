"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function CourseCard() {
  const list = [
    {
      title: "Robotic Saturday",
      img: "https://thumbnails.cbsig.net/CBS_Production_News_VMS/2023/07/01/2240501827541/0701_SatMo_Library_Preston_2094723_1920x1080.jpg",
      participants: "Age 10-14",
    },
    {
      title: "Mixed Sport Saturday",
      img: "https://media.istockphoto.com/id/466335022/photo/space-hopper-challenge.jpg?s=612x612&w=0&k=20&c=nEqdwhaLdW7FU3l1nDi5jvCIH8pWHj94zKiBrsXuB68=",
      participants: "Age 6-13",
    },
    {
      title: "Kinder Enrichment Camp",
      img: "https://childsuccesscenter.com/wp-content/uploads/2017/12/1.jpg",
      participants: "Student",
    },
    {
        title: "Robotic Saturday",
        img: "https://thumbnails.cbsig.net/CBS_Production_News_VMS/2023/07/01/2240501827541/0701_SatMo_Library_Preston_2094723_1920x1080.jpg",
        participants: "Age 10-14",
      },
      {
        title: "Mixed Sport Saturday",
        img: "https://media.istockphoto.com/id/466335022/photo/space-hopper-challenge.jpg?s=612x612&w=0&k=20&c=nEqdwhaLdW7FU3l1nDi5jvCIH8pWHj94zKiBrsXuB68=",
        participants: "Age 6-13",
      },
      {
        title: "Kinder Enrichment Camp",
        img: "https://childsuccesscenter.com/wp-content/uploads/2017/12/1.jpg",
        participants: "Student",
      },
  ];

  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-6 pt-2">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="flex flex-col text-small items-start">
            <b>{item.title}</b>
            <p className="text-default-500">{item.participants}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
