import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [activeLink, setActiveLink] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-transparent m-8">
      {/* Logo */}
      <div className="logo-container w-full lg:w-1/5 flex justify-center lg:justify-start">
        <Image
          src="/signature.avif"
          alt="Signature"
          width={138}
          height={31}
          style={{ width: "138px", height: "31px" }}
          priority={false}
        />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="lg:hidden">
        <button
          className="text-black focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <div className="hidden lg:flex space-x-10">
        <Link
          href="/"
          className={`text-sm-plus text-[#383B42] transition-colors ${
            activeLink === "/" ? "text-[#A0AC60]" : "hover:text-[#A0AC60]"
          }`}
          onClick={() => handleLinkClick("/")}
        >
          HOME
        </Link>
        <a
          href="#rsvp"
          className={`text-sm-plus text-[#383B42] transition-colors ${
            activeLink === "#rsvp" ? "text-[#A0AC60]" : "hover:text-[#A0AC60]"
          }`}
          onClick={() => handleLinkClick("#rsvp")}
        >
          RSVP
        </a>
        <Link
          href="/travel-guide"
          className={`text-sm-plus text-[#383B42] transition-colors ${
            activeLink === "/travel-guide"
              ? "text-[#A0AC60]"
              : "hover:text-[#A0AC60]"
          }`}
          onClick={() => handleLinkClick("/travel-guide")}
        >
          TRAVEL GUIDE
        </Link>
        <Link
          href="/gallery"
          className={`text-sm-plus text-[#383B42] transition-colors ${
            activeLink === "/gallery"
              ? "text-[#A0AC60]"
              : "hover:text-[#A0AC60]"
          }`}
          onClick={() => handleLinkClick("/gallery")}
        >
          GALLERY
        </Link>
        <a
          href="#our-story"
          className={`text-sm-plus text-[#383B42] transition-colors ${
            activeLink === "#our-story"
              ? "text-[#A0AC60]"
              : "hover:text-[#A0AC60]"
          }`}
          onClick={() => handleLinkClick("#our-story")}
        >
          OUR STORY
        </a>
        <a
          href="#resgistry"
          className={`text-sm-plus text-[#383B42] transition-colors ${
            activeLink === "#registry"
              ? "text-[#A0AC60]"
              : "hover:text-[#A0AC60]"
          }`}
          onClick={() => handleLinkClick("#registry")}
        >
          REGISTRY
        </a>
        <a
          href="#qnas"
          className={`text-sm-plus text-[#383B42] transition-colors ${
            activeLink === "#qnas" ? "text-[#A0AC60]" : "hover:text-[#A0AC60]"
          }`}
          onClick={() => handleLinkClick("#qnas")}
        >
          Q&AS
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white transition-transform transform duration-300 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } lg:hidden z-10`}
      >
        <ul className="flex flex-col items-center space-y-6 py-8">
          <li>
            <Link
              href="/"
              className={`text-sm-plus ${
                activeLink === "/" ? "text-[#A0AC60]" : "text-[#383B42]"
              } hover:text-[#A0AC60]`}
              onClick={() => handleLinkClick("/")}
            >
              HOME
            </Link>
          </li>
          <li>
            <a
              href="#rsvp"
              className={`text-sm-plus ${
                activeLink === "#rsvp" ? "text-[#A0AC60]" : "text-[#383B42]"
              } hover:text-[#A0AC60]`}
              onClick={() => handleLinkClick("#rsvp")}
            >
              RSVP
            </a>
          </li>
          <li>
            <Link
              href="/travel-guide"
              className={`text-sm-plus ${
                activeLink === "/travel-guide"
                  ? "text-[#A0AC60]"
                  : "text-[#383B42]"
              } hover:text-[#A0AC60]`}
              onClick={() => handleLinkClick("/travel-guide")}
            >
              TRAVEL GUIDE
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={`text-sm-plus ${
                activeLink === "/gallery" ? "text-[#A0AC60]" : "text-[#383B42]"
              } hover:text-[#A0AC60]`}
              onClick={() => handleLinkClick("/gallery")}
            >
              GALLERY
            </Link>
          </li>
          <li>
            <a
              href="#our-story"
              className={`text-sm-plus ${
                activeLink === "#our-story"
                  ? "text-[#A0AC60]"
                  : "text-[#383B42]"
              } hover:text-[#A0AC60]`}
              onClick={() => handleLinkClick("#our-story")}
            >
              OUR STORY
            </a>
          </li>
          <li>
            <a
              href="#registry"
              className={`text-sm-plus text-[#383B42] transition-colors ${
                activeLink === "#registry"
                  ? "text-[#A0AC60]"
                  : "hover:text-[#A0AC60]"
              }`}
              onClick={() => handleLinkClick("#registry")}
            >
              REGISTRY
            </a>
          </li>
          <li>
            <a
              href="#qnas"
              className={`text-sm-plus text-[#383B42] transition-colors ${
                activeLink === "#qnas"
                  ? "text-[#A0AC60]"
                  : "hover:text-[#A0AC60]"
              }`}
              onClick={() => handleLinkClick("#qnas")}
            >
              Q&AS
            </a>
          </li>
          <button
            className="text-[#383B42] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
