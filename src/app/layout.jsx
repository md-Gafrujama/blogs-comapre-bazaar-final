// import './globals.css'; // your global CSS or Tailwind
// import Navbar from '@/components/Navbar';
// import Dropdown from '@/components/Dropdown';
// import WideDiv from '@/components/WideDiv';

// export const metadata = {
//   title: ' Blog-compare-bazaar',
//   description: 'A modern Next.js blog',
//   icon: '/favicon.ico',
 
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <Dropdown />
//         <main>{children}</main>
//         <WideDiv />
//       </body>
//     </html>
//   );
// }



import './globals.css';
import Navbar from '@/components/Navbar';
import Dropdown from '@/components/Dropdown';
import WideDiv from '@/components/WideDiv';

export const metadata = {
  title: {
    default: 'Compare-Bazaar Blog | Product Reviews, Comparisons & Best Deals',
    template: '%s | Compare-Bazaar Blog'
  },
  description: 'Discover the best products with Compare-Bazaar\'s expert reviews, detailed comparisons, buying guides, and exclusive deals. Save money with our comprehensive product analysis and recommendations across electronics, home & garden, fashion, and more.',
  keywords: [
    'product comparison',
    'product reviews',
    'best deals',
    'buying guide',
    'price comparison',
    'product recommendations',
    'compare products',
    'consumer reviews',
    'shopping guide',
    'discount deals',
    'electronics reviews',
    'home appliances',
    'compare bazaar',
    'product analysis',
    'best products 2025',
    'money saving tips',
    'online shopping',
    'product ratings',
    'gadget reviews',
    'tech comparisons'
  ].join(', '),
  authors: [{ name: 'Compare-Bazaar Team' }],
  creator: 'Compare-Bazaar',
  publisher: 'Compare-Bazaar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://blogs.compare-bazaar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Compare-Bazaar Blog | Product Reviews & Comparisons',
    description: 'Expert product reviews, comparisons, and buying guides to help you make informed purchasing decisions. Find the best deals and save money with Compare-Bazaar.',
    url: 'https://blogs.compare-bazaar.com',
    siteName: 'Compare-Bazaar Blog',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Compare-Bazaar - Product Reviews and Comparisons',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare-Bazaar Blog | Product Reviews & Comparisons',
    description: 'Expert product reviews, comparisons, and buying guides. Find the best deals and make informed purchasing decisions.',
    creator: '@comparebazaar', // Replace with your actual Twitter handle
    images: ['/twitter-image.jpg'], // Add your Twitter card image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    // bing: 'your-bing-verification-code', // Add Bing verification if needed
  },
  category: 'technology',
  classification: 'Product Reviews and Comparisons',
  referrer: 'origin-when-cross-origin',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes',
  },
};

// Structured Data for Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Compare-Bazaar',
  url: 'https://www.compare-bazaar.com',
  logo: 'https://www.compare-bazaar.com/logo.png',
  description: 'Expert product reviews, comparisons, and buying guides to help consumers make informed purchasing decisions.',
  sameAs: [
    'https://twitter.com/comparebazaar', // Replace with your actual social media URLs
    'https://facebook.com/comparebazaar',
    'https://linkedin.com/company/comparebazaar',
    'https://instagram.com/comparebazaar'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'contact@compare-bazaar.com' // Replace with your actual contact email
  }
};

// Structured Data for Website
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Compare-Bazaar Blog',
  url: 'https://blogs.compare-bazaar.com',
  description: 'Product reviews, comparisons, and buying guides',
  publisher: {
    '@type': 'Organization',
    name: 'Compare-Bazaar',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.compare-bazaar.com/logo.png'
    }
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://blogs.compare-bazaar.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="application-name" content="Compare-Bazaar Blog" />
        <meta name="apple-mobile-web-app-title" content="Compare-Bazaar" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preload Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for External Domains */}
        <link rel="dns-prefetch" href="//google-analytics.com" />
        <link rel="dns-prefetch" href="//googletagmanager.com" />
      </head>
      <body className="antialiased">
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white p-2 rounded">
          Skip to main content
        </a>
        
        <Navbar />
        <Dropdown />
        <main id="main-content" role="main">
          {children}
        </main>
        <WideDiv />
        
        {/* Google Analytics or other tracking scripts can go here */}
      </body>
    </html>
  );
}