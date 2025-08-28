import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Header from "./layouts/header";
import { generateMeta } from "./utils/heldper/generate-meta";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {generateMeta({
          title: "Học Bổng Trung Quốc 2024 - Đăng Ký & Hướng Dẫn Chi Tiết",
          description:
            "Thông tin học bổng Trung Quốc 2024, hướng dẫn đăng ký học bổng CSC, học bổng chính phủ Trung Quốc, học bổng đại học Bắc Kinh, Thanh Hoa. Tư vấn du học Trung Quốc miễn phí.",
          keywords:
            "học bổng Trung Quốc, học bổng CSC, du học Trung Quốc, học bổng chính phủ Trung Quốc, học bổng đại học Bắc Kinh, học bổng đại học Thanh Hoa, đăng ký học bổng Trung Quốc, tư vấn du học Trung Quốc, học bổng thạc sĩ Trung Quốc, học bổng tiến sĩ Trung Quốc",
          imageUrl: "/bg.webp",
        })}
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
