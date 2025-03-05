import { GuestFormBook } from "@/components/forms/guestbookForm";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../lib/db";
import { Suspense } from "react";
import { GuestBookFormLoading, LoadingMessages } from "@/components/loading/LoadingMessages";
import Image from "next/image";


async function getGuestBookEntry() {
  const data = await prisma.guestBookEntry.findMany({
    select: {
      id: true,
      message: true,
      User: {
        select: {
          firstname: true,
          lastname: true,
          profileimage: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 30,
  });

  return data;
}

export default function Guestbook() {
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Guestbook</h1>
      <p className="leading-7 text-muted-foreground mt-2">Sign my Guestbook!</p>

      <Card className="mt-10">
        <CardHeader className="flex flex-col w-full">
          <Label className="mb-1">Message</Label>
          <Suspense fallback={<GuestBookFormLoading />}>
          <GuestBookForm />

          </Suspense>
          <ul className="pt-7 gap-y-5 flex flex-col">
            <Suspense fallback={<LoadingMessages />}>
            <GuestBookEntries />
            </Suspense>
          </ul>
        </CardHeader>
      </Card>
    </section>
  );
}

async function GuestBookEntries() {
  const data = await getGuestBookEntry();
  if (data.length === 0) return null;

  return data.map((item) => (
    <li key={item.id}>
      <div className="flex items-center">
      {item.User?.profileimage ? (
  <Image
    src={item.User.profileimage}
    alt={item.User.firstname || "User profile"}
    width={40}
    height={40}
    className="rounded-lg"
  />
) : (
  <Image
    src="avatar.svg" // Default profile image
    alt="Default profile"
    width={40}
    height={40}
    className="rounded-lg"
  />
)}
        <p className="text-muted-foreground pl-3 break-words"><span className="text-foreground">{item.User?.firstname}: </span>{item.message}</p>
      </div>
    </li>
  ));
}

async function GuestBookForm() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (user) {
    return <GuestFormBook />;
  }

  return (
    <div className="flex justify-between gap-4 flex-col md:flex-row">
      <Input type="text" placeholder="Your Message..." />
      <RegisterLink>
        <Button className="w-full">Sign for free</Button>
      </RegisterLink>
    </div>
  );
}
