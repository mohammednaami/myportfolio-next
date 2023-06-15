import { prisma } from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
export async function GET() {
    noStore();
    const { getUser } = getKindeServerSession();

    const user = await getUser();

    if (!user || user === null || !user.id) {
        throw new Error("Something went wrong");
    }

    let dbUser = await prisma.user.findUnique({
        where: {
            id: user.id,
        }
    });

    if (!dbUser) {
        dbUser = await prisma.user.create({
            data: {
                id: user.id,
                firstname: user.given_name ?? "",
                lastname: user.family_name ?? "",
                email: user.email ?? "",
                profileimage: user.picture,
            }
        });
    }

    return redirect("/guestbook");
}