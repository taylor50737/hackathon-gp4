import { getAllCourses } from "@/lib/api/getCourse";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default async function HomePage() {
  const courseList = (await getAllCourses()) || [];
  const DUMMY_CLASS = [
    {
      id: "64c0fa7afd6f9d3c123f45d6",
      class_name: "Anime Creators",
      course_id: "64c0fa6afd6f9d3c123f45d5",
      course_name: "Spring 2024 Specific Skills Classes",
      age_group: "10-14",
      img: "https://www.centauriarts.com/wp-content/uploads/2021/08/digital-art-classes.jpg",
    },
    {
      id: "64c0fcbafd6f9d3c123f45f4",
      class_name: "Watercolour Wonderland",
      course_id: "64c0fcbafd6f9d3c123f45f3",
      course_name: "Spring 2024 Kinder Enrichment Class",
      age_group: "4-6",
      img: "https://childslife.ca/wp-content/uploads/2022/08/YrCl7WI0-2.jpeg",
    },
    {
      id: "64c0fcbafd6f9d3c123f45f6",
      class_name: "Chef-in-Training",
      course_id: "64c0fcbafd6f9d3c123f45f3",
      course_name: "Spring 2024 Kinder Enrichment Class",
      age_group: "4-6",
      img: "https://rooks-to-cooks.myshopify.com/cdn/shop/files/70I4850_2d9867ea-5375-4e4a-8ff2-aa5595bf2f87.jpg?v=1689339652",
    },
  ];

  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4">
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
        <Link href="/course-list/f85e247f897d42cabec9e9dd">
          <Card className="py-4 bg-light-violet" isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny font-bold">Today&apos;s Course</p>
              <small className="text-default-500">Summer 2024</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2 px-0">
              <div className="overflow-hidden h-32">
                <Image
                  alt="Card background"
                  className="rounded-none w-full object-cover"
                  src="https://d2wvwvig0d1mx7.cloudfront.net/data/org/24895/media/img/cache/1600x0/2897220_1600x0.jpg"
                />
              </div>
              <div className="px-4">
                <p className="pt-2">Summer 2024 Saturday Camp</p>
                <small className="text-default-500">Age 6-9</small>
                <small className="text-default-500 block">
                  Occupying classroom 201
                </small>
              </div>
            </CardBody>
          </Card>
        </Link>

        <Link href="/course-list/bb64db2774f74e9bb8a9756d">
          <Card className="py-4 bg-light-violet" isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny font-bold">Today&apos;s Course</p>
              <small className="text-default-500">Summer 2024</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2 px-0">
              <div className="overflow-hidden h-32 object-cover">
                <Image
                  alt="Card background"
                  className="rounded-none w-full object-cover"
                  src="https://childsuccesscenter.com/wp-content/uploads/2021/03/k-camp-web-header.jpg"
                />
              </div>
              <div className="px-4">
                <p className="pt-2">Kinder Enrichment Camp</p>
                <small className="text-default-500">Age 4-6</small>
                <small className="text-default-500 block">
                  Occupying classroom 203
                </small>
              </div>
            </CardBody>
          </Card>
        </Link>

        <div className="grid grid-cols-1 gap-4">
          <Card className="py-4 bg-light-gray">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Team Announcement</h4>
              <small className="text-default-500 pt-2">
                Please remember to take attendance after break time
              </small>
            </CardHeader>
            <CardBody className="overflow-visible py-2"></CardBody>
          </Card>
          <Card className="py-4 bg-light-gray">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Team Announcement</h4>
              <small className="text-default-500 pt-2">
                Please contact parents/guardians if students are catching
                symptoms of heat stroke
              </small>
            </CardHeader>
            <CardBody className="overflow-visible py-2"></CardBody>
          </Card>
        </div>
      </div>
      <h1 className="text-2xl py-2 px-3">Popular classes:</h1>
      <div className="grid grid-flow-row gap-4">
        {DUMMY_CLASS.map((item, index) => (
          <Card key={index}>
            <CardBody>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
                <div className="col-span-1 lg:col-span-2 flex justify-center lg:justify-start">
                  <Image
                    alt={item.class_name}
                    className="object-cover w-24 h-24 lg:w-32 lg:h-32"
                    shadow="md"
                    src={item.img}
                  />
                </div>
                <div className="col-span-2 lg:col-span-8 flex flex-col gap-1 lg:gap-0">
                  <h3 className="font-semibold text-foreground/90 text-center lg:text-left">
                    {item.class_name}
                  </h3>
                  <p className="text-small text-foreground/80 text-center lg:text-left">
                    from course: {item.course_name}
                  </p>
                  <p className="text-small text-foreground/80 text-center lg:text-left">
                    Age Group: {item.age_group}
                  </p>
                  <h1 className="text-large font-medium mt-2 text-red-600 text-center lg:text-left">
                    Few spots left
                  </h1>
                </div>
                <div className="col-span-1 lg:col-span-2 flex justify-center lg:justify-end">
                  <Link
                    className="bg-strong-purple text-white inline-block text-center py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out"
                    href={`/course-list/${item.course_id}/${item.id}`}
                    aria-label={`View details of ${item.class_name}`}
                  >
                    View Class
                  </Link>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="hidden sm:grid grid-cols-12 grid-rows-4 gap-2 py-6">
        <Card className="col-span-6 row-span-2 h-[610px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://cicscanada.com/dat/files/12463.jpg"
          />
        </Card>
        <Card className="col-start-7 h-[300px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.westnh.org/wp-content/uploads/2020/05/NYP-Group-Pic84-copy.jpg"
          />
        </Card>
        <Card className="col-span-2 col-start-8 h-[300px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.oaoa.com/wp-content/uploads/2023/06/071321_WonderGirlsCamp-file-photo-scaled.jpg"
          />
        </Card>
        <Card className="col-span-3 col-start-10 h-[300px]">
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://cmsv2-assets.apptegy.net/uploads/8108/file/741186/03d7a12f-ba2f-4dc2-add1-05bf344efef6.jpeg"
          />
        </Card>
        <Card className="col-span-2 col-start-7 row-start-2 h-[300px]">
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://cicscanada.com/dat/files/11951.jpg"
          />
        </Card>
        <Card className="col-start-9 row-start-2">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09RuXYKdx5xkobDEcz_oB_qMDEQxMYMXQGA&s"
          />
        </Card>
        <Card className="col-span-3 col-start-10 row-start-2 h-[300px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://cicscanada.com/dat/files/12238.png"
          />
        </Card>
        <Card className="col-span-3 row-start-3 h-[300px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://media.licdn.com/dms/image/D5612AQG3qMoZv6GmYQ/article-cover_image-shrink_720_1280/0/1711549227638?e=2147483647&v=beta&t=fod5bDNJXARourmFvhI2BZoz9b1Y4W1mODrnGDdgvSE"
          />
        </Card>
        <Card className="col-start-4 row-start-3">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.cicscanada.com/dat/files/13034.png"
          />
        </Card>
        <Card className="col-span-4 col-start-5 row-start-3 h-[300px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://pbs.twimg.com/media/GKuqrYCXwAAWJSz?format=jpg&name=4096x4096"
          />
        </Card>
        <Card className="col-span-4 col-start-9 row-start-3 h-[300px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://i.ytimg.com/vi/GcwesFEuTL8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBOxw2qc4i-txapBQ42YYzBUnzkFw"
          />
        </Card>
        <Card className="col-span-3 col-start-2 row-start-4">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.cicscanada.com/dat/files/13182.jpg"
          />
        </Card>
        <Card className="col-start-1 row-start-4">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://pbs.twimg.com/ext_tw_video_thumb/1707441442531000320/pu/img/F9HEBPcbkQ-SL3Rj.jpg"
          />
        </Card>
        <Card className="col-span-4 col-start-5 row-start-4 h-[300px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://assets.isu.pub/document-structure/230213204554-44af3509ae2fbe9aec9c6d8e56b5e4e0/v1/69bd5919dc0b7293c8cab733165ba59a.jpeg"
          />
        </Card>
        <Card className="col-span-4 col-start-9 row-start-4 h-[300px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://media.licdn.com/dms/image/D5622AQHeDhCyvZHGVQ/feedshare-shrink_800/0/1713300387856?e=2147483647&v=beta&t=Fe3aAT-bh1wy-9WHm8_oH6shprjuckmQsI69osirbK0"
          />
        </Card>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="py-4 bg-light-violet">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny font-bold">Community Update</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2 px-0">
            <div className="overflow-hidden h-32">
              <Image
                alt="Card background"
                className="rounded-none w-full object-cover h-full"
                src="https://joburg.co.za/wp-content/uploads/2017/07/Feature-Image-1000-%C3%97-420-px-37.png"
              />
            </div>
            <div className="px-4">
              <p className="pt-2">Junior Chef Discovery Class</p>
              <small className="text-default-500">Age 6-9</small>
              <small className="text-default-700 block">
                Our junior chefs got creative with fresh fruits today! They
                learned how to safely use kitchen tools to cut and prepare a
                colorful fruit salad. The kids explored different flavor
                combinations and even made their own dressing using honey and
                lemon. It was a fruity fiesta!
              </small>
            </div>
          </CardBody>
        </Card>

        <Card className="py-4 bg-light-violet">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny font-bold">Community Update</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2 px-0">
            <div className="overflow-hidden h-32">
              <Image
                alt="Card background"
                className="rounded-none w-full object-cover h-full"
                src="https://moonpreneur.com/blog/wp-content/uploads/2023/02/html-and-css-for-kids.webp"
              />
            </div>
            <div className="px-4">
              <p className="pt-2">JavaScript & Python Class</p>
              <small className="text-default-500">Age 10-14</small>
              <small className="text-default-700 block">
                Our JavaScript Adventure Camp is in full swing! This week, the
                kids are diving into the basics of web development, learning how
                to create interactive web pages using JavaScript. They’ve
                started building their first personal websites, which include
                fun games and quizzes they’ve coded themselves.
              </small>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

// test
