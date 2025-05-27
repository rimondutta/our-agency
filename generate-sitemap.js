import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

// Update this to your actual domain
const hostname = 'https://quirktix.com';

// Define your routes manually (based on your <Route> list)
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/ecommerce-seo', changefreq: 'monthly', priority: 0.7 },
  { url: '/local-seo', changefreq: 'monthly', priority: 0.7 },
  { url: '/performance-marketing', changefreq: 'monthly', priority: 0.7 },
  { url: '/social-media-marketing', changefreq: 'monthly', priority: 0.7 },
  { url: '/influencer-marketing', changefreq: 'monthly', priority: 0.7 },
  { url: '/ecommerce-marketing', changefreq: 'monthly', priority: 0.7 },
  { url: '/shopify-development', changefreq: 'monthly', priority: 0.7 },
  { url: '/woocommerce-development', changefreq: 'monthly', priority: 0.7 },
  { url: '/web-application-development', changefreq: 'monthly', priority: 0.7 },
  { url: '/wordpress-development', changefreq: 'monthly', priority: 0.7 },
  { url: '/mobile-application-development', changefreq: 'monthly', priority: 0.7 },
  { url: '/application-development', changefreq: 'monthly', priority: 0.7 },
  { url: '/artificial-intelligence', changefreq: 'monthly', priority: 0.7 },
  { url: '/dropshipping', changefreq: 'monthly', priority: 0.7 },
  { url: '/portfolio', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact-us', changefreq: 'monthly', priority: 0.7 },
  { url: '/terms-conditions', changefreq: 'yearly', priority: 0.5 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
  { url: '/careers', changefreq: 'monthly', priority: 0.7 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.7 },
  { url: '/marketing', changefreq: 'monthly', priority: 0.7 },
  { url: '/development', changefreq: 'monthly', priority: 0.7 },
  { url: '/services', changefreq: 'monthly', priority: 0.7 },
  { url: '/our-team', changefreq: 'monthly', priority: 0.7 },
  { url: '/case-study/gourmetkitchenworks', changefreq: 'monthly', priority: 0.7 },
  { url: '/case-study/alamocitypopcorn', changefreq: 'monthly', priority: 0.7 },
  { url: '/case-study/rehisk', changefreq: 'monthly', priority: 0.7 },
  { url: '/case-study/eyecandybrownsalon', changefreq: 'monthly', priority: 0.7 },
  { url: '/case-study/dripnation', changefreq: 'monthly', priority: 0.7 },
  { url: '/case-study/laddersafetyrails', changefreq: 'monthly', priority: 0.7 },
  { url: '/faqs', changefreq: 'monthly', priority: 0.6 }
  // Exclude the wildcard route (*), since it's typically a 404
];

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname });
  const writeStream = createWriteStream('./dist/sitemap.xml');

  sitemapStream.pipe(writeStream);

  pages.forEach((page) => sitemapStream.write(page));
  sitemapStream.end();

  await streamToPromise(sitemapStream);
  console.log('✅ sitemap.xml generated in /dist');
}

generateSitemap();
