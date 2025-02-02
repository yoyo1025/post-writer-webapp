import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pd-8 md:pd-12">
        <div className="container mx-auto px-4 text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link 
            href={siteConfig.links.x} 
            className="bg-muted px-4 py-1.5 font-medium text-sm"
            target="_blank"
            rel="noreferrer"
          >
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
              href={siteConfig.links.github} 
              className={cn(buttonVariants({size: "lg", variant: "outline"}))}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section id="features" className="w-full container py-8 md:py-12 lg:py-24 bg-slate-100">
          <div className="text-center space-y-6 max-w-[58rem] mx-auto">
            <h2 className="font-extrabold text-3xl md:text-6xl">サービスの特徴</h2>
            <p className="flex justify-center text-center text-muted-foreground sm:text-lg sm:leading-7">
              このプロジェクトはモダンな技術スタックを使って作られたWebアプリケーションです。Next.js AppRouterやcontentlayerを利用してマークダウン形式でブログ投稿できます。
            </p>
          </div>
      </section>
    </>
  )
}