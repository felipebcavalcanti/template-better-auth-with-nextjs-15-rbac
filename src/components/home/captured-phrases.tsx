import { Card, CardContent } from "@/components/ui/card";

interface CapturedPhrase {
  text: string;
  date: string;
}

interface CapturedPhrasesProps {
  phrases: CapturedPhrase[];
}

export default function CapturedPhrases({ phrases }: CapturedPhrasesProps) {
  return (
    <div className="mb-6">
      <h3 className="font-medium text-[#f6f8fc] text-base tracking-[0] leading-5 mb-3">
        Frases captadas
      </h3>
      <div className="space-y-2.5">
        {phrases.map((phrase, index) => (
          <Card
            key={index}
            className="bg-[#ffffff0d] border-none rounded-[0px_12px_12px_12px]"
          >
            <CardContent className="p-3">
              <div className="font-normal text-blue-50 text-sm tracking-[0] leading-[1.3] mb-1.5">
                &quot;{phrase.text}&quot;
              </div>
              <div className="font-semibold text-[#eff6ff80] text-[10px] tracking-[0] leading-3">
                {phrase.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
