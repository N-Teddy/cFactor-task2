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
                color: theme === "dark" ? "#fff" : "#6a7282 "
            }}
            className={`fixed top-0 px-[130px] left-0 right-0 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
            <div className="container mx-auto px-5 md:px-6">
                <nav className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex items-center">
                        <img src="/images/logo.svg" alt="Easybank" className="h-5" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex h-full">
                        {['Home', 'About', 'Contact', 'Blog', 'Careers'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="nav-link relative h-full flex items-center px-4 transition-colors duration-200"
                            >
                                <span>{item}</span>
                            </a>
                        ))}
                    </div>
                    <ThemeToggle />
                    <Button text='Request Invite' className='sm:hidden'/>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-gradient-to-b from-dark-blue/80 to-transparent z-40 md:hidden" onClick={() => setIsMenuOpen(false)}>
                    <div
                        className="absolute top-20 inset-x-5 bg-white rounded-lg shadow-lg py-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col space-y-6 text-center">
                            {['Home', 'About', 'Contact', 'Blog', 'Careers'].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-gray-500 hover:text-lime-green transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;