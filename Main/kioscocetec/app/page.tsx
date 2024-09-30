import Image from "next/image";
import { CiInstagram } from "react-icons/ci";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/cetec.uba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiInstagram />
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXMlxDLvxwfPnGRjQwVTXWJrTMDkKnhvLdtPGzZVcWKDhLFsnVXNQHwdxMSbNjKPhLRJF"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Mail
        </a>
      </footer>
    </div>
  );
}
