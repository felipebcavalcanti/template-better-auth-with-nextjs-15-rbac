import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeftIcon } from "lucide-react";

interface ReturnButtonProps {
  href: string;
  label: string;
}

export default function ReturnButton({ href, label }: ReturnButtonProps) {
  return (
    <Button variant="outline" asChild>
      <Link href={href}>
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        {label}
      </Link>
    </Button>
  );
}
