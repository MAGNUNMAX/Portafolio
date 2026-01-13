import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = PlaceHolderImages;

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            My Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A selection of my work, showcasing my skills in design and development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <div className="relative h-60 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </div>
              </CardHeader>
              <div className="flex flex-col flex-grow">
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-2xl font-semibold mb-2">
                    Project {project.id}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex items-center gap-4">
                    <Button asChild variant="outline" className="transition-transform duration-300 hover:scale-105">
                      <a href={project.Github} target="_blank" rel="noopener noreferrer">
                        <Github />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild className="transition-transform duration-300 hover:scale-105">
                       <a href={project.Live} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ArrowRight />
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
