import { Header } from '@/components/Header/Header';
import { CategoryButton } from '@/components/CategoryButton/CategoryButton';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import { useUIStore } from '@/lib/store';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { getTranslation } from '@/lib/i18n/translations';

export function Home() {
  const { language, searchQuery } = useUIStore();
  const t = getTranslation(language);

  const sortedCategories = [...CATEGORIES].sort((a, b) => a.order - b.order);

  // Filter products based on search query
  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter((product) => {
        const query = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.descriptionVi?.toLowerCase().includes(query) ||
          product.descriptionJa?.toLowerCase().includes(query) ||
          product.descriptionKo?.toLowerCase().includes(query)
        );
      })
    : [];

  const showSearchResults = searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar />
        </div>

        {showSearchResults ? (
          /* Search Results */
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
            </h2>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} language={language} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found</p>
              </div>
            )}
          </div>
        ) : (
          /* Categories Grid */
          <div className="grid gap-4 mb-8">
            {sortedCategories.map((category) => (
              <CategoryButton
                key={category.id}
                category={category}
                language={language}
              />
            ))}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-600">{t.established}</p>

            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                {t.reviewsOn}{' '}
                <a
                  href="https://maps.app.goo.gl/W4c2ypuTR89VKKps7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Google Maps
                </a>
              </p>

              <p className="text-sm text-gray-600">
                {t.newsOn}{' '}
                <a
                  href="https://www.instagram.com/81.taproom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Instagram
                </a>
              </p>
            </div>

            <div className="pt-4">
              <p className="text-xs text-gray-500">
                81 Taproom - Craft Beer & Wine Bar
              </p>
              <p className="text-xs text-gray-500">
                23 Mai Thúc Lân, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
