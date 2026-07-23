import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/data';

// Force dynamic rendering (Server-Side Rendering)
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Products - ShopHub',
  description: 'Browse our collection of premium products',
};

export default function ProductsPage() {
  // Simulating a database fetch or API call
  console.log('[Server] Products page rendered with SSR at:', new Date().toISOString());

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground">
            Server-Side Rendering (SSR) - Page rendered fresh on every request
          </p>
          <div className="mt-4 p-4 bg-accent/10 border border-accent rounded">
            <p className="text-sm text-muted-foreground">
              ⚡ <strong>Rendering Method:</strong> Dynamic Server Rendering (no-store)
            </p>
            <p className="text-sm text-muted-foreground">
              📍 <strong>Rendered at:</strong> {new Date().toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">
              💡 <strong>Benefits:</strong> Always fresh data, real-time updates, SEO friendly
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About SSR Rendering</h2>
          <p className="text-muted-foreground mb-4">
            This page uses Server-Side Rendering (SSR). The page is rendered fresh on every
            request, ensuring you always see the most current product data. This is useful for
            data that changes frequently or when you need real-time information.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Data is fetched on every page request</li>
            <li>Always shows the latest information</li>
            <li>Great for personalized content</li>
            <li>Good SEO performance</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
