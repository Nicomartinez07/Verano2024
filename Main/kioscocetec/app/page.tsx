import Image from "next/image";
import { CiInstagram } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <MainContent/>
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
          <IoIosMail />
          Mail
        </a>
      </footer>
    </div>
  );
}
