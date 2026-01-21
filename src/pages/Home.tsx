import { Header } from '@/components/Header/Header';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { CategoryButton } from '@/components/CategoryButton/CategoryButton';
import { useUIStore } from '@/lib/store';
import { CATEGORIES } from '@/data/products';
import { getTranslation } from '@/lib/i18n/translations';

export function Home() {
  const { language } = useUIStore();
  const t = getTranslation(language);

  const sortedCategories = [...CATEGORIES].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar />
        </div>

        {/* Categories Grid */}
        <div className="grid gap-4 mb-8">
          {sortedCategories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              language={language}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-600">{t.established}</p>

            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                {t.reviewsOn}{' '}
                <a
                  href="https://maps.app.goo.gl/yrhbQdybz9jCk23m8"
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
                  href="https://www.instagram.com/81taproom"
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
                81 Thao Dien, District 2, Ho Chi Minh City
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
