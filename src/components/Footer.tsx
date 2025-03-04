import { AiFillGithub } from "react-icons/ai";

const socialLinks = [
    { href: "https://github.com/Sahasawat-Boss", Icon: AiFillGithub, label: "GitHub" },
];

export const Footer = () => {
    return (
        <footer className="bg-white text-gray-900 py-10 px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                {/* Divider Line */}
                <div className="w-full border-t border-gray-300 mb-6"></div>

                {/* Footer Text */}
                <p className="text-lg font-semibold">© 2025 Boss&apos;s Org. All rights reserved.</p>

                {/* Social Icons */}
                <ul className="flex gap-6 mt-6">
                    {socialLinks.map(({ href, Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            aria-label={label}
                            className="text-gray-900 flex items-center justify-center w-12 h-12 rounded-full hover:text-sky-700 transition-transform transform hover:scale-125"
                        >
                            <Icon size={45} />
                        </a>
                    ))}
                </ul>
            </div>
        </footer>
    );
};
