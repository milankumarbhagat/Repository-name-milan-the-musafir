# Product Requirements Document (PRD)

## Milan The Musafir — Affiliate Product Catalogue Website

**Version:** 1.1  
**Status:** Active  
**Project:** Milan The Musafir  
**Domain:** https://milanthemusafir.com

---

## 1. Product Overview

Milan The Musafir is an affiliate product discovery website connected to the Milan The Musafir travel/road-trip content brand.

The website will showcase useful products related to travel, road trips, cars, creator gear, technology, outdoor activities, and everyday use.

The website is **not an e-commerce store**.

Users will discover a product on the website and then click an affiliate button to purchase it on an external retailer such as Amazon.

### Core principle

> The website is a product catalogue and discovery layer. The retailer remains the source of truth for price, stock, checkout, shipping, and purchase.

---

## 2. Reference Website

The primary functional reference is:

https://pukkiofficial.com/

The implementation should be **inspired by the reference site's product-discovery behavior**, not copied literally.

### Reference observations

- Product-focused homepage/catalogue
- Strong visual emphasis on product images
- Product cards displayed in a grid
- Mobile-friendly layout
- Product image followed by a retailer button
- Amazon is used as the external purchase destination
- No need for an internal shopping cart for our MVP
- No internal checkout/payment flow
- No need to display product prices on our website

### Important

Do not copy:
- Pukki branding
- Pukki logo
- Their text/content
- Their exact visual identity
- Their proprietary assets
- Their product imagery unless we have the right to use it

Build an original Milan The Musafir design with similar functional behavior.

---

# 3. Goals

## Primary Goals

1. Build a fast, responsive product catalogue.
2. Showcase products through attractive product images.
3. Send users directly to retailer pages through affiliate links.
4. Make the experience especially good on mobile.
5. Keep the architecture simple and maintainable.
6. Prepare the project for future traffic analytics.
7. Keep the site performant and SEO-friendly.

## Secondary Goals

- Support multiple product categories.
- Support Amazon initially.
- Keep the architecture ready for Flipkart later.
- Allow future automation/API integration.
- Allow future admin/catalogue management.

---

# 4. Non-Goals for MVP

The following are intentionally NOT part of the initial MVP:

- Shopping cart
- Checkout
- Payment processing
- Inventory management
- Order management
- User accounts
- Wishlist
- Product reviews
- Internal price tracking
- Internal stock tracking
- Admin dashboard
- Database
- Automated retailer synchronization
- Custom raw IP/device fingerprint database
- Advanced analytics

These may be considered in future phases.

---

# 5. Technology Stack

## Frontend

- Next.js
- TypeScript
- React
- App Router
- Tailwind CSS

## Hosting

- Vercel

## Domain / DNS

- Cloudflare Registrar
- Cloudflare DNS

## Repository

- GitHub

## Image Infrastructure

Preferred long-term architecture:

- Cloudflare R2
- Custom image domain, e.g. `images.milanthemusafir.com`
- Cloudflare CDN/cache
- Next.js `next/image`

For early development, local images under `public/` are acceptable.

---

# 6. Current Project Status

Completed:

- Domain purchased and configured.
- Cloudflare DNS configured.
- GitHub repository created.
- Next.js project created.
- Project deployed to Vercel.
- Vercel deployment working.
- `https://milanthemusafir.com` working over HTTPS.
- `www.milanthemusafir.com` configured and redirects to the root domain.
- Initial Hello World page tested successfully.

## Current priority

Replace the starter Hello World page with the **product catalogue foundation**.

---

# 7. Product Catalogue MVP

The first real feature to build is the product catalogue.

## Required components

### Header

The site should have a clean Milan The Musafir branded header.

Initial requirements:

- Brand/logo/name
- Responsive layout
- Mobile-friendly
- Simple navigation
- Avoid unnecessary complexity

Possible navigation:

- Home
- Categories
- About

The navigation can evolve later.

