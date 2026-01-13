import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React",
  "Javascript",
  "Node.js",
  "PostgreSQL",
  "Html",
  "CSS",
  "Bootstrap"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
            <Image
              src="https://picsum.photos/seed/profile/600/600"
              alt="A portrait of the developer"
              fill
              className="object-cover"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              I’m <b>Pedro Segui </b>, a passionate web developer who enjoys building clean, scalable, and user-focused digital experiences. I specialize in transforming complex ideas into intuitive and well-structured solutions, with a strong attention to detail and performance.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              My goal is to create products that balance technical quality with creativity, delivering seamless experiences that feel simple, efficient, and purposeful.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 bg-white border border-border">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
