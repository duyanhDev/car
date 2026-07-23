import Link from 'next/link';

export const metadata = {
  title: 'Rendering Methods Comparison - ShopHub',
  description: 'Compare SSG, SSR, and CSR rendering methods',
};

const renderingMethods = [
  {
    name: 'Static Site Generation (SSG)',
    page: '/blog',
    icon: '⚡',
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/30',
    characteristics: [
      { label: 'Build Time', value: 'One-time build' },
      { label: 'Server Load', value: 'Minimal' },
      { label: 'Performance', value: 'Fastest' },
      { label: 'Data Freshness', value: 'Hour-based ISR' },
      { label: 'Interactivity', value: 'Limited' },
      { label: 'Best For', value: 'Static content, blogs' },
    ],
    pros: [
      'Extremely fast page loads',
      'Minimal server resources',
      'Great SEO performance',
      'CDN-friendly',
      'Cost-effective',
    ],
    cons: [
      'Requires rebuild for updates',
      'Not suitable for real-time data',
      'Build time can be long',
      'Limited personalization',
    ],
  },
  {
    name: 'Server-Side Rendering (SSR)',
    page: '/products',
    icon: '🖥️',
    color: 'from-green-500/20 to-green-600/20',
    borderColor: 'border-green-500/30',
    characteristics: [
      { label: 'Per Request', value: 'Fresh render' },
      { label: 'Server Load', value: 'High' },
      { label: 'Performance', value: 'Good' },
      { label: 'Data Freshness', value: 'Always fresh' },
      { label: 'Interactivity', value: 'Good' },
      { label: 'Best For', value: 'Dynamic content' },
    ],
    pros: [
      'Always shows latest data',
      'Good SEO performance',
      'Suitable for personalized content',
      'Real-time data updates',
      'No JavaScript required for content',
    ],
    cons: [
      'Slower than SSG',
      'Higher server load',
      'More resource intensive',
      'Requires server capacity',
    ],
  },
  {
    name: 'Client-Side Rendering (CSR)',
    page: '/news',
    icon: '💻',
    color: 'from-purple-500/20 to-purple-600/20',
    borderColor: 'border-purple-500/30',
    characteristics: [
      { label: 'Rendered In', value: 'Browser' },
      { label: 'Server Load', value: 'Minimal' },
      { label: 'Performance', value: 'Variable' },
      { label: 'Data Freshness', value: 'Can be real-time' },
      { label: 'Interactivity', value: 'Excellent' },
      { label: 'Best For', value: 'Interactive apps' },
    ],
    pros: [
      'Highly interactive UX',
      'Minimal server resources',
      'Real-time updates possible',
      'Great for SPAs',
      'Smooth user interactions',
    ],
    cons: [
      'Slower initial page load',
      'Requires JavaScript',
      'SEO challenges',
      'Not ideal for static content',
    ],
  },
];

export default function ComparisonPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Rendering Methods Comparison</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn the differences between SSG, SSR, and CSR rendering approaches
          </p>
        </div>

        {/* Rendering Methods Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {renderingMethods.map((method) => (
            <div
              key={method.name}
              className={`bg-gradient-to-br ${method.color} border-2 ${method.borderColor} rounded-lg p-6 hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-3xl mb-2 block">{method.icon}</span>
                  <h3 className="text-2xl font-bold">{method.name}</h3>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {method.characteristics.map((char, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="font-semibold text-foreground">{char.label}:</span>
                    <span className="text-muted-foreground ml-2">{char.value}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-3 text-sm">Pros:</h4>
                <ul className="space-y-1 mb-4">
                  {method.pros.map((pro, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 pb-6 border-b border-border">
                <h4 className="font-semibold mb-3 text-sm">Cons:</h4>
                <ul className="space-y-1">
                  {method.cons.map((con, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2">✗</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={method.page}
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition text-center font-semibold block"
              >
                See Example
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Detailed Comparison Table</h2>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-muted border-b border-border">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold">SSG</th>
                  <th className="px-6 py-4 text-left font-semibold">SSR</th>
                  <th className="px-6 py-4 text-left font-semibold">CSR</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="px-6 py-4 font-semibold">Time to First Byte</td>
                  <td className="px-6 py-4">Very Fast</td>
                  <td className="px-6 py-4">Medium</td>
                  <td className="px-6 py-4">Fast (HTML only)</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="px-6 py-4 font-semibold">SEO Friendliness</td>
                  <td className="px-6 py-4">Excellent</td>
                  <td className="px-6 py-4">Good</td>
                  <td className="px-6 py-4">Challenging</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="px-6 py-4 font-semibold">Server Load</td>
                  <td className="px-6 py-4">Low</td>
                  <td className="px-6 py-4">High</td>
                  <td className="px-6 py-4">Low</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="px-6 py-4 font-semibold">Data Freshness</td>
                  <td className="px-6 py-4">Limited</td>
                  <td className="px-6 py-4">Real-time</td>
                  <td className="px-6 py-4">Real-time</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="px-6 py-4 font-semibold">User Interactivity</td>
                  <td className="px-6 py-4">Limited</td>
                  <td className="px-6 py-4">Good</td>
                  <td className="px-6 py-4">Excellent</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="px-6 py-4 font-semibold">JavaScript Required</td>
                  <td className="px-6 py-4">Optional</td>
                  <td className="px-6 py-4">No</td>
                  <td className="px-6 py-4">Yes</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="px-6 py-4 font-semibold">Best Use Cases</td>
                  <td className="px-6 py-4 text-sm">Blogs, Marketing Sites</td>
                  <td className="px-6 py-4 text-sm">E-commerce, News</td>
                  <td className="px-6 py-4 text-sm">Dashboards, Real-time Apps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* When to Use */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">⚡</span> Use SSG When
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Content changes infrequently</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Performance is critical</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Building blogs or documentation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You need excellent SEO</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">🖥️</span> Use SSR When
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Data changes frequently</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Personalization is needed</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Building e-commerce sites</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Real-time data is important</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">💻</span> Use CSR When
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Building interactive dashboards</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Heavy client-side interactivity</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Real-time collaborative tools</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Building single-page applications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