---

# 8. Product Data Model

Initially use static TypeScript data.

Example:

```ts
export type Product = {
  id: string;
  name: string;
  slug: string;
  image: string;
  category: string;
  amazonUrl: string;
  flipkartUrl?: string;
  featured?: boolean;
};
```

Example:

```ts
export const products: Product[] = [
  {
    id: "otsogx",
    name: "Example Travel Product",
    slug: "example-travel-product",
    image: "/products/example.jpg",
    category: "Travel Essentials",
    amazonUrl: "https://example.com/affiliate-link",
    featured: true,
  },
];
```

Do not add unnecessary database complexity at this stage.

---

# 9. Product Card

Create a reusable component:

```text
ProductCard
```

The card should contain:

1. Product image
2. Product name
3. Optional category information
4. Amazon button

### Price

Do NOT display product price in the MVP.

Reason:

Amazon is the source of truth for current price and availability.

### Stock

Do NOT display stock information.

### Button

The Amazon button should be visually prominent and clearly indicate that the user is leaving our website.

Example:

```text
[ View on Amazon ]
```

The exact text can be refined during implementation.

---

# 10. Product Grid

Create a reusable responsive product grid.

### Mobile

Target:

```text
┌─────────────┬─────────────┐
│   PRODUCT   │   PRODUCT   │
│    IMAGE    │    IMAGE    │
│             │             │
│   Amazon    │   Amazon    │
├─────────────┼─────────────┤
│   PRODUCT   │   PRODUCT   │
│    IMAGE    │    IMAGE    │
│             │             │
│   Amazon    │   Amazon    │
└─────────────┴─────────────┘
```

The initial mobile layout should use **2 columns**.

### Desktop

Use a responsive multi-column grid, for example:

- 3 columns on smaller desktop/tablet widths
- 4 columns on larger desktop widths

The exact breakpoints can be chosen according to the final design.

---

# 11. Product Image Requirements

Product images are a major part of the site's visual experience.

Requirements:

- Consistent card dimensions
- Consistent image aspect ratio
- Avoid layout shifts
- Good image quality
- Responsive sizing
- Lazy loading where appropriate
- Optimized formats where possible

Use:

```tsx
next/image
```

where appropriate.

---

# 12. Image Storage Strategy

## Development

Initially:

```text
/public/products/
```

Example:

```text
public/
└── products/
    ├── product-001.webp
    ├── product-002.webp
    └── product-003.webp
```

## Production

Preferred:

```text
Cloudflare R2
       ↓
Cloudflare CDN
       ↓
images.milanthemusafir.com
       ↓
Next.js next/image
```

Do not use `r2.dev` as the intended production image domain.

### Important

Only use product imagery that we are authorized to use.

Do not blindly download or hotlink Amazon images.

If product imagery is obtained through an affiliate program/API, follow the applicable program's image usage rules.

---

# 13. Categories

Initial categories may include:

- Car & Road Trip
- Travel Essentials
- Creator Gear
- Tech & Gadgets
- Outdoor / Adventure
- Useful Everyday Products

Categories can be expanded later.

---

# 14. Catalogue Pages

## Homepage

The homepage should eventually contain:

- Brand introduction
- Featured products
- Product grid
- Category navigation
- Clear affiliate/product-discovery purpose

For the first implementation, keep the homepage simple and focus on the product grid.

## Products Page

Potential route:

```text
/products
```

Shows the complete catalogue.

## Category Pages

Potential route:

```text
/products/[category]
```

Examples:

```text
/products/car-road-trip
/products/travel-essentials
/products/creator-gear
```

These can be implemented after the base catalogue works.

---

# 15. Optional Product Detail Page

A product detail page may be introduced later:

```text
/product/[slug]
```

This is NOT required for the first MVP.

The initial product card can link directly to the retailer.

---

# 16. Affiliate Link Behavior

The website should not process purchases.

Flow:

