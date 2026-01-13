import { Button } from "@/components/ui/button";
import Link from "next/link";

const DecorativeShape = () => (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <svg className="absolute -top-1/4 -left-1/4 w-1/2 h-auto text-white/5 opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
        <circle cx="50" cy="50" r="50" />
      </svg>
      <svg className="absolute -bottom-1/4 -right-1/4 w-1/2 h-auto text-white/10 opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect width="100" height="100" rx="20"/>
      </svg>
    </div>
  );

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center bg-gradient-to-br from-[#FF6B6B] to-[#FFD93D] text-white overflow-hidden">
      <DecorativeShape />
      <div className="relative z-10 px-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
          Creative Full-Stack Web Developer {/* & UI/UX Designer */}
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-8">
          I design and build beautiful, functional, and user-centric digital experiences. Let's bring your ideas to life.
        </p>
        <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105 mr-4">
          <Link href="#projects">View My Work</Link>
        </Button>

        <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
          <Link href="/CV.pdf" download="CV">Download CV</Link>
        </Button>
      </div>
    </section>
  );
}
