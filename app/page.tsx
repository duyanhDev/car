import { ProductCard } from '@/components/ProductCard';
import { BlogCard } from '@/components/BlogCard';
import { NewsCard } from '@/components/NewsCard';
import { products, blogPosts, news } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-pretty">
              Welcome to ShopHub
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Discover premium products, read insightful blogs, and stay updated with the latest news
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/products"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                Shop Now
              </Link>
              <Link
                href="/blog"
                className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition font-semibold"
              >
                Read Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">
              Check out our most popular items
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold inline-block"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
            <p className="text-muted-foreground text-lg">
              Insights and tips from our expert writers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest News</h2>
            <p className="text-muted-foreground text-lg">
              Stay informed with our latest updates
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.slice(0, 4).map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Explore our complete collection of premium products and find everything you need
          </p>
          <Link
            href="/products"
            className="px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition font-semibold inline-block"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </main>
  );
}
