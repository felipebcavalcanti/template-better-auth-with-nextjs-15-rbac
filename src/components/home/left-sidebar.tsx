import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LeftSidebar() {
  const navigationItems = [
    {
      icon: "https://c.animaapp.com/mfyg6szb9gzN4V/img/icon-2.svg",
      isActive: true,
    },
    {
      icon: "https://c.animaapp.com/mfyg6szb9gzN4V/img/icon-5.svg",
      isActive: false,
    },
    {
      icon: "https://c.animaapp.com/mfyg6szb9gzN4V/img/icon-6.svg",
      isActive: false,
    },
  ];

  return (
    <aside className="hidden lg:flex h-full items-end bg-[#20273e] rounded-[0px_40px_40px_0px] overflow-hidden shadow-[4px_0px_20px_#00000033] relative">
      <div className="flex flex-col w-[114px] items-center justify-between py-9 px-5 relative self-stretch z-[1] rounded-[0px_23px_26px_0px] overflow-hidden">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Image
            className="w-10 h-10 object-cover"
            alt="Logo"
            src="https://c.animaapp.com/mfyg6szb9gzN4V/img/chatgpt-image-15-de-mai--de-2025--12-25-13-1.png"
            width={40}
            height={40}
          />
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col items-center gap-10">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={`h-[60px] w-[60px] rounded-xl ${
                item.isActive
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
          ))}
        </nav>

        {/* User Avatar */}
        <Avatar className="w-12 h-12 bg-[#1876d2]">
          <AvatarFallback className="bg-[#1876d2] text-blue-50 text-base font-semibold">
            AC
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Background gradient effect */}
      <div
        className="absolute w-[calc(100%_+_256px)] top-[115px] left-[41px] h-[959px] z-0 rounded-[10px] rotate-180 blur-[25px] opacity-10"
        style={{
          background: 'conic-gradient(from 164deg at 50% 50%, rgba(66,232,255,0) 26%, rgba(255,126,171,0) 52%, rgba(48,131,255,0) 76%, rgba(113,71,255,0) 100%)'
        }}
      />
    </aside>
  );
}
