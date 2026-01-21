import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher';
import { useCartStore, useUIStore } from '@/lib/store';
import { getTranslation } from '@/lib/i18n/translations';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useUIStore();
  const itemCount = useCartStore((state) => state.getItemCount());
  const t = getTranslation(language);

  const isHome = location.pathname === '/';
  const isCart = location.pathname === '/cart';

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Back Button or Logo */}
          <div className="flex items-center min-w-[44px]">
            {!isHome ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="min-h-[44px] min-w-[44px]"
              >
                <ArrowLeft size={20} />
              </Button>
            ) : (
              <div className="w-[44px]" />
            )}
          </div>

          {/* Center: Title */}
          <Link to="/" className="flex-1 text-center">
            <h1 className="text-xl font-bold tracking-wider text-gray-900">
              {t.appTitle}
            </h1>
          </Link>

          {/* Right: Language Switcher and Cart */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            {!isCart && (
              <Link to="/cart">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative min-h-[44px] min-w-[44px]"
                >
                  <ShoppingCart size={20} />
                  {itemCount > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center p-0 px-1.5 text-xs"
                    >
                      {itemCount}
                    </Badge>
                  )}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
