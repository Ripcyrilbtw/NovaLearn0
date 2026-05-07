import {
  Calculator, Atom, FlaskConical, Dna, Landmark, Globe,
  BookOpen, ScrollText, TrendingUp, Briefcase, Monitor, Cpu,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  calculator: Calculator,
  atom: Atom,
  "flask-conical": FlaskConical,
  dna: Dna,
  landmark: Landmark,
  globe: Globe,
  "book-open": BookOpen,
  "scroll-text": ScrollText,
  "trending-up": TrendingUp,
  briefcase: Briefcase,
  monitor: Monitor,
  cpu: Cpu,
};

interface Props {
  name: string;
  className?: string;
}

export default function SubjectIcon({ name, className }: Props) {
  const Icon = iconMap[name] ?? Calculator;
  return <Icon className={className} />;
}
