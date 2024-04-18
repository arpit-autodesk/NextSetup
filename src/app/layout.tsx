import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
function TopNav(){
  return (
    <nav className="flex w-full items-center justify-between font-semibold text-xl p-4">
      <div>
        Gallery
      </div>
      <div>Login</div>
    </nav>
  )
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TopNav/>
        {children}
        </body>
    </html>
  );
}
