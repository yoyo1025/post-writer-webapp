import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pd-8 md:pd-12 ">
        <div className="container mx-auto px-4 text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link href={"/"} className="bg-muted px-4 py-1.5 font-medium text-sm">
            Xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションはNext.js AppRouterで作られたものです。
            ユーザは自由に投稿をポストすることが出来ます。
          </p>
          <div className="space-x-4">
            <Link 
              href={"/login"} 
              className={cn(buttonVariants({size: "lg"}))}
            >
              はじめる
            </Link>
            <Link 
              href={"/"} 
              className={cn(buttonVariants({size: "lg", variant: "outline"}))}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}