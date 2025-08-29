import Home from "~/pages/home";
import type { Route } from "./+types/home";
import { contactInfo } from "~/utils/constants/layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: contactInfo.title },
    { name: "description", content: contactInfo.subtitle },
    {
      name: "keywords",
      content: "du học trung quốc, china trung học, du học trung học",
    },
  ];
}

export default function HomePage() {
  return <Home />;
}
