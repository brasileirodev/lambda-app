import { cn } from '@/lib/cn';

interface HardwareCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isActive: boolean;
  onClick: () => void;
}

export function HardwareCard({
  title,
  description,
  imageSrc,
  imageAlt,
  isActive,
  onClick,
}: HardwareCardProps) {
  return (
    <button
      type="button"
      className={cn('hardwareAccordionItem', isActive && 'hardwareActive')}
      aria-expanded={isActive}
      onClick={onClick}
    >
      <div className={cn('hardwareAccordionImage', isActive && 'hardwareActiveImage')}>
        <img
          src={imageSrc}
          alt={imageAlt}
          width={410}
          height={410}
          className="hardwareAccordionImg"
        />
      </div>
      <div className="hardwareAccordionItemInner">
        <div className={cn('hardwareAccordionTextContent', isActive && 'hardwareActiveTextContent')}>
          <h3 className="hardwareAccordionItemTitle">{title}</h3>
          <div className={cn('hardwareAccordionItemRichText', isActive && 'hardwareActiveRichText')}>
            {description}
          </div>
        </div>
      </div>
      <div className={cn('hardwareAccordionItemIndicator', isActive && 'hardwareActiveIndicator')} />
    </button>
  );
}