```text
User
  ↓
Milan The Musafir website
  ↓
Product card
  ↓
Amazon button
  ↓
Affiliate URL
  ↓
Amazon
  ↓
Purchase / checkout handled by Amazon
```

The website should not:

- process payment
- collect card details
- manage orders
- claim to sell the product
- maintain inventory

---

# 17. Future Retailer Support

Amazon is the initial retailer.

The architecture should allow future support for:

- Amazon
- Flipkart
- Other legitimate affiliate retailers

The product model can therefore contain:

```ts
amazonUrl?: string;
flipkartUrl?: string;
```

Later this can evolve into a more generic retailer-link structure if required.

---

# 18. Performance Requirements

Performance is important because the site is image-heavy.

Target principles:

- Fast initial page load
- Optimized images
- Responsive image sizes
- Avoid unnecessarily large JavaScript bundles
- Avoid layout shift
- Use server components where appropriate
- Use client components only when required
- Use caching appropriately
- Keep product data lightweight
- Avoid unnecessary third-party scripts

Future analytics should not compromise page performance.

---

# 19. SEO

The website should be structured for search engines.

Initial requirements:

- Proper page titles
- Meta descriptions
- Semantic HTML
- Correct heading hierarchy
- Descriptive product names
- Image alt text
- Clean URLs
- Open Graph metadata
- Sitemap
- Robots configuration

SEO can be implemented progressively after the catalogue foundation.

---

# 20. Legal Pages

Before public launch, create:

```text
/affiliate-disclosure
/privacy-policy
/terms
```

The affiliate disclosure should clearly explain that the website may earn a commission when users purchase through affiliate links.

The privacy policy should be updated when analytics/tracking is introduced.

---

# 21. Traffic / Analytics Layer

This is intentionally a **later phase**.

Do NOT build custom visitor/IP/device logging before the product catalogue is functional.

When the catalogue is stable, add privacy-conscious analytics.

Potential metrics:

- Page views
- Product page views
- Product clicks
- Affiliate clicks
- Referrer
- Country/region at aggregate level
- Device category
- Browser/OS where appropriate
- Popular products
- Popular categories

## Affiliate click event

A useful future event:

```text
affiliate_click
```

Possible properties:

```text
product_id
product_name
retailer
page
timestamp
```

Avoid storing raw IP addresses or persistent device fingerprints unless there is a specific legitimate requirement and appropriate privacy/legal handling.

---

# 22. Future Admin / Automation

Potential future architecture:

```text
Admin
  ↓
Product Database
  ↓
Product Catalogue
  ↓
Retailer Affiliate Links
```

Potential future features:

- Admin dashboard
- Product CRUD
- Category management
- Featured product management
- Retailer link management
- Product import
- Affiliate API integration
- Automated product updates
- Search
- Filtering
- Sorting

These are future features and should not complicate the MVP.

---

# 23. Security

Initial requirements:

- HTTPS
- Secure external links
- Environment variables for secrets
- Never commit API keys/tokens
- Validate external data if APIs are introduced
- Keep dependencies updated
- Avoid unnecessary user data collection

---

# 24. Git / Deployment Workflow

Development flow:

```text
Local Development
       ↓
Git
       ↓
GitHub
       ↓
Vercel
       ↓
milanthemusafir.com
```

After meaningful changes:

```bash
git add .
git commit -m "..."
git push origin main
```

Vercel should automatically deploy the latest GitHub commit.

---

# 25. Development Roadmap

## Phase 0 — Foundation

**Status: DONE**

- Domain
- Cloudflare DNS
- GitHub
- Next.js
- Vercel
- HTTPS
- Custom domain

---

## Phase 1 — Catalogue Foundation

**Status: NEXT**

Build:

- Clean homepage
- Header
- Product type
- Product data file
- ProductCard
- ProductGrid
- Responsive 2-column mobile layout
- Desktop responsive grid
- Amazon CTA
- Placeholder/local product images

