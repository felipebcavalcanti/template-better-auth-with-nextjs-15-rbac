import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import ProductsList from "./products-list";
import ProfileTags from "./profile-tags";
import CapturedPhrases from "./captured-phrases";
import AppActions from "./app-actions";

interface UserProfileCardProps {
  userName: string;
  products: Array<{
    name: string;
    price: string;
    status: string;
    statusColor: string;
  }>;

  profileTags: string[];
  capturedPhrases: Array<{
    text: string;
    date: string;
  }>;
  
  appActions: Array<{
    timeAgo: string;
    action: string;
    details: string;
  }>;
}

export default function UserProfileCard({
  userName,
  products,
  profileTags,
  capturedPhrases,
  appActions,
}: UserProfileCardProps) {
  return (
    <div className="w-full lg:w-[520px] bg-[#ffffff05] rounded-3xl border border-solid border-[#ffffff1a] p-4 lg:p-6 relative h-fit">
      {/* User Name */}
      <div className="text-center mb-5">
        <h2 className="font-bold text-[#f6f8fc] text-xl tracking-[0] leading-6">
          {userName}
        </h2>
      </div>

      {/* User Action Buttons */}
      <div className="flex items-center justify-center gap-8 mb-6">
        <Button
          variant="ghost"
          className="flex flex-col items-center gap-2 p-2 hover:bg-[#ffffff0d] rounded-xl"
        >
          <Image className="w-6 h-6" alt="Phone" src="https://c.animaapp.com/mfyg6szb9gzN4V/img/icon-4.svg" width={24} height={24} />
          <span className="font-normal text-blue-50 text-xs tracking-[0] leading-4 text-center whitespace-nowrap">
            Telefonar
          </span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col items-center gap-2 p-2 hover:bg-[#ffffff0d] rounded-xl"
        >
          <Image className="w-6 h-6" alt="Email" src="https://c.animaapp.com/mfyg6szb9gzN4V/img/icon-3.svg" width={24} height={24} />
          <span className="font-normal text-blue-50 text-xs tracking-[0] leading-4 text-center whitespace-nowrap">
            Enviar e-mail
          </span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col items-center gap-2 p-2 hover:bg-[#ffffff0d] rounded-xl"
        >
          <Image className="w-6 h-6" alt="More" src="https://c.animaapp.com/mfyg6szb9gzN4V/img/icon-8.svg" width={24} height={24} />
          <span className="font-normal text-blue-50 text-xs tracking-[0] leading-4 text-center whitespace-nowrap">
            Ver mais
          </span>
        </Button>
      </div>

      <ProductsList products={products} />

      <Separator className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

      <ProfileTags tags={profileTags} />

      <Separator className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

      <CapturedPhrases phrases={capturedPhrases} />

      <Separator className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

      <AppActions actions={appActions} />
    </div>
  );
}
