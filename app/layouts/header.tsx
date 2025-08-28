import {
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  ShoppingBag,
  Grid3X3,
  ArrowUpRight,
  Headphones,
  Facebook,
  Twitter,
  Instagram,
  Send,
  MailOpen,
  X,
  Menu,
  AlignRight,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

const contactInfo = {
  address: "127 Đông Hưng Thuận, Quận 12, Hồ Chí Minh, Việt Nam",
  email: "namph2102@gmail.com",
  phone: "0877 666 9990",
  title: "New life",
  subtitle: "Du học trong tầm tay",
};
const navItems = [
  {
    name: "Trang chủ",
    to: "/",
  },

  {
    name: "Chương trình học",
    to: "/about",
  },

  {
    name: "Lý do",
    to: "/causes",
  },
  {
    name: "FAQ",
    to: "/faq",
  },
  {
    name: "Về chúng tôi",
    to: "/team",
  },
  {
    name: "Tin tức",
    to: "/event",
  },
  {
    name: "Liên hệ",
    to: "/contact",
  },
];
function NavbarMobile() {
  return (
    <div className="nav">
      <input type="checkbox" id="menu" className="hidden" />
      <div className="nav-menu fixed inset-0 z-50 duration-300 ease-in-out translate-x-full">
        {/* Backdrop */}
        <label
          htmlFor="menu"
          className="fixed inset-0 bg-black/80 bg-opacity-50"
        />
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full w-2/3 bg-white shadow-xl">
          <div className="flex flex-col h-full p-6">
            {/* Top Section - Logo and Close Button */}
            <div className="flex items-center justify-between mb-8">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-teal-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 relative">
                    <img
                      src="/flag.png"
                      alt="logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-green-800">
                    {contactInfo.title}
                  </h1>
                  <p className="text-sm text-gray-500">
                    {contactInfo.subtitle}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button className="text-amber-700 hover:text-amber-800 transition-colors">
                <label htmlFor="menu" className=" cursor-pointer">
                  <X className="size-6" />
                </label>
              </button>
            </div>

            {/* Navigation List */}
            <nav className="flex-1 space-y-6">
              {navItems.map((item, index) => (
                <Link
                  to={item.to}
                  key={`${index}-${item.name}`}
                  className="block text-gray-800 hover:text-green-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Donate Now Button */}
            <div className="mb-8">
              <button className="w-full bg-yellow-400 text-gray-800 py-4 px-6 rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-2 font-medium">
                <span>Đăng ký tư vấn</span>
                <Headphones className="size-4" />
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4">
              <a
                className="text-white hover:bg-yellow-400 hover:text-green-950 transition-colors bg-green-700  flex justify-center items-center ease-in duration-300 rounded-full p-3"
                href="https://www.facebook.com/namhoai2102"
              >
                <Facebook className="size-5" />
              </a>
              <a
                className="text-white hover:bg-yellow-400 hover:text-green-950 transition-colors bg-green-700  flex justify-center items-center ease-in duration-300 rounded-full p-3"
                href="mailto:namhoai2102@gmail.com"
              >
                <Mail className="size-5" />
              </a>
              <a
                className="text-white hover:bg-yellow-400 hover:text-green-950 transition-colors bg-green-700  flex justify-center items-center ease-in duration-300 rounded-full p-3"
                href="tel:+84325024277"
              >
                <Phone className="size-5" />
              </a>
              <a
                className="text-white hover:bg-yellow-400 hover:text-green-950 transition-colors bg-green-700  flex justify-center items-center ease-in duration-300 rounded-full p-3"
                href="https://web.telegram.org/a/#5524663622"
              >
                <Send className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Header() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex md:justify-between justify-center items-center text-sm">
          {/* Left side - Contact Info */}
          <div className=" items-center space-x-6 md:flex hidden">
            <div className="flex items-center space-x-2 text-amber-700">
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="flex items-center space-x-2 text-amber-700">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </div>
          </div>

          {/* Right side - Phone & Social Media */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-amber-700">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="bg-yellow-400 px-3 py-1 rounded">
              <div className="flex items-center space-x-3 text-black">
                <a
                  className="hover:text-green-600 transition-colors"
                  href="https://www.facebook.com/namhoai2102"
                >
                  <Facebook className="size-5" />
                </a>
                <a
                  className="hover:text-green-600 transition-colors"
                  href="mailto:namhoai2102@gmail.com"
                >
                  <Mail className="size-5" />
                </a>
                <a
                  className="hover:text-green-600 transition-colors"
                  href="tel:+84325024277"
                >
                  <Phone className="size-5" />
                </a>
                <a
                  className="hover:text-green-600 transition-colors"
                  href="https://web.telegram.org/a/#5524663622"
                >
                  <Send className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-teal-500 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 relative">
                <img
                  src="/flag.png"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-800">
                {contactInfo.title}
              </h1>
              <p className="text-sm text-gray-500">{contactInfo.subtitle}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                to={item.to}
                key={`${item.name}-${index}`}
                className="text-gray-800 hover:text-green-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <NavbarMobile />

          {/* Right side - Language, Cart, Menu, Donate */}
          <div className="flex items-center space-x-6">
            {/* Donate Now Button */}
            <button className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
              <span>Đăng ký tư vấn</span>
              <Headphones className="size-4" />
            </button>
            <label htmlFor="menu" className="xl:hidden cursor-pointer">
              <AlignRight className="size-8" />
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
