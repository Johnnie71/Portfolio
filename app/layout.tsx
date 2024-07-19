import type { Metadata } from 'next';
import { Kode_Mono } from 'next/font/google';
import ThemeProvider from '@/app/components/Theme/ThemeProvider'
import "./globals.css";

const kodeMono = Kode_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kode-mono',
  adjustFontFallback: false,
  preload: false
})

export const metadata: Metadata = {
  title: "Johnnie G Portfolio",
  description: "Welcome to my portfolio site powered by Next.js! Discover my journey as a passionate software engineer with a background in architecture. Explore projects where I leverage my skills in JavaScript/TypeScript, Python, and modern web technologies like React and Next.js to create impactful solutions. From enhancing user experiences to tackling complex technical challenges, I aim to innovate and contribute to meaningful projects. Let's connect and explore how we can collaborate on the future of technology!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kodeMono.variable} bg-bkg antialiased`}>
      <body>
        <ThemeProvider>
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}