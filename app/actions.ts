"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./lib/db";
import { revalidatePath } from "next/cache";


export async function postMessage(formData: FormData){

    const { getUser } = getKindeServerSession();

    const user = await getUser();

    if(!user){
        throw new Error("Unauthorized");
    }

    const message = formData.get('message') as string;

    await prisma.guestBookEntry.create({
        data: {
            userId: user.id,
            message: message,
        }
    });

    revalidatePath("/guestBook");

}