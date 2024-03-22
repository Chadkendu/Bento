"use client";
import Link from "next/link";
import Button from "../ui/Button";
import Route from "../ui/Route";
import { navLinks } from "@/constants";
import MobileMenu from "./MobileMenu";
import useMenuActive from "@/hooks/useMenuActive";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { User } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";

import { signOut } from "next-auth/react";
import Image from "next/image";

interface NavbarProps {
  user: User;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const router = useRouter();

  const logo = "/assets/logo.png";

  return (
    <header
      className={`z-40 mb-20 flex justify-between gap-10 align-middle lg:p-5 shadow-sm lg:px-8 p-3 transition duration-700 ease-in-out w-full items-center bg-white bg-opacity-90 ${
        sticky
          ? "!fixed !z-[9999] bg-white shadow-sticky backdrop-blur-md !transition align-middle items-center"
          : "absolute"
      }`}
    >
      <div className="flex gap-5 align-middle items-center flex-1">
        <Link href={"/"}>
          <Image
            src={logo}
            width={40}
            height={40}
            alt="logo"
            className="w-10 rounded-full"
          />
        </Link>
        <p className="text-2xl uppercase">Bento</p>
      </div>

      <ul className="flex items-center justify-center gap-16 flex-2 max-md:hidden">
        {navLinks.map((link, index) => {
          const isActive = useMenuActive(link.route);

          return (
            <li key={index}>
              <Route
                route={link.route}
                label={link.label}
                isActive={isActive}
              />
            </li>
          );
        })}
      </ul>

      {!user && (
        <div className="flex gap-5 flex-1 justify-end max-md:hidden">
          <Button
            text="Log In"
            onClick={() => router.push("/access")}
            aria="Log in button"
          />
        </div>
      )}

      {user && (
        <div className="flex gap-5 items-center flex-1 justify-end max-md:hidden">
          <h1>{user.name}</h1>
          <Image
            src={user.image as string}
            width={40}
            height={40}
            className="rounded-full border-2 border-black cursor-pointer"
            alt={`Image of ${user.name}`}
            onClick={() => setOpenUserMenu(!openUserMenu)}
          />
        </div>
      )}

      {openUserMenu && (
        <ul className="z-10 absolute right-12 top-[83px] w-[200px] flex gap-8 flex-col align-middle items-start bg-white shadow-sm bg-opacity-90 rounded-md p-6">
          <Link href="/create" onClick={() => setOpenUserMenu(false)}>
            <li>Create a post</li>
          </Link>
          <Link href="/posts" onClick={() => setOpenUserMenu(false)}>
            <li>My Post</li>
          </Link>

          <li className="cursor-pointer" onClick={() => signOut()}>
            Sign out
          </li>
        </ul>
      )}

      <div>
        <MobileMenu user={user} />
      </div>
    </header>
  );
};

export default Navbar;
