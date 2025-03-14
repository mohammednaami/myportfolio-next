import { ProjectCard } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import Image from "next/image";

async function getFavProject() {
  const query = `*[_type == "project"] | order(_createdAt asc)[0...2]{
  title,
    _id,
    link,
    description,
    tags,
    "imgUrl": image.asset->url
}`;

  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });

  return data;
}

export default async function FavoriteProject() {
  const data: ProjectCard[] = await getFavProject();

  return (
    <div className="py-10 grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 grid-cols-1">
      {data.map((project) => (
        <a
          href={project.link}
          key={project._id}
          className="group block"
          target="_blank">
          <div className="aspect-w-15 aspect-h-7 overflow-hidden rounded-2xl relative">
              <Image
  src={`${project.imgUrl}?w=1000&auto=format`}
  className="object-cover rounded-xl group-hover:scale-95 transition-transform duration-500 ease-in-out"
                alt={project.title}
                layout="intrinsic"

                width={500}
                height={350} 
                quality={100} 
              />
          </div>
          <div className="mt-4">
            <h2 className="font-medium text-lg hover:underline">
              {project.title}
            </h2>
            <p className="mt-1 text-muted-foreground line-clamp-2">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tagItem, index) => (
                <span
                  className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20"
                  key={index}>
                  {tagItem}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
