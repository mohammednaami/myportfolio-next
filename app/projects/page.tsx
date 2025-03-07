import { ProjectCard } from "../lib/interface";
import { client } from "../lib/sanity";
import Image from "next/image";
async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt asc){
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
export default async function ProjectPage() {
  const projects: ProjectCard[] = await getProjects();
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Projects</h1>
      <p className="leading-7 text-muted-foreground ">
        Take a look at the projects I've created.
      </p>
      <div className="py-12 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
        {projects.map((project) => (
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
    </section>
  );
}
