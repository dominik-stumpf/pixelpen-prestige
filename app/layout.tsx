import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'pixelpen-prestige',
  description: '',
  applicationName: 'pixelpen-prestige',
  // manifest: '/manifest.webmanifest',
  robots: {
    follow: true,
    index: true,
  },
  // icons: { icon: '/favicon.svg', apple: '/assets/icons/icon-128x128.png' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn([
          'font-sans antialiased min-h-full bg-background text-foreground selection:bg-foreground selection:text-background accent-primary',
          // GeistSans.variable,
          // GeistMono.variable,
        ])}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}