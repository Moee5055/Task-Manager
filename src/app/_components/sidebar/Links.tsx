"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaTasks } from "react-icons/fa";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { TbPinnedFilled } from "react-icons/tb";
import { FaImage } from "react-icons/fa6";

type Link = {
  id: number;
  href: string;
  link: string;
  icon: any;
};

const links: Link[] = [
  {
    id: 0,
    href: "/tasks",
    link: "Tasks",
    icon: <FaTasks className="h-5 w-5" />,
  },
  {
    id: 1,
    href: "/incomplete",
    link: "Do it Now!",
    icon: <MdOutlineIncompleteCircle className="h-5 w-5" />,
  },
  {
    id: 2,
    href: "/completed",
    link: "Completed",
    icon: <CheckCircledIcon className="h-5 w-5" />,
  },

  {
    id: 3,
    href: "/important",
    link: "Important",
    icon: <TbPinnedFilled className="h-5 w-5" />,
  },
  {
    id: 4,
    href: "/images",
    link: "Images",
    icon: <FaImage className="h-5 w-5" />,
  },
];

const Links = () => {
  const currentPath = usePathname();
  return (
    <ul>
      {links.map((singleLink: Link) => {
        const { icon, id, link, href } = singleLink;
        return (
          <li
            key={id}
            className={`flex items-center space-x-3 p-4 hover:underline hover:border-r-4
   hover:border-muted-foreground/45 dark:hover:bg-background/50 tracking-wider
   text-muted-foreground ${
     currentPath === href &&
     "dark:bg-background/50 border-r-4 border-muted-foreground/45"
   } transition-all`}>
            {icon}
            <Link href={href}>{link}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
