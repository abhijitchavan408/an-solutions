import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  techStack: readonly string[];
  image: string;
}

export function ProjectCard({
  title,
  description,
  category,
  techStack,
  image,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={`${title} project screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3">
          <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
            {category}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="font-heading text-xl">{title}</CardTitle>
        <CardDescription className="leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-wrap gap-1.5">
        {techStack.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
