'use client';

import { NewsItem } from '@/lib/data';

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <article className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48 bg-muted">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-full">
            {item.category}
          </span>
          <span className="text-sm text-muted-foreground">{item.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{item.title}</h3>
        <p className="text-muted-foreground line-clamp-3">{item.content}</p>
      </div>
    </article>
  );
}
