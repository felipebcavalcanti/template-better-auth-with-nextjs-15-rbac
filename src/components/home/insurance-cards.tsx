import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function InsuranceCards() {
  return (
    <div className="w-full lg:w-[312px] space-y-4 lg:space-y-6">
      <Card className="border border-solid border-[#f6f8fc1a] rounded-3xl p-4 lg:p-8" style={{
        background: 'linear-gradient(180deg, rgba(42,151,212,1) 0%, rgba(58,183,215,1) 100%)'
      }}>
        <CardContent className="p-0">
          <div className="mb-8">
            <h3 className="font-bold text-white text-xl tracking-[0] leading-6 mb-3">
              Seguro de vida individual
            </h3>
            <p className="font-normal text-white text-sm tracking-[0] leading-5">
              Proteção financeira completa com cobertura por morte e doenças graves
            </p>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="font-semibold text-[#ffffffb2] text-xs tracking-[0] leading-4 mb-2">
                Por apenas:
              </div>
              <div className="font-semibold text-white text-xl tracking-[0] leading-6">
                R$ 127,50/mês
              </div>
            </div>
            <Button className="bg-[#1876d2] shadow-[0px_0px_10px_#1876d2] hover:bg-[#1876d2] text-white px-5 py-2.5 rounded-full">
              <span className="font-semibold text-xs tracking-[0] leading-4">
                Simular
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#ffffff0d] border border-solid border-[#ffffff80] rounded-3xl p-8">
        <CardContent className="p-0">
          <div className="mb-8">
            <h3 className="font-bold text-white text-xl tracking-[0] leading-6 mb-3">
              Upgrade do seguro residencial
            </h3>
            <p className="font-normal text-white text-sm tracking-[0] leading-5">
              Plano Completo com proteção contra danos elétricos e assistência 24h
            </p>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="font-semibold text-[#ffffff80] text-xs tracking-[0] leading-4 mb-2">
                Por apenas:
              </div>
              <div className="font-semibold text-white text-xl tracking-[0] leading-6">
                R$ 127,50/mês
              </div>
            </div>
            <Button className="border border-solid border-[#ffffff80] text-white px-5 py-2.5 rounded-full bg-transparent hover:bg-[#ffffff0d]">
              <span className="font-semibold text-xs tracking-[0] leading-4">
                Simular
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
