import { profileLinks } from "@/data/profile-links";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

export function PrimaryContactInformation() {
  return (
    <div className="rounded-xl shadow- w-[350px] border">
      <div className="p-8">
        <div className="flex items-center justify-center mb-6">
          <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            MR
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center  dark:text-white text-gray-800 mb-6">
          Mahesh Rautrao
        </h2>

        {/* Primary Contact Information */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3 text-gray-600  dark:text-white hover:text-blue-500 transition-colors">
            <Mail className="h-5 w-5" />
            <a
              href="mailto:rautraomaheshofficial@gmail.com"
              className="text-sm"
            >
              rautraomaheshofficial@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3 text-gray-600  dark:text-white hover:text-blue-500 transition-colors">
            <Phone className="h-5 w-5" />
            <a href="tel:+918010616957" className="text-sm">
              +91 8010616957
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 text-center">
            Connect with me
          </h3>
          <div className="flex justify-center space-x-6">
            {profileLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 hover:text-blue-500 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
                title={link.title}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
