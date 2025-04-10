import Image from "next/image";
import m3 from "public/me/me3.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import canva from "public/tech-icons/canva.svg";
import chatgpt from "public/tech-icons/chatgpt.svg";
import cloud from "public/tech-icons/creativecloud.svg";
import github from "public/tech-icons/github.svg";
import youtube from "public/tech-icons/youtube.svg";
import chrome from "public/tech-icons/chrome.svg";
import pr from "public/tech-icons/pr.svg";
import ps from "public/tech-icons/ps.svg";
import twitter from "public/tech-icons/twitter.svg";
import linkedin from "public/tech-icons/linkedin.svg";
import { Button } from "@/components/ui/button";
import javascript from "public/tech-icons/javascript.svg";
import mysql from "public/tech-icons/mysql-dark.svg";
import postgres from "public/tech-icons/postgresql-dark.svg";
import googleads from "public/tech-icons/google-ads.svg";
import tailwind from "public/tech-icons/tailwindcss-dark.svg";
import symfony from "public/tech-icons/symfony-dark.svg";
import php from "public/tech-icons/php-dark.svg";
import vercel from "public/tech-icons/vercel-dark.svg";
import vscode from "public/tech-icons/vscode-dark.svg";
import neo from "public/tech-icons/neon-icon.svg";
import shopify from "public/tech-icons/shopify.svg";
import typescript from "public/tech-icons/typescript.svg";
import nextjs from "public/tech-icons/nextjs-dark.svg";
import react from "public/tech-icons/react-dark.svg";
import notion from "public/tech-icons/notion.svg";
import bootstrap from "public/tech-icons/bootstrap.svg";
import docker from "public/tech-icons/docker.svg";
import ggAnalytic from "public/tech-icons/google-analytics.svg";
import laravel from "public/tech-icons/laravel.svg";
import digitalOcean from "public/tech-icons/digitalocean.svg";
import angular from "public/tech-icons/AngularJS.svg";
import searchConsole from "public/tech-icons/searchConsole.svg";

import awss3 from "public/tech-icons/aws-s3.svg";
import awsrds from "public/tech-icons/aws-rds.svg";
import awsec2 from "public/tech-icons/aws-ec2.svg";
import awsapigateway from "public/tech-icons/aws-apigateway.svg";
import expressjs from "public/tech-icons/expressjs.svg";


const icons = [
  nextjs,
  react,
  angular,
  typescript,
  javascript,
  expressjs,
  awsrds,
  postgres,
  mysql,
  neo,
  php,
  symfony,
  laravel,
  awsapigateway,
  tailwind,
  bootstrap,
  vercel,
  vscode,
  shopify,
  googleads,
  ggAnalytic,
  searchConsole,
  canva,
  chatgpt,
  awss3,
  cloud,
  digitalOcean,
  awsec2,
  github,
  docker,
  notion,
  youtube,
  chrome,
  pr,
  ps,  
];

const socialMedia = [
  {
    id: 1,
    icon: github,
    name: "Github",
    username: "@mohammednaami",
    link: "https://github.com/mohammednaami",
  },
  {
    id: 2,
    icon: twitter,
    name: "X / Twitter",
    username: "@N3M1MO",
    link: "https://x.com/N3M1MO",
  },
  {
    id: 3,
    icon: linkedin,
    name: "Linkedin",
    username: "Mohammed Naami",
    link: "https://www.linkedin.com/in/mohammed-naami/",
  },
];

export function SectionTwo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
      {/* Left Side Image */}
      <div className="relative col-span-1">
        <div className="w-full h-full overflow-hidden rounded-2xl">
          <Image
            src={m3}
            alt="Mohammed Naami"
            className="w-full h-full object-cover rounded-2xl"
            priority
          />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-6">
        {/* Stack Card */}
        <Card className="bg-gray-100 border-none">
          <CardHeader>
            <CardTitle>Explore My Stack</CardTitle>
            <CardDescription>Check out the tools I use daily</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((icon, index) => (
              <Image key={index} src={icon} alt="Icon" className="w-16 h-16" />
            ))}
          </CardContent>
        </Card>

        {/* Social Media Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 gap-2 flex flex-col items-center sm:items-start bg-gray-100 border-none text-center sm:text-left">
              <Image priority src={item.icon} alt={item.name} className="w-16 h-16" />
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <p className="text-gray-500">{item.username}</p>
              <Button size="sm" asChild>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Follow
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
