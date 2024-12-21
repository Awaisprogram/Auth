'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center items-center my-10">
      <ul className="flex space-x-10 rounded-lg p-2">
        {[
          { href: '/isr', label: 'ISR' },
          { href: '/ssg', label: 'SSG' },
          { href: '/ssr', label: 'SSR' },
        ].map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`px-4 py-2 rounded-md text-xl font-semibold transition ease-in duration-300 focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                pathname === link.href
                  ? 'text-green-900 bg-blue-100'
                  : 'text-blue-900 hover:text-green-900'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
