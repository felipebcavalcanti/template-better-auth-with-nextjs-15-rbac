import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface AISuggestionProps {
  reasonWhyItems: string[];
}

export default function AISuggestion({ reasonWhyItems }: AISuggestionProps) {
  
  return (
    <div className="w-full lg:w-[629px] h-auto lg:h-[530px] bg-[#ffffff0d] rounded-3xl border border-solid border-[#f6f8fc1a] p-4 lg:p-8 overflow-y-auto">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0 mb-6 lg:mb-8">
        <h2 className="font-bold text-white text-xl lg:text-[26px] tracking-[0] leading-6 lg:leading-8">
          Sugestão da IA
        </h2>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant="ghost"
            size="sm"
            className="px-4 py-2 bg-[#f6f8fc1a] rounded-full text-white text-xs font-semibold hover:bg-[#f6f8fc26]"
          >
            NBX
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="px-4 py-2 bg-[#f6f8fc1a] rounded-full text-white text-xs font-semibold hover:bg-[#f6f8fc26]"
          >
            NBA
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="px-4 py-2 bg-[#1876d2] shadow-[0px_0px_10px_#1876d2] rounded-full text-white text-xs font-semibold hover:bg-[#1876d2]"
          >
            NBO
          </Button>
        </div>
      </div>

      <Card className="bg-[#ffffff0d] border-none rounded-2xl">
        <CardContent className="p-8">
          <div className="mb-8">
            <h3 className="font-semibold text-white text-lg tracking-[0] leading-6 mb-3">
              Oferta recomendada
            </h3>
            <p className="font-normal text-white text-sm tracking-[0] leading-5">
              Seguro de vida individual com cobertura por doenças graves
            </p>
          </div>

          <div className="flex gap-12 mb-8">
            <div>
              <div className="font-semibold text-[#ffffff80] text-xs tracking-[0] leading-4 mb-3">
                Valor recomendado
              </div>
              <div className="font-semibold text-white text-[22px] tracking-[0] leading-6">
                R$ 127,50/mês
              </div>
            </div>
            <div>
              <div className="font-semibold text-[#ffffff80] text-xs tracking-[0] leading-4 mb-3">
                Probabilidade de conversão
              </div>
              <div className="font-semibold text-[#00db03] text-[22px] tracking-[0] leading-6" style={{ textShadow: '0px 0px 10px rgba(0, 220, 4, 0.27)' }}>
                78%
              </div>
            </div>
          </div>

          <Separator className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

          <div className="mb-8">
            <h4 className="font-semibold text-white text-lg tracking-[0] leading-6 mb-5">
              Reason Why
            </h4>
            <ul className="space-y-3">
              {reasonWhyItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-[#22abdd] shadow-[0px_0px_4px_#22abdd] w-2 h-2 rounded-full flex-shrink-0 mt-1.5" />
                  <span className="font-normal text-white text-sm tracking-[0] leading-5">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <Button className="bg-[#1876d2] shadow-[0px_0px_10px_#1876d2] hover:bg-[#1876d2] hover:shadow-[0px_0px_15px_#1876d2] text-white px-8 py-3 rounded-full">
              <span className="font-semibold text-xs tracking-[0] leading-4">
                Simular conversa com IA
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
