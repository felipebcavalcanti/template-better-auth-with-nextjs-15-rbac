"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useSession } from "@/lib/auth-client";
import { getInitials } from "@/utils/leftsidebar-utils";
import { useRouter, usePathname } from "next/navigation";
import logo from "../../../public/logo.png";
import navItem from "../../../public/nav-item.png";
import navItemDois from "../../../public/nav-item-dois.png";
import navItemTres from "../../../public/nav-item-tres.png";

export default function LeftSidebar() {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const navigationItems = [
    {
      icon: navItem,
      route: "/dashboard",
    },
    {
      icon: navItemTres,
      route: "/dashboard/dash",
    },
    {
      icon: navItemDois,
      route: "#",
    },
  ];

  const handleNavigationClick = (route: string) => {
    router.push(route);
  };

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen items-end bg-[#20273e] rounded-[0px_40px_40px_0px] overflow-hidden shadow-[4px_0px_20px_#00000033] z-50">
      <div className="flex flex-col w-[114px] h-full items-center justify-between py-9 px-5 relative self-stretch z-[1] rounded-[0px_23px_26px_0px] overflow-hidden">
        
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Image
            className="w-10 h-10 object-cover"
            alt="Logo"
            src={logo}
            width={80}
            height={80}
          />
        </div>

        {/* Itens de navegação */}
        <nav className="flex flex-col items-center gap-10">
          {navigationItems.map((item, index) => {
            //logica para verificar se o item está ativo, ficando azul quando estiver ativo.
            const isActive = pathname === item.route;
            return (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                onClick={() => handleNavigationClick(item.route)}
                className={`h-[60px] w-[60px] rounded-xl ${
                  isActive
                    ? "bg-[#1876d2] shadow-[0px_0px_10px_#1876d2] hover:bg-[#1876d2]"
                    : "bg-[#ffffff0d] hover:bg-[#ffffff1a]"
                }`}
              >
                <Image
                  className="w-6 h-6"
                  alt="Navigation icon"
                  src={item.icon}
                  width={24}
                  height={24}
                />
              </Button>
            );
          })}
        </nav>

        {/* Avatar do usuário */}
        <Avatar className="w-12 h-12 bg-[#1876d2]">
          <AvatarFallback className="bg-[#1876d2] text-blue-50 montserrat-semibold-18">
            {getInitials(session?.user?.name)}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Efeito Gradiente do Background */}
      <div
        className="absolute w-[calc(100%_+_256px)] top-[115px] left-[41px] h-[959px] z-0 rounded-[10px] rotate-180 blur-[25px] opacity-10"
        style={{
          background: 'conic-gradient(from 164deg at 50% 50%, rgba(66,232,255,0) 26%, rgba(255,126,171,0) 52%, rgba(48,131,255,0) 76%, rgba(113,71,255,0) 100%)'
        }}
      />
    </aside>
  );
}