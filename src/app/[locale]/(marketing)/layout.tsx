import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex gap-6">
              <Link href="/" className="text-gray-900 hover:text-gray-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-gray-600">
                About
              </Link>
              <Link href="/portfolio" className="text-gray-900 hover:text-gray-600">
                Portfolio
              </Link>
            </div>
            <LocaleSwitcher />
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">
        {props.children}
      </main>
      <footer className="border-t border-gray-200 mt-auto">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>
    </div>
  );
}
