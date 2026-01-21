import type { Language, Translation } from '@/types/i18n';

const en: Translation = {
  appTitle: '81 Taproom',

  categories: {
    beers: 'craft beer (on tap)',
    snacks: 'snacks',
    drinks: 'drinks',
    wines: 'wines',
    bottles: 'bottles & cans',
  },

  addToCart: 'Add to Cart',
  viewCart: 'View Cart',
  cart: 'Cart',
  search: 'Search',
  searchPlaceholder: 'Search menu...',
  back: 'Back',
  close: 'Close',

  yourCart: 'Your Cart',
  emptyCart: 'Your cart is empty',
  emptyCartMessage: 'Add some drinks or snacks to get started',
  browseMenu: 'Browse Menu',
  orderNotes: 'Order Notes',
  orderNotesPlaceholder: 'Any special requests? (optional)',
  subtotal: 'Subtotal',
  total: 'Total',
  sendOrder: 'Send Order via WhatsApp',
  itemsInCart: 'item(s) in cart',

  priceLabel: 'Price',
  quantity: 'Quantity',
  remove: 'Remove',
  selectSize: 'Select Size',
  size: 'Size',

  newOrder: 'New Order from Taproom Menu',
  notes: 'Notes',

  established: 'Est. 2025',
  reviewsOn: 'Reviews on',
  newsOn: 'News & updates on',
};

const vi: Translation = {
  appTitle: 'QUÁN THỦ CÔNG',

  categories: {
    beers: 'bia thủ công (tươi)',
    snacks: 'đồ ăn nhẹ',
    drinks: 'đồ uống',
    wines: 'rượu vang',
    bottles: 'chai & lon',
  },

  addToCart: 'Thêm vào giỏ',
  viewCart: 'Xem giỏ hàng',
  cart: 'Giỏ hàng',
  search: 'Tìm kiếm',
  searchPlaceholder: 'Tìm kiếm thực đơn...',
  back: 'Quay lại',
  close: 'Đóng',

  yourCart: 'Giỏ hàng của bạn',
  emptyCart: 'Giỏ hàng trống',
  emptyCartMessage: 'Thêm đồ uống hoặc đồ ăn nhẹ để bắt đầu',
  browseMenu: 'Xem thực đơn',
  orderNotes: 'Ghi chú đơn hàng',
  orderNotesPlaceholder: 'Có yêu cầu đặc biệt nào không? (tùy chọn)',
  subtotal: 'Tạm tính',
  total: 'Tổng cộng',
  sendOrder: 'Gửi đơn qua WhatsApp',
  itemsInCart: 'món trong giỏ',

  priceLabel: 'Giá',
  quantity: 'Số lượng',
  remove: 'Xóa',
  selectSize: 'Chọn kích cỡ',
  size: 'Kích cỡ',

  newOrder: 'Đơn hàng mới từ Taproom',
  notes: 'Ghi chú',

  established: 'Thành lập 2025',
  reviewsOn: 'Đánh giá trên',
  newsOn: 'Tin tức & cập nhật trên',
};

const ja: Translation = {
  appTitle: 'タップルーム',

  categories: {
    beers: 'クラフトビール（生）',
    snacks: 'スナック',
    drinks: '飲み物',
    wines: 'ワイン',
    bottles: 'ボトル＆缶',
  },

  addToCart: 'カートに追加',
  viewCart: 'カートを見る',
  cart: 'カート',
  search: '検索',
  searchPlaceholder: 'メニューを検索...',
  back: '戻る',
  close: '閉じる',

  yourCart: 'あなたのカート',
  emptyCart: 'カートは空です',
  emptyCartMessage: '飲み物やスナックを追加してください',
  browseMenu: 'メニューを見る',
  orderNotes: '注文メモ',
  orderNotesPlaceholder: '特別なリクエストはありますか？（任意）',
  subtotal: '小計',
  total: '合計',
  sendOrder: 'WhatsAppで注文を送信',
  itemsInCart: '点のアイテム',

  priceLabel: '価格',
  quantity: '数量',
  remove: '削除',
  selectSize: 'サイズを選択',
  size: 'サイズ',

  newOrder: 'Taproomからの新しい注文',
  notes: 'メモ',

  established: '設立 2025',
  reviewsOn: 'レビュー',
  newsOn: 'ニュース＆アップデート',
};

export const translations: Record<Language, Translation> = {
  en,
  vi,
  ja,
};

export function getTranslation(lang: Language): Translation {
  return translations[lang] || translations.en;
}
