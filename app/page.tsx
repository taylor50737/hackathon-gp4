import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

export default function HomePage() {
  const DUMMY_COURSE = [
    {
      course_name: "Course 201",
      age_group: "9-12",
      img: "https://www.firstdiscoverers.co.uk/wp-content/uploads/2017/02/19783570_m-copy-copy.jpg",
    },
    {
      course_name: "Course 202",
      age_group: "4-8",
      img: "https://images.squarespace-cdn.com/content/v1/5b86f64fee175917450351b3/1537988986770-33HCDGRG92J69LN4FCVS/1153b657-2615-494c-888d-922bc671346c.JPG",
    },
    {
      course_name: "Course 203",
      age_group: "4-8",
      img: "https://tlc-northsydneyliving.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2019/05/Mosman-Playgroup-e1519123480749.jpg",
    },
  ];

  return (
    <div className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4">
      <div className="gap-6 grid grid-cols-3 p-6">
        <Card className="py-4 bg-light-violet" isPressable>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny font-bold">Today&apos;s Course</p>
            <small className="text-default-500">Summer 2024</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 px-0">
            <div className="overflow-hidden h-32">
              <Image
                alt="Card background"
                className="rounded-none w-full"
                src="https://www.cookingclass-singapore.com/wp-content/uploads/Parent-Child-Class.jpg"
              />
            </div>
            <div className="px-4">
              <p className="pt-2">Cooking class 101</p>
              <small className="text-default-500">Age 6-9</small>
              <small className="text-default-500 block">Occupying pantry</small>
            </div>
          </CardBody>
        </Card>
        <Card className="py-4 bg-light-violet" isPressable>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny font-bold">Today&apos;s Course</p>
            <small className="text-default-500">Summer 2024</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 px-0">
            <div className="overflow-hidden h-32">
              <Image
                alt="Card background"
                className="rounded-none w-full"
                src="https://www.ourkids.net/images/pp/sidney-ledson-institute-2024.jpg"
              />
            </div>
            <div className="px-4">
              <p className="pt-2">Summer Course 101</p>
              <small className="text-default-500">Age 6-9</small>
              <small className="text-default-500 block">
                Occupying classroom 203
              </small>
            </div>
          </CardBody>
        </Card>
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
                Please contact parents/ guardians if students are catching
                symptoms of heat stroke
              </small>
            </CardHeader>
            <CardBody className="overflow-visible py-2"></CardBody>
          </Card>
        </div>
      </div>
      <div className="grid grid-flow-row gap-4">
        {DUMMY_COURSE.map((item, index) => (
          <Card key={index}>
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="col-span-2">
                  <Image
                    alt={item.course_name}
                    className="object-cover w-32"
                    shadow="md"
                    src={item.img}
                    height={100}
                  />
                </div>
                <div className="flex flex-col col-span-8">
                  <div className="flex flex-col gap-0">
                    <h3 className="font-semibold text-foreground/90">
                      {item.course_name}
                    </h3>
                    <p className="text-small text-foreground/80">
                      Age Group: {item.age_group}
                    </p>
                    <h1 className="text-large font-medium mt-2">
                      Few spots left
                    </h1>
                  </div>
                </div>
                <Button
                  className="bg-strong-purple text-white col-span-2"
                  variant="flat"
                >
                  Update status
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-12 grid-rows-4 gap-2 py-6">
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
      <div className="grid grid-cols-2 gap-6">
        <Card className="py-4 bg-light-violet" isPressable>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny font-bold">Community Update</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2 px-0">
            <div className="overflow-hidden h-32">
              <Image
                alt="Card background"
                className="rounded-none w-full"
                src="https://www.cookingclass-singapore.com/wp-content/uploads/Parent-Child-Class.jpg"
              />
            </div>
            <div className="px-4">
              <p className="pt-2">Cooking class 101</p>
              <small className="text-default-500">Age 6-9</small>
              <small className="text-default-500 block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </small>
            </div>
          </CardBody>
        </Card>
        <Card className="py-4 bg-light-violet" isPressable>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny font-bold">Community Update</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2 px-0">
            <div className="overflow-hidden h-32">
              <Image
                alt="Card background"
                className="rounded-none w-full"
                src="https://www.ourkids.net/images/pp/sidney-ledson-institute-2024.jpg"
              />
            </div>
            <div className="px-4">
              <p className="pt-2">Summer Course 101</p>
              <small className="text-default-500">Age 6-9</small>
              <small className="text-default-500 block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </small>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
