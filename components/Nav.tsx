import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const pageLinks = [
  // { page: 'About', link: '/' },
  // { page: 'Blog', link: '/blog' },
  // { page: 'Contact', link: '/contact' },
];
const Nav = () => {
  return (
    <nav className="inline-flex text-center w-screen justify-end py-0 px-16 h-16">
      {pageLinks.map(({ page, link }) => (
        <li key={page} className="list-none py-3.5 px-16">
          <Link href={link}>
            <a>{page}</a>
          </Link>
        </li>
      ))}
    </nav>
  );
};

export default Nav;
