import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function SmartClassification() {
  return (
    <div className="w-full lg:w-[965px] h-auto lg:h-[320px]  rounded-3xl p-4 lg:p-6" >
      <h2 className="font-bold text-white text-lg lg:text-xl tracking-[0] leading-5 lg:leading-6 mb-4 lg:mb-6">
        Classificação inteligente
      </h2>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 ">
        {/* Premium Card */}
        <Card className="w-full lg:w-[332px] h-auto lg:h-[216px] bg-[#1a2332] border-0 rounded-2xl p-2">
          <CardContent className="p-1 flex flex-col justify-between h-full">
            <div className="flex flex-col items-center">
              <div className="relative w-[156px] h-[110px] flex items-center justify-center mb-1 ">
                {/* SVG para os arcos */}
                <svg className="absolute w-[156px] h-[110px]" viewBox="0 0 156 110" fill="none">
                  {/* Arco cinza direito (parte superior direita) */}
                  <path
                    d="M 78 18 A 58 58 0 0 1 138 78"
                    stroke="rgba(246, 248, 252, 0.25)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Arco azul esquerdo (parte superior esquerda) */}
                  <path
                    d="M 18 78 A 58 58 0 0 1 78 18"
                    stroke="#5b9ceb"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Diamante centralizado */}
                <div className="relative z-10 text-[32px] mt-4">
                  💎
                </div>
              </div>
              <div className="font-semibold text-[#9ca3af] text-base tracking-[0] leading-5">
                Premium
              </div>
            </div>

            <div className="flex justify-between items-center gap-3 mt-4">
              <div className="flex-1 ml-4">
                <div className="font-semibold text-[#6b7280] text-[10px] tracking-[0] leading-3 mb-1">
                  Life time value
                </div>
                <div className="font-bold text-white text-base tracking-tight leading-5">
                  R$ 24.580,00
                </div>
              </div>
                {/* poderia usar o separator aqui do shadcn/ui */}
              <div className="w-px h-[40px] mr-4 bg-[#374151]" />

              <div className="flex-1 text-left">
                <div className="font-semibold text-[#6b7280] text-[10px] tracking-[0] leading-3 mb-1 ">
                  Probabilidade de churn
                </div>
                <div 
                    className="flex flex-start font-bold text-[#22c55e] text-base tracking-tight leading-5" 
                    style={{ textShadow: '0px 0px 8px rgba(34, 197, 94, 0.4)' }}>
                  11%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Score Cards */}
        <div className="flex-1 space-y-3 lg:space-y-4">
          <Card className="bg-[#ffffff0d] rounded-2xl border-0 p-4 lg:p-6">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-normal text-white text-sm tracking-[0] leading-5">
                  Score de expansão
                </span>
                <Badge className="bg-[#00a602] text-white text-xs font-medium px-3 py-1 rounded-full">
                  Alto
                </Badge>
              </div>
              <div className="relative w-full">
                <div className="w-full h-2 bg-[#ffffff1a] rounded-full" />
                <div className="absolute top-0 left-0 h-2 bg-[#00db03] rounded-full shadow-[0px_4px_4px_#00dc0440]" style={{ width: '85%' }} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#ffffff0d] rounded-2xl border-0 p-4 lg:p-6">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-3 lg:mb-4">
                <span className="font-normal text-white text-sm tracking-[0] leading-5">
                  Score de retenção
                </span>
                <Badge className="bg-[#c29e00] text-white text-xs font-medium px-3 py-1 rounded-full">
                  Médio
                </Badge>
              </div>
              <div className="relative w-full">
                <div className="w-full h-2 bg-[#ffffff1a] rounded-full" />
                <div className="absolute top-0 left-0 h-2 bg-[#e7bc00] rounded-full shadow-[0px_4px_4px_#e7bd0040]" style={{ width: '50%' }} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
