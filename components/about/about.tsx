import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import profile from "public/me/profile.webp";
import Link from "next/link";
import pdp from "public/me/pdp.jpg";
import { Linkedin, Github, ArrowRight } from "lucide-react";

export default function ProfileSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
      <Card className="flex flex-row items-center gap-0 p-2">
        <CardHeader className="flex-shrink-0">
          <Image src={profile} alt="profile" width={100} height={100} />
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-semibold leading-snug">
            Hi, I'm Mohammed 👋🏻
            <br />
            <span className="text-muted-foreground">I create Websites.</span>
          </h1>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-primary hover:underline">
            See my Projects <ArrowRight />
          </Link>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Card className="flex flex-row items-center p-4 relative border bg-card shadow-sm">
          <div className="relative">
            <Image
              src={pdp}
              alt="Profile"
              width={60}
              height={60}
              className="w-14 h-14 rounded-lg object-cover object-top"
            />
            <Linkedin className="absolute -bottom-2 -right-2 bg-blue-900 p-1.5 w-8 h-8 rounded-full text-white" />
          </div>

          <div className="ml-4">
            <h2 className="text-lg font-medium tracking-tight">LinkedIn</h2>
            <p className="text-sm font-medium text-muted-foreground truncate">
              567 followers
            </p>
          </div>

          <Link
            href="https://www.linkedin.com/in/mohammed-naami/"
            target="_blank"
            rel="noreferrer"
            className="absolute top-2 right-2">
            <button className="group/button relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-primary font-medium text-white transition-all duration-300 hover:w-24">
              <p className="inline-flex whitespace-nowrap text-xs opacity-0 transition-all duration-200 group-hover/button:-translate-x-2.5 group-hover/button:opacity-100">
                Follow
              </p>
              <div className="absolute right-1.5">
                <ArrowRight className="h-5 w-5" />
              </div>
            </button>
          </Link>
        </Card>

        <Card className="flex flex-row items-center p-4 relative border bg-card shadow-sm">
          <div className="relative">
            <Image
              src={pdp}
              alt="Profile"
              width={60}
              height={60}
              className="w-14 h-14 rounded-lg object-cover object-top"
            />
            <Github className="absolute -bottom-2 -right-2 bg-gray-900 p-1.5 w-8 h-8 rounded-full text-white" />
          </div>

          <div className="ml-4">
            <h2 className="text-lg font-medium tracking-tight">GitHub</h2>
            <p className="text-sm font-medium text-muted-foreground truncate">
             Active Open Source Contributor
            </p>
          </div>

          <Link
            href="https://github.com/mohammednaami"
            target="_blank"
            rel="noreferrer"
            className="absolute top-2 right-2">
            <button className="group/button relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-primary font-medium text-white transition-all duration-300 hover:w-24">
              <p className="inline-flex whitespace-nowrap text-xs opacity-0 transition-all duration-200 group-hover/button:-translate-x-2.5 group-hover/button:opacity-100">
                Follow
              </p>
              <div className="absolute right-1.5">
                <ArrowRight className="h-5 w-5" />
              </div>
            </button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
