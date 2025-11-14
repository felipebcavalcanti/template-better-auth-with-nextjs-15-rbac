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
      <h3 className="montserrat-semibold-18 text-[#f6f8fc] mb-3">
        Frases captadas
      </h3>
      <div className="space-y-2.5">
        {phrases.map((phrase, index) => (
          <Card
            key={index}
            className="bg-[#ffffff0d] border-none rounded-[0px_12px_12px_12px]"
          >
            <CardContent className="p-3">
              <div className="montserrat-regular-14 text-blue-50 mb-1.5">
                &quot;{phrase.text}&quot;
              </div>
              <div className="montserrat-regular-14 text-[#eff6ff80]">
                {phrase.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
