import type { CartItem } from '@/types/menu';
import type { Language } from '@/types/i18n';
import { getTranslation } from './i18n/translations';

const WHATSAPP_PHONE = '+84328797611';

export function generateWhatsAppMessage(
  cartItems: CartItem[],
  orderNotes: string,
  language: Language
): string {
  const t = getTranslation(language);

  let message = `${t.newOrder}\n\n`;

  // Add items
  cartItems.forEach((item, index) => {
    const { product, quantity } = item;
    const itemTotal = product.price * quantity;
    message += `${index + 1}. ${product.name}\n`;
    message += `   ${quantity}x × ${product.price}k = ${itemTotal}k\n\n`;
  });

  // Add total
  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  message += `${t.total}: ${total}k VND\n`;

  // Add notes if present
  if (orderNotes.trim()) {
    message += `\n${t.notes}: ${orderNotes}\n`;
  }

  return message;
}

export function sendToWhatsApp(
  cartItems: CartItem[],
  orderNotes: string,
  language: Language
): void {
  const message = generateWhatsAppMessage(cartItems, orderNotes, language);
  const encodedMessage = encodeURIComponent(message);

  // Remove + from phone number for WhatsApp API
  const phoneNumber = WHATSAPP_PHONE.replace('+', '');

  // Construct WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open WhatsApp
  window.open(whatsappUrl, '_blank');
}
