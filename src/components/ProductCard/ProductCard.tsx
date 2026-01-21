import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Product, BeerSize } from '@/types/menu';
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
  const [selectedSize, setSelectedSize] = useState<BeerSize>('0.33');

  const getProductName = () => {
    // Names are not translated, always return the English name
    return product.name;
  };

  const getProductDescription = () => {
    switch (language) {
      case 'vi':
        return product.descriptionVi || product.description;
      case 'ja':
        return product.descriptionJa || product.description;
      case 'ko':
        return product.descriptionKo || product.description;
      default:
        return product.description;
    }
  };

  const isBeerWithSizes =
    product.metadata?.beer &&
    product.metadata.beer.size033ml &&
    product.metadata.beer.size050ml;

  const handleAddToCart = () => {
    if (isBeerWithSizes) {
      addItem(product, selectedSize);
    } else {
      addItem(product);
    }
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
          </div>
        )}

        {/* Beer Size Selection */}
        {isBeerWithSizes && (
          <div className="mt-3 mb-2">
            <p className="text-sm font-medium mb-2">{t.selectSize}:</p>
            <div className="flex gap-2">
              <Button
                variant={selectedSize === '0.33' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedSize('0.33')}
                className="flex-1 min-h-[44px]"
              >
                0.33L - {product.metadata!.beer!.size033ml}k
              </Button>
              <Button
                variant={selectedSize === '0.50' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedSize('0.50')}
                className="flex-1 min-h-[44px]"
              >
                0.50L - {product.metadata!.beer!.size050ml}k
              </Button>
            </div>
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
