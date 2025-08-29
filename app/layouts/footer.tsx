import { useState } from "react";
import Logo from "~/components/logo";
import { contactInfo, footerItems } from "~/utils/constants/layout";
import { socialItems } from "./header";
import { Locate, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a1118] text-white">
      {/* Top Bar */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo */}
            <Logo />

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {footerItems.map((item) => (
                <a
                  href={item.to}
                  key={item.name}
                  className="link !text-white hover:!text-[var(--template-color)]"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {["f", "v", "t", "in"].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <span className="text-white text-sm font-semibold">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Về Chúng Tôi</h3>
            <p className="text-gray-300 leading-relaxed">
              Chúng tôi tin rằng chúng tôi có thể làm điều tuyệt vời cùng nhau.
            </p>
            <div className="text-yellow-400 font-semibold">
              {contactInfo.email}
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-bold mb-2">Giờ Mở Cửa</h4>
              <p className="text-gray-300">9.30am - 6.30pm</p>
              <p className="text-gray-300">Thứ Hai Đến Thứ Sáu</p>
            </div>
          </div>

          {/* Latest Post Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Bài Viết</h3>
            <div className="space-y-4">
              {/* Post 1 */}
              <div className="flex space-x-3">
                <div className="w-16 h-16 rounded-full bg-gray-600 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">📅</span>
                    </div>
                    <span className="text-gray-300 text-sm">24th May 2023</span>
                  </div>
                  <h4 className="text-sm font-medium">
                    This Place Really Place For Awesome
                  </h4>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-4">
                {/* Post 2 */}
                <div className="flex space-x-3">
                  <div className="w-16 h-16 rounded-full bg-gray-600 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">📅</span>
                      </div>
                      <span className="text-gray-300 text-sm">
                        24th May 2023
                      </span>
                    </div>
                    <h4 className="text-sm font-medium">
                      This Place Really Place For Awesome
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get In Touch Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Liên Hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className=" mt-1">
                  <MapPin className="size-6 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold">Địa Chỉ</p>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className=" mt-1">
                  <Phone className="size-6 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300 text-sm">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className=" mt-1">
                  <Mail className="size-6 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300 text-sm">{contactInfo.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Đăng Ký nhận tin</h3>
            <p className="text-gray-300 leading-relaxed">
              Đừng bỏ lỡ những thông tin du học hữu ích cập nhật liên tục trên{" "}
              {contactInfo.title}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <span className="text-white text-sm">✈️</span>
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="agree-terms"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="w-4 h-4 text-green-400 bg-gray-700 border-gray-600 rounded focus:ring-green-400 focus:ring-2"
                />
                <label htmlFor="agree-terms" className="text-sm text-gray-300">
                  I Agree All Your{" "}
                  <a href="#" className="text-green-400 hover:underline">
                    Terms & Policies
                  </a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              Copyright © 2025 Charifund. All Rights Reserved.
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-green-400 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <span className="text-white text-lg">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
