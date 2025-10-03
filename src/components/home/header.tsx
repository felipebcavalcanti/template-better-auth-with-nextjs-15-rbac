import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="w-full h-[88px] flex items-center bg-[#20273e]">
      <div className="flex w-full max-w-[1440px] mx-auto px-4 lg:px-12 items-center justify-between">
        <div className="font-semibold text-[#f6f8fc] text-lg lg:text-xl tracking-[0] leading-6">
          Visão 360º
        </div>

        <div className="inline-flex items-center gap-3">
          <Avatar className="w-10 h-10 lg:w-12 lg:h-12 bg-[#1876d2]">
            <AvatarFallback className="bg-[#1876d2] text-blue-50 font-semibold text-base lg:text-lg">
              AC
            </AvatarFallback>
          </Avatar>

          <div className="hidden lg:flex flex-col items-start gap-0.5">
            <div className="font-normal text-blue-50 text-sm tracking-[0] leading-5">
              Ana Cardoso
            </div>

            <div className="font-semibold text-[#eff6ff80] text-xs tracking-[0] leading-4">
              Vendedora
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
