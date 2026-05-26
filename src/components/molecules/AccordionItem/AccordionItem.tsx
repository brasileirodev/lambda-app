import { cn } from '@/lib/cn';

interface AccordionItemProps {
  number: string;
  title: string;
  description: string;
  isActive: boolean;
  onOpen: () => void;
}

export function AccordionItem({
  number,
  title,
  description,
  isActive,
  onOpen,
}: AccordionItemProps) {
  return (
    <div className="accordionItem">
      <div className="accordionItemNumberColumn">
        <span
          className={cn(
            'h5 _accordionActiveItemNumber_1wr90_1',
            isActive && '_active_1wr90_5',
          )}
          aria-hidden="true"
        >
          {number}
        </span>
      </div>
      <div className="accordionItemContentColumn">
        <h3 className="accordionItemHeader">
          <button
            type="button"
            className="accordionItemHeaderButton"
            aria-expanded={isActive}
            data-locked={isActive ? 'true' : undefined}
            onClick={isActive ? undefined : onOpen}
          >
            <span className="accordionItemTitle">{title}</span>
            <span className="accordionToggle" aria-hidden="true">
              {isActive ? '−' : '+'}
            </span>
          </button>
        </h3>
        <div
          className={cn('accordionItemContent', isActive && 'accordionItemContentOpen')}
          role="region"
          {...(!isActive ? { inert: '' } : {})}
        >
          <div className="accordionItemRich">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
