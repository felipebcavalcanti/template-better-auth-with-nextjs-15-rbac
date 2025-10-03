import { Badge } from "@/components/ui/badge";

interface ProfileTagsProps {
  tags: string[];
}

export default function ProfileTags({ tags }: ProfileTagsProps) {
  return (
    <div className="mb-6">
      <h3 className="font-medium text-[#f6f8fc] text-base tracking-[0] leading-5 mb-3">
        Perfil
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            className="bg-[#1876d2] hover:bg-[#1876d2]/80 text-blue-50 text-xs font-medium px-3 py-1.5 rounded-full"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
