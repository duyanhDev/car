import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - ShopHub Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-primary hover:text-primary/80 mb-8 inline-flex items-center gap-2"
        >
          ← Back to Blog
        </Link>

        <article>
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex justify-between items-center text-muted-foreground">
              <span>By {post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>

          <div className="relative w-full h-96 mb-8 bg-muted rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none mb-12">
            <div className="text-lg leading-relaxed text-muted-foreground mb-8">
              {post.excerpt}
            </div>

            <div className="text-lg leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-bold mb-2">About the Author</h3>
              <p className="text-muted-foreground">
                {post.author} is a dedicated writer passionate about sharing insights and
                knowledge with our readers. This article reflects their expertise and experience in
                the industry.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">More Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="p-4 border border-border rounded-lg hover:bg-muted/50 transition group"
                  >
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
