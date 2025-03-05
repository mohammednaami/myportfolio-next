import { Card } from "../ui/card";
import me from "public/me.jpg";
import Image from "next/image";

export function AboutSection() {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <Card className="col-span-1 lg:col-span-2 border-none bg-gray-100 p-8">
        <h1 className="text-2xl lg:text-3xl">
        Passionate & Versatile Full-Stack Developer and Digital Marketing Specialist
        </h1>
        <p className="text-justify">
        Based in Germany with over 9 years of experience delivering high-performance web applications and data-driven marketing strategies. Skilled in PHP (Laravel, Symfony), JavaScript (React, Next.js, Node.js), MySQL, Postgres, and API integrations—as well as SEO, PPC, and CRO. Adept at building scalable SaaS platforms, optimizing business operations, and crafting engaging user experiences through innovative, efficient solutions.
        </p>
        <p className="text-justify">
        Open to new challenges and opportunities to help businesses thrive in the digital landscape.

        </p>
        <div className="flex items-left px-0">
          <a
            href="mailto:mohammednaami96@gmail.com"
            className="relative inline-block text-lg group mt-5">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Get in Touch!</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"></span>
          </a>
        </div>
      </Card>
      <div className="col-span-1">
        <Image
          src={me}
          alt="Mohammed Naami"
          className="h-[500px] object-cover rounded-lg w-full"
        />
      </div>
    </div>
  );
}
