'use client';

import { NewsCard } from '@/components/NewsCard';
import { news } from '@/lib/data';
import { useEffect, useState } from 'react';

export default function NewsPage() {
  const [mounted, setMounted] = useState(false);
  const [loadTime, setLoadTime] = useState<string>('');

  useEffect(() => {
    // Simulating client-side rendering
    setMounted(true);
    setLoadTime(new Date().toLocaleString());
    console.log('[Client] News page rendered at:', new Date().toLocaleString());
  }, []);

  if (!mounted) {
    return (
      <main className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Latest News</h1>
          <p className="text-xl text-muted-foreground">
            Client-Side Rendering (CSR) - Page rendered in the browser
          </p>
          <div className="mt-4 p-4 bg-accent/10 border border-accent rounded">
            <p className="text-sm text-muted-foreground">
              ⚡ <strong>Rendering Method:</strong> Client-Side Rendering (useClient component)
            </p>
            <p className="text-sm text-muted-foreground">
              📍 <strong>Rendered on:</strong> Browser (Client)
            </p>
            <p className="text-sm text-muted-foreground">
              💡 <strong>Loaded at:</strong> {loadTime}
            </p>
            <p className="text-sm text-muted-foreground">
              💡 <strong>Benefits:</strong> Interactive UI, real-time updates, smooth interactions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About CSR Rendering</h2>
          <p className="text-muted-foreground mb-4">
            This page uses Client-Side Rendering (CSR). The page is rendered in the user's browser
            using JavaScript. This approach is great for highly interactive applications where
            you need real-time updates and user interactions.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Rendered in the browser after JavaScript loads</li>
            <li>Enables rich interactivity and real-time updates</li>
            <li>Great for dynamic user interfaces</li>
            <li>Initial page load may be slower</li>
            <li>Requires JavaScript to be enabled</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
