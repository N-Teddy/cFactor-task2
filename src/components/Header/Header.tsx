import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../Button/Button';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { theme } = useTheme()


    // Handle scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header
            style={{
                backgroundColor: theme === "dark" ? "#2d314d" : "#fff",
                color: theme === "dark" ? "#fff" : "#6a7282"
            }}
            className={`fixed top-0 w-full z-50 ${isScrolled ? 'shadow-md' : ''}`}
        >
            {/* Container with responsive padding */}
            <div className="mx-auto w-full max-w-[1920px] px-[8%] 2xl:px-[130px]">
                <nav className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo - Won't shrink */}
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            src="/images/logo.svg"
                            alt="Easybank"
                            className="h-5 w-auto"
                        />
                    </div>

                    {/* Desktop Menu - Centered with auto margins */}
                    <div className="hidden md:flex h-full ml-10 mr-auto">
                        {['Home', 'About', 'Contact', 'Blog', 'Careers'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="nav-link relative h-full flex items-center px-4  whitespace-nowrap"
                            >
                                <span>{item}</span>
                            </a>
                        ))}
                    </div>

                    {/* Right side elements */}
                    <div className="flex items-center gap-4 md:gap-6">
                        <ThemeToggle />

                        {/* Button - Won't shrink */}
                        <div className="flex-shrink-0 hidden md:block">
                            <Button text='Request Invite' className="" />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 transparent-bg z-40 md:hidden pt-20" onClick={() => setIsMenuOpen(false)}>
                    <div
                        className="bg-white shadow-lg py-8 mx-[8%] rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col space-y-6 text-center">
                            {['Home', 'About', 'Contact', 'Blog', 'Careers'].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-gray-500 hover:text-[#33D35E] transition-colors px-4 py-2 text-lg"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <div className="flex justify-center mt-6">
                            <Button text='Request Invite' className="" />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;