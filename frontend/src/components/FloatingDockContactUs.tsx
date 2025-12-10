import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export function FloatingDockContactUs() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/ayantiksarkar/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-300" />
      ),
      href: "https://github.com/ayantik2006",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-300" />
      ),
      href: "mailto:ayantik.sarkar2020@gmail.com",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-300" />
      ),
      href: "https://www.instagram.com/ayantik.sarkar",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full [@media(max-width:768px)]:translate-y-[7rem]">
      <FloatingDock
        items={links} />
    </div>
  );
}
