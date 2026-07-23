'use client';

import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            ShopHub
          </Link>
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-foreground hover:text-primary transition"
            >
              Products
            </Link>
            <Link
              href="/blog"
              className="text-foreground hover:text-primary transition"
            >
              Blog
            </Link>
            <Link
              href="/news"
              className="text-foreground hover:text-primary transition"
            >
              News
            </Link>
            <Link
              href="/comparison"
              className="text-foreground hover:text-primary transition"
            >
              Rendering
            </Link >
            <Link
              href="/cart"
              className="
    relative
    text-foreground
    hover:text-primary
    transition
    before:content-['0']
    before:absolute
    before:-top-2
    before:-right-2
    before:flex
    before:h-5
    before:w-5
    before:items-center
    before:justify-center
    before:rounded-full
    before:bg-red-500
    before:text-xs
    before:text-white
  "
            >
              Cart
            </Link>
          </div>
          <div className="md:hidden flex gap-4">
            <Link href="/" className="text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary">
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
