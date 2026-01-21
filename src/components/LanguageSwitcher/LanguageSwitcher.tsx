import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUIStore } from '@/lib/store';
import type { Language } from '@/types/i18n';

const languages: Array<{ code: Language; label: string }> = [
  { code: 'en', label: 'EN' },
  { code: 'vi', label: 'VI' },
  { code: 'ja', label: 'JA' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useUIStore();

  const handleLanguageChange = () => {
    const currentIndex = languages.findIndex((lang) => lang.code === language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex].code);
  };

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLanguageChange}
      className="min-h-[44px] min-w-[44px] gap-2"
    >
      <Globe size={18} />
      <span className="font-semibold">{currentLanguage?.label}</span>
    </Button>
  );
}
