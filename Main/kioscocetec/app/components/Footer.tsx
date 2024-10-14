import { CiInstagram } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-8 flex-wrap items-center justify-center text-2xl p-4 bg-[#be5600]">
      <p className="font-bold">𝘾𝙀𝙏𝙀𝘾</p>
      <a
        className="flex items-center gap-3 hover:underline hover:underline-offset-4"
        href="https://www.instagram.com/cetec.uba/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiInstagram className="text-3xl" />
        Instagram
      </a>
      <a
        className="flex items-center gap-3 hover:underline hover:underline-offset-4"
        href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXMlxDLvxwfPnGRjQwVTXWJrTMDkKnhvLdtPGzZVcWKDhLFsnVXNQHwdxMSbNjKPhLRJF"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoIosMail className="text-3xl" />
        Mail
      </a>
    </footer>
  );
};

export default Footer;
