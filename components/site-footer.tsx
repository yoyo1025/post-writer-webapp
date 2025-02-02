import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="w-full py-10 md:py-0 md:h-24">
        <p className="text-center md:text-left">
          Bulid by {""}
          <Link href={siteConfig.links.x} className="underline underline-offset-4 font-medium">
            yoyo1025
          </Link>
          . Hosted on {""}
          <Link href={"https://vercel.com"} className="underline underline-offset-4 font-medium">Vercel</Link>
        </p>
      </div>
    </footer>
  )
}