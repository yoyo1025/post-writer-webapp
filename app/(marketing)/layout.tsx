import { buttonVariants } from "@/components/ui/button";
import MainNav from "@/components/ui/main-nav";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}){
  return (
    <div>
      <header className="w-full px-4 z-40 bg-background">
        <div className="max-w-screen-2xl mx-auto h-20 py-6 flex items-center justify-between">
          <MainNav items={marketingConfig.mainNav}/>
          <Link
            href={"/login"}
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "px-4"
            )}
          >
            ログイン
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
};