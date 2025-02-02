import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

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
      <section id="features" className="w-full py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6">
          <div className="text-center space-y-6 max-w-[58rem] mx-auto">
            <h2 className="font-extrabold text-3xl md:text-6xl">サービスの特徴</h2>
            <p className="flex justify-center text-center text-muted-foreground sm:text-lg sm:leading-7">
              このプロジェクトはモダンな技術スタックを使って作られたWebアプリケーションです。Next.js AppRouterやcontentlayerを利用してマークダウン形式でブログ投稿できます。
            </p>
          </div>
          <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 md:h-[160px] h-[180px]">      
                <Image src="/nextjs.png" alt="Next.jsのロゴ" width={45} height={45} />
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js</h3>
                  <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
                </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 md:h-[160px] h-[180px]">      
                <Image src="/nextjs.png" alt="Next.jsのロゴ" width={45} height={45} />
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js</h3>
                  <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
                </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 md:h-[160px] h-[180px]">      
                <Image src="/nextjs.png" alt="Next.jsのロゴ" width={45} height={45} />
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js</h3>
                  <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
                </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 md:h-[160px] h-[180px]">      
                <Image src="/nextjs.png" alt="Next.jsのロゴ" width={45} height={45} />
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js</h3>
                  <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
                </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 md:h-[160px] h-[180px]">      
                <Image src="/nextjs.png" alt="Next.jsのロゴ" width={45} height={45} />
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js</h3>
                  <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
                </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 md:h-[160px] h-[180px]">      
                <Image src="/nextjs.png" alt="Next.jsのロゴ" width={45} height={45} />
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js</h3>
                  <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <p className="text-center text-muted-foreground sm:text-lg sm:leading-7">
              Post Writerはログインするとブログ投稿が出来るようになります。
            </p>
          </div>
      </section>
      <section id="contact" className="w-full py-8 md:py-12 lg:py-24"> 
        <div className="flex flex-col text-center gap-4">
          <h2 className="font-extrabold text-3xl md:text-6xl">Contact Me</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7 ">
            もしもWebserviceが気に入った場合は下記XからDMでご連絡下さい。
            <br />
            お仕事のご連絡をお待ちしております。
          </p>
          <Link 
            href={siteConfig.links.x} 
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            お仕事はXまで
          </Link>
        </div>
      </section>
    </>
  )
}