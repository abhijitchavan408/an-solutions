import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
}

export function TeamCard({ name, role, bio }: TeamCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
      <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <User className="h-10 w-10 text-primary" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {name}
          </h3>
          <p className="text-sm font-medium text-primary">{role}</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  );
}
