import { BlogPost } from '@/lib/data';
import Link from 'next/link';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48 bg-muted">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">
            Blog Post
          </span>
          <span className="text-sm text-muted-foreground">{post.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">By {post.author}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-primary hover:text-primary/80 font-semibold transition"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
