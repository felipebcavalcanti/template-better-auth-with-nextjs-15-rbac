import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function InsuranceCards() {
  return (
    <div className=" w-full lg:w-[312px] space-y-4 lg:space-y-6">
      <Card
        className="h-[256px] border border-solid border-[#f6f8fc1a] rounded-3xl p-4 lg:p-2"
        style={{
        background: 'linear-gradient(180deg, rgba(42,151,212,1) 0%, rgba(58,183,215,1) 100%)'
        }}>
        <CardContent className="p-4 flex flex-col justify-between h-full">
          <div >
            <h3 className="montserrat-bold-20 text-white mb-3">
              Seguro de vida individual
            </h3>
            <p className="montserrat-regular-14 text-white">
              Proteção financeira completa com cobertura por morte e doenças graves
            </p>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="montserrat-regular-14 text-[#ffffffb2] mb-2">
                Por apenas:
              </div>
              <div className="montserrat-bold-20 text-white">
                R$ 127,50/mês
              </div>
            </div>
            <Button className="bg-[#1876d2] shadow-[0px_0px_10px_#1876d2] hover:bg-[#1876d2] text-white px-5 py-2.5 rounded-full">
              <span className="montserrat-regular-14 text-sm">
                Simular
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>

   
      <Card className="h-[256px] bg-[#ffffff0d] border border-solid border-[#ffffff80] rounded-3xl lg:p-2">
        <CardContent className="p-4 flex flex-col justify-between h-full">
          <div>
            <h3 className="montserrat-bold-20 text-white">
              Upgrade do seguro residencial
            </h3>
            <p className="montserrat-regular-14  text-white">
              Plano Completo com proteção contra danos elétricos e assistência 24h
            </p>
          </div>
          <div className="flex items-end justify-between mt-6">
            <div>
              <div className="montserrat-regular-14 text-[#ffffff80] ">
                Por apenas:
              </div>
              <div className="montserrat-bold-20 text-white">
                R$ 127,50/mês
              </div>
            </div>
            <Button className="border border-solid border-[#ffffff80] text-white px-5 py-2.5 rounded-full bg-transparent hover:bg-[#ffffff0d]">
              <span className="montserrat-regular-14 text-sm">
                Simular
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
