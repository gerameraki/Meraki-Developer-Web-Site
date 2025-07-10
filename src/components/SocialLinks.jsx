// src/components/SocialLinks.jsx
import { FaTiktok, FaFacebookF, FaYoutube, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      <a
        href="https://www.tiktok.com/@gera_meraki"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
      >
        <FaTiktok className="w-8 h-8" />
      </a>

      <a
        href="https://www.facebook.com/YoSoyGeraMeraki"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
      >
        <FaFacebookF className="w-8 h-8" />
      </a>

      <a
        href="https://www.youtube.com/@GeraMeraki"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-500 transition-colors duration-300"
      >
        <FaYoutube className="w-8 h-8" />
      </a>

      <a
        href="https://www.instagram.com/gera_meraki"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-300"
      >
        <FaInstagram className="w-8 h-8" />
      </a>

    <a
        href="https://x.com/gera_meraki"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className="text-gray-700 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
      >
        <FaXTwitter className="w-8 h-8" />
      </a>

    </div>
  );
}
