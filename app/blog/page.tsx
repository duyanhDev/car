import { BlogCard } from '@/components/BlogCard';
import { blogPosts } from '@/lib/data';

// Static Site Generation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export const metadata = {
  title: 'Blog - ShopHub',
  description: 'Read our latest blog posts and insights',
};

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPage() {
  // This is rendered at build time
  console.log('[Build Time] Blog page generated at build time');

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-muted-foreground">
            Static Site Generation (SSG) - Page generated at build time
          </p>
          <div className="mt-4 p-4 bg-accent/10 border border-accent rounded">
            <p className="text-sm text-muted-foreground">
              ⚡ <strong>Rendering Method:</strong> Static Site Generation with ISR (Incremental Static Regeneration)
            </p>
            <p className="text-sm text-muted-foreground">
              📍 <strong>Cache Strategy:</strong> force-cache (revalidates every hour)
            </p>
            <p className="text-sm text-muted-foreground">
              💡 <strong>Benefits:</strong> Ultra-fast performance, minimal server load, great for SEO
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About SSG Rendering</h2>
          <p className="text-muted-foreground mb-4">
            This page uses Static Site Generation (SSG). It's pre-rendered at build time and
            served to all users instantly. This approach is perfect for content that doesn't change
            frequently, offering excellent performance.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Generated once at build time</li>
            <li>Extremely fast page loads</li>
            <li>Minimal server resources needed</li>
            <li>Excellent SEO performance</li>
            <li>Can use ISR for periodic updates</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
