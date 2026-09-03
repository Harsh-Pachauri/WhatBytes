# Whatbytes Frontend Assignment

A product listing, product detail, and cart app built for the Whatbytes frontend take-home assignment.

**Live demo:** https://what-bytes-chi-eight.vercel.app/

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Zustand for cart state, persisted to localStorage
- lucide-react for icons

There's no backend - the product catalog is a static, typed array in `lib/data/products.ts` (12 products across electronics, clothing, and home).

## Running locally

```
npm install
npm run dev
```

Then open http://localhost:3000.

## Folder structure

```
app/
  page.tsx                Home - product listing
  product/[id]/page.tsx   Product detail
  cart/page.tsx           Cart
  layout.tsx              Root layout (header + footer)
  not-found.tsx

components/
  header/          logo, search bar, cart badge
  filters/         category, price, brand filters
  products/        product grid, card, empty state
  product-detail/  image, info panel, quantity selector
  cart/            cart item row, order summary
  layout/          footer

lib/
  data/products.ts        static catalog
  types.ts                Product, CartItem, ProductFilters
  store/cartStore.ts       Zustand cart store
  hooks/                   useProductFilters, useCartHydrated
  utils/filterProducts.ts  pure filter/search logic + URL param parsing
```

## How filtering works

Category, price, brand, and search all live in the URL as query params (e.g. `?category=electronics&price=0-300&brand=SoundWave&q=cam`) instead of component state, so a filtered view is shareable and survives a refresh. The home page reads `searchParams` on the server and filters the catalog with a pure function (`lib/utils/filterProducts.ts`). The sidebar and search bar are client components that read the current filters with `useSearchParams` and write changes back with `router.replace`. Search is debounced about 300ms before it updates the URL.

## How the cart works

Cart state (`lib/store/cartStore.ts`) is a single Zustand store using the `persist` middleware, saved to localStorage under the key `whatbytes-cart-v1`. Add to Cart on the product grid and the product page, plus the quantity and remove controls on the cart page, all go through this one store, so the header badge and the cart page stay in sync and the cart survives a page refresh.

## Known limitations

- No checkout flow - the cart page just shows items, quantities, and a subtotal.
- Product images are hotlinked from Unsplash; there's only one image per product, so the product page shows a single large image instead of a real carousel.
- No automated tests.
- No pagination - fine for a 12-product catalog, wouldn't scale as-is.

## With more time

- Add a proper image carousel and multiple images per product.
- Add unit tests for `filterProducts` and the cart store.
- Add a simple checkout step.
