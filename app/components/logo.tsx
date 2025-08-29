import { contactInfo } from "~/utils/constants/layout";

export default function Logo() {
  return (
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
  );
}