---

## Phase 2 — Reference-Style Catalogue

**Status: NEXT**

- Refine visual design
- Improve spacing
- Product image presentation
- Button design
- Category structure
- Featured products
- Mobile-first polish

---

## Phase 3 — Image Infrastructure

**Status: PLANNED**

- Cloudflare R2
- Custom image domain
- CDN/cache
- Production image migration
- Image optimization

---

## Phase 4 — Production Catalogue

**Status: PLANNED**

- Real products
- Real affiliate links
- Categories
- SEO
- Legal pages
- Metadata
- Sitemap
- Final responsive QA

---

## Phase 5 — Launch Validation

**Status: PLANNED**

Test:

- Desktop
- Mobile
- Tablet
- Chrome
- Safari
- Edge
- Broken images
- Broken affiliate links
- Redirect behavior
- HTTPS
- Performance
- SEO metadata

---

## Phase 6 — Traffic Layer

**Status: LATER**

Only after the catalogue is working:

- Analytics
- Affiliate click tracking
- Traffic reports
- Device/category analytics
- Referrer analysis

---

## Phase 7 — Business Analytics

**Status: LATER**

- Click-through rate
- Product popularity
- Category performance
- Affiliate conversion insights where available
- Content-to-product attribution

---

## Phase 8 — Admin / Automation

**Status: FUTURE**

- Database
- Admin dashboard
- API integrations
- Automated catalogue updates
- Product management

---

# 26. Immediate Implementation Task

The immediate development task is:

> Replace the current Hello World page with the first working Milan The Musafir product catalogue.

Implementation order:

1. Create product data model.
2. Create sample product data.
3. Create reusable `ProductCard`.
4. Create responsive `ProductGrid`.
5. Build branded header.
6. Replace the Hello World homepage.
7. Add responsive styling.
8. Test on mobile and desktop.
9. Test Amazon CTA behavior using placeholder/test links.
10. Commit changes.
11. Push to GitHub.
12. Verify Vercel deployment.
13. Verify `https://milanthemusafir.com`.

Do not implement traffic analytics yet.

---

# 27. Coding Principles

- Prefer simple architecture.
- Avoid premature abstractions.
- Use reusable components.
- Keep components focused.
- Use TypeScript types.
- Keep product data separate from UI.
- Avoid unnecessary dependencies.
- Prefer server components unless client-side behavior is required.
- Optimize for mobile first.
- Keep accessibility in mind.
- Use semantic HTML.
- Keep affiliate links easy to replace/update.
- Do not introduce a database until there is a clear requirement.

---

# 28. Definition of Done — Catalogue MVP

The catalogue MVP is complete when:

- [ ] Hello World is removed.
- [ ] Milan The Musafir branding is visible.
- [ ] Product data exists in a dedicated data file.
- [ ] ProductCard is reusable.
- [ ] ProductGrid is reusable.
- [ ] At least several sample products render.
- [ ] Mobile displays two products per row.
- [ ] Desktop uses a responsive multi-column layout.
- [ ] Product images have consistent dimensions.
- [ ] Product prices are not displayed.
- [ ] Amazon CTA is present.
- [ ] Amazon links open the intended external destination.
- [ ] No cart exists.
- [ ] No checkout exists.
- [ ] No payment system exists.
- [ ] No inventory system exists.
- [ ] Site works on `milanthemusafir.com`.
- [ ] Site works over HTTPS.
- [ ] Vercel deployment succeeds.
- [ ] GitHub contains the latest implementation.

---

# 29. Product Vision

The long-term vision is:

```text
Milan The Musafir Content
          ↓
Travel / Road Trip Audience
          ↓
Useful Product Discovery
          ↓
Milan The Musafir Catalogue
          ↓
Affiliate Retailer
          ↓
Purchase
```

The website should remain lightweight, fast, visually appealing, and focused on helping visitors discover useful products without trying to become a full e-commerce platform.
