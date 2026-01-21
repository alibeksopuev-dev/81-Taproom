import { cva } from 'class-variance-authority';

export const categoryButtonStyles = cva(
  [
    'group relative flex items-center justify-between',
    'w-full min-h-[80px] px-6 py-5',
    'bg-white border-2 border-gray-900',
    'transition-all duration-200',
    'hover:bg-gray-50 hover:shadow-lg hover:scale-[1.02]',
    'active:scale-[0.98]',
    'touch-manipulation',
  ],
  {
    variants: {
      size: {
        default: 'min-h-[80px] px-6 py-5',
        large: 'min-h-[96px] px-8 py-6',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export const categoryNumberStyles = cva([
  'text-sm font-mono text-gray-500',
  'transition-colors duration-200',
  'group-hover:text-gray-700',
]);

export const categoryNameStyles = cva([
  'text-lg font-semibold text-gray-900 uppercase tracking-wide',
  'transition-colors duration-200',
]);

export const categoryArrowStyles = cva([
  'text-gray-900',
  'transition-transform duration-200',
  'group-hover:translate-x-1',
]);
