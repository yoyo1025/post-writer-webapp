import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pd-8 md:pd-12 ">
        <div className="container mx-auto px-4 text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link href={"/"}>Xをフォローする</Link>
          <h1>Post Writer</h1>
          <p>
            このアプリケーションはNext.js AppRouterで作られたものです。
            ユーザは自由に投稿をポストすることが出来ます。
          </p>
        </div>
      </section>
    </>
  )
}