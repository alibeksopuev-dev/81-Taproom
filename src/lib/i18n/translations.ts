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

const ko: Translation = {
  appTitle: '탭룸',

  categories: {
    beers: '크래프트 맥주 (생맥주)',
    snacks: '스낵',
    drinks: '음료',
    wines: '와인',
    bottles: '병 & 캔',
  },

  addToCart: '장바구니에 추가',
  viewCart: '장바구니 보기',
  cart: '장바구니',
  search: '검색',
  searchPlaceholder: '메뉴 검색...',
  back: '뒤로',
  close: '닫기',

  yourCart: '장바구니',
  emptyCart: '장바구니가 비어있습니다',
  emptyCartMessage: '음료나 스낵을 추가해주세요',
  browseMenu: '메뉴 보기',
  orderNotes: '주문 메모',
  orderNotesPlaceholder: '특별한 요청사항이 있으신가요? (선택사항)',
  subtotal: '소계',
  total: '총합',
  sendOrder: 'WhatsApp으로 주문 보내기',
  itemsInCart: '개 상품',

  priceLabel: '가격',
  quantity: '수량',
  remove: '삭제',
  selectSize: '사이즈 선택',
  size: '사이즈',

  newOrder: 'Taproom 신규 주문',
  notes: '메모',

  established: '설립 2025',
  reviewsOn: '리뷰',
  newsOn: '뉴스 & 업데이트',
};

export const translations: Record<Language, Translation> = {
  en,
  vi,
  ja,
  ko,
};

export function getTranslation(lang: Language): Translation {
  return translations[lang] || translations.en;
}
