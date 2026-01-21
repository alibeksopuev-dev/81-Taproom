import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Product } from '@/types/menu';
import type { Language } from '@/types/i18n';
import { useCartStore } from '@/lib/store';
import { getTranslation } from '@/lib/i18n/translations';
import {
  productCardStyles,
  productNameStyles,
  productDescriptionStyles,
  productPriceStyles,
  productMetadataStyles,
  metadataBadgeStyles,
} from './product-card.styles';

interface ProductCardProps {
  product: Product;
  language: Language;
}

export function ProductCard({ product, language }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const t = getTranslation(language);

  const getProductName = () => {
    switch (language) {
      case 'vi':
        return product.nameVi || product.name;
      case 'ja':
        return product.nameJa || product.name;
      default:
        return product.name;
    }
  };

  const getProductDescription = () => {
    switch (language) {
      case 'vi':
        return product.descriptionVi || product.description;
      case 'ja':
        return product.descriptionJa || product.description;
      default:
        return product.description;
    }
  };

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <Card className={productCardStyles()}>
      <div className="flex flex-col h-full">
        <h3 className={productNameStyles()}>{getProductName()}</h3>

        {product.subcategory && (
          <div className="mb-2">
            <Badge variant="outline" className="text-xs">
              {product.subcategory}
            </Badge>
          </div>
        )}

        <p className={productDescriptionStyles()}>
          {getProductDescription()}
        </p>

        {/* Beer Metadata */}
        {product.metadata?.beer && (
          <div className={productMetadataStyles()}>
            <span className={metadataBadgeStyles()}>
              IBU {product.metadata.beer.ibu}
            </span>
            <span className={metadataBadgeStyles()}>
              ABV {product.metadata.beer.abv}%
            </span>
            {product.metadata.beer.size033ml && product.metadata.beer.size050ml && (
              <>
                <span className={metadataBadgeStyles()}>
                  0.33L: {product.metadata.beer.size033ml}k
                </span>
                <span className={metadataBadgeStyles()}>
                  0.50L: {product.metadata.beer.size050ml}k
                </span>
              </>
            )}
          </div>
        )}

        {/* Wine Metadata */}
        {product.metadata?.wine && (
          <div className={productMetadataStyles()}>
            {product.metadata.wine.country && (
              <span className={metadataBadgeStyles()}>
                {product.metadata.wine.country}
              </span>
            )}
            {product.metadata.wine.region && (
              <span className={metadataBadgeStyles()}>
                {product.metadata.wine.region}
              </span>
            )}
            {product.metadata.wine.grapeVariety && (
              <span className={metadataBadgeStyles()}>
                {product.metadata.wine.grapeVariety}
              </span>
            )}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-3">
          <span className={productPriceStyles()}>{product.price}k</span>
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="min-h-[44px] px-4"
          >
            <Plus size={16} className="mr-1" />
            {t.addToCart}
          </Button>
        </div>
      </div>
    </Card>
  );
}
