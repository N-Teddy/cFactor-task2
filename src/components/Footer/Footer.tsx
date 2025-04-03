import Button from "../Button/Button";

const Footer = () => {
    return (
        <footer className="bg-[#2d314d] py-12 px-[130px]">
            <div className="container mx-auto px-5 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    {/* Logo and Social Icons */}
                    <div className="flex flex-col items-center md:items-start space-y-8 md:col-span-3">
                        <img src="/images/logo.svg" alt="Easybank" className="h-6" />
                        <div className="flex space-x-4">
                            {['facebook', 'youtube', 'twitter', 'pinterest', 'instagram'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="group"
                                >
                                    <img
                                        src={`/images/icon-${social}.svg`}
                                        alt={social}
                                        className="h-6 hover:text-[#33D35E] transition-all duration-300"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-center md:text-left">
                        <div className="space-y-3">
                            <a href="#" className="footer-link ">About Us</a>
                            <a href="#" className="footer-link">Contact</a>
                            <a href="#" className="footer-link">Blog</a>
                        </div>
                        <div className="space-y-3">
                            <a href="#" className="footer-link">Careers</a>
                            <a href="#" className="footer-link">Support</a>
                            <a href="#" className="footer-link">Privacy Policy</a>
                        </div>
                    </div>

                    {/* CTA and Copyright */}
                    <div className="flex flex-col items-center md:items-end md:col-span-4 space-y-6">
                        <Button text="Request Invite" className="" />
                        <p className=" text-white text-sm">© Easybank. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
