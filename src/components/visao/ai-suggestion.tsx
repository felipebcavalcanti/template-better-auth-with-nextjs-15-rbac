import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface AISuggestionProps {
  reasonWhyItems: string[];
}

export default function AISuggestion({ reasonWhyItems }: AISuggestionProps) {
  
  return (
    <div className="w-full lg:w-[629px] h-auto lg:h-[600px] bg-[#ffffff0d] rounded-3xl border border-solid border-[#f6f8fc1a] p-3 overflow-hidden flex flex-col">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0 mb-4 ">
        <h2 className="montserrat-bold-24 text-white">
          Sugestão da IA
        </h2>
        <div className="flex gap-2 flex-wrap rounded-full shadow-[0px_4px_6px_rgba(0,0,0,0.4)] px-2 py-2">
          <Button
            variant="ghost"
            size="sm"
            className="px-4 py-2 bg-[#ffffff1a] rounded-full text-white text-xs font-semibold hover:bg-[#ffffff1a]"
          >
            NBX
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="px-4 py-2 bg-[#ffffff1a] rounded-full text-white text-xs font-semibold hover:bg-[#ffffff1a]"
          >
            NBA
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="px-4 py-2 bg-[#ffffff1a] rounded-full text-white text-xs font-semibold hover:bg-[#1876d2] hover:shadow-[0px_0px_10px_#1876d2] hover:text-white"
          >
            NBO
          </Button>
        </div>
      </div>

      <Card className="bg-[#ffffff0d] border-none rounded-2xl flex-1 overflow-hidden">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="mb-4">
            <h3 className="montserrat-semibold-18 text-white mb-3">
              Oferta recomendada
            </h3>
            <p className="montserrat-regular-14 text-white">
              Seguro de vida individual com cobertura por doenças graves
            </p>
          </div>

          <div className="flex gap-12 mb-4">
            <div>
              <div className="montserrat-regular-14 text-[#ffffff80] mb-2">
                Valor recomendado
              </div>
              <div className="montserrat-semibold-18 text-white">
                R$ 127,50/mês
              </div>
            </div>
            <div>
              <div className="montserrat-regular-14 text-[#ffffff80] mb-2">
                Probabilidade de conversão
              </div>
              <div className="montserrat-semibold-18 text-[#00db03]" style={{ textShadow: '0px 0px 10px rgba(0, 220, 4, 0.27)' }}>
                78%
              </div>
            </div>
          </div>

          <Separator className="h-px bg-gray-200 mb-4" />

          <div className="mb-4 flex-1">
            <h4 className="montserrat-semibold-18 text-white mb-3">
              Reason Why
            </h4>
            <ul className="space-y-2">
              {reasonWhyItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-[#22abdd] shadow-[0px_0px_4px_#22abdd] w-2 h-2 rounded-full flex-shrink-0 mt-1.5" />
                  <span className="montserrat-regular-14 text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-start justify-center mt-auto">
            <Button className="bg-[#1876d2] shadow-[0px_0px_10px_#1876d2] hover:bg-[#1876d2] hover:shadow-[0px_0px_15px_#1876d2] text-white px-8 py-3 rounded-full">
              <span className="montserrat-regular-14">
                Simular conversa com IA
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
