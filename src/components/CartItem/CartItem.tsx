import { Minus, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { CartItem as CartItemType } from '@/types/menu';
import type { Language } from '@/types/i18n';
import { useCartStore } from '@/lib/store';

interface CartItemProps {
  item: CartItemType;
  language: Language;
}

export function CartItem({ item, language }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  const getProductName = () => {
    switch (language) {
      case 'vi':
        return item.product.nameVi || item.product.name;
      case 'ja':
        return item.product.nameJa || item.product.name;
      default:
        return item.product.name;
    }
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.product.id, item.quantity - 1);
    } else {
      removeItem(item.product.id);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.product.id, item.quantity + 1);
  };

  const handleRemove = () => {
    removeItem(item.product.id);
  };

  const itemTotal = item.product.price * item.quantity;

  return (
    <Card className="p-4">
      <div className="flex gap-3">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-gray-900">{getProductName()}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRemove}
              className="h-8 w-8 p-0 text-gray-400 hover:text-red-600"
            >
              <X size={18} />
            </Button>
          </div>

          <p className="text-sm text-gray-600 mb-3">
            {item.product.price}k × {item.quantity}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecrease}
                className="h-9 w-9 p-0"
              >
                <Minus size={16} />
              </Button>

              <span className="min-w-[3ch] text-center font-semibold">
                {item.quantity}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={handleIncrease}
                className="h-9 w-9 p-0"
              >
                <Plus size={16} />
              </Button>
            </div>

            <div className="text-lg font-bold text-gray-900">
              {itemTotal}k
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
