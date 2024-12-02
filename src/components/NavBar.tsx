import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <nav className="flex justify-between items-center px-8 py-6 bg-transparent m-8">
            {/* Logo */}
            <div className="flex justify-center items-center w-1/5">
                <Image
                    src="/signature.avif"
                    alt="Signature"
                    width={138}
                    height={31}
                    priority={false} 
                />
            </div>

            {/* Navbar Links */}
            <div className="flex space-x-10">
                <Link
                    href="/"
                    className={`text-sm-plus text-[#383B42] transition-colors ${
                        activeLink === '/' ? 'text-[#A0AC60]' : 'hover:text-[#A0AC60]'
                    }`}
                    onClick={() => handleLinkClick('/')}
                >
                    HOME
                </Link>
                <a
                    href="#rsvp"
                    className={`text-sm-plus text-[#383B42] transition-colors ${
                        activeLink === '#rsvp' ? 'text-[#A0AC60]' : 'hover:text-[#A0AC60]'
                    }`}
                    onClick={() => handleLinkClick('#rsvp')}
                >
                    RSVP
                </a>
                <Link
                    href="/travel-guide"
                    className={`text-sm-plus text-[#383B42] transition-colors ${
                        activeLink === '/travel-guide'
                            ? 'text-[#A0AC60]'
                            : 'hover:text-[#A0AC60]'
                    }`}
                    onClick={() => handleLinkClick('/travel-guide')}
                >
                    TRAVEL GUIDE
                </Link>
                <Link
                    href="/gallery"
                    className={`text-sm-plus text-[#383B42] transition-colors ${
                        activeLink === '/gallery' ? 'text-[#A0AC60]' : 'hover:text-[#A0AC60]'
                    }`}
                    onClick={() => handleLinkClick('/gallery')}
                >
                    GALLERY
                </Link>
                <a
                    href="#our-story"
                    className={`text-sm-plus text-[#383B42] transition-colors ${
                        activeLink === '#our-story' ? 'text-[#A0AC60]' : 'hover:text-[#A0AC60]'
                    }`}
                    onClick={() => handleLinkClick('#our-story')}
                >
                    OUR STORY
                </a>
                <a
                    href="#registry"
                    className={`text-sm-plus text-[#383B42] transition-colors ${
                        activeLink === '#registry' ? 'text-[#A0AC60]' : 'hover:text-[#A0AC60]'
                    }`}
                    onClick={() => handleLinkClick('#registry')}
                >
                    REGISTRY
                </a>
                <a
                    href="#qna"
                    className={`text-sm-plus text-[#383B42] transition-colors ${
                        activeLink === '#qna' ? 'text-[#A0AC60]' : 'hover:text-[#A0AC60]'
                    }`}
                    onClick={() => handleLinkClick('#qna')}
                >
                    Q&AS
                </a>
            </div>
        </nav>
    );
}

export default NavBar;