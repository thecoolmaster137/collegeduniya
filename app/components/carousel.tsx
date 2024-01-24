import React from 'react';
import { Button } from './ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { cn } from '~/lib/utils';

export function Carousel({
  children,
  className,
}: {
  children: React.ReactElement[];
  className?: string;
}) {
  const [activeIndex, setActiveSlideIndex] = React.useState(0);
  const slidesCount = children.length;
  function onNext() {
    setActiveSlideIndex((pi) => (pi + 1) % slidesCount);
  }
  function onPrev() {
    setActiveSlideIndex((pi) => (pi - 1 + slidesCount) % slidesCount);
  }
  return (
    <div
      className={cn('w-2/3 h-80 max-w-sm relative', className)}
      data-carousel
    >
      <Button
        size="icon"
        className="absolute  top-1/2 -translate-y-1/2 z-20 -left-4"
        onClick={onPrev}
      >
        <ChevronLeftIcon data-carousel-button="prev" />
      </Button>
      <Button
        size="icon"
        className="absolute  top-1/2 -translate-y-1/2 z-20 -right-4"
        onClick={onNext}
      >
        <ChevronRightIcon data-carousel-button="next" />
      </Button>
      <div className="relative">
        <ul className="list-none" data-slides>
          {children.map((child, index) => (
            <li
              className="absolute inset-0 opacity-0 transition-opacity ease-in-out duration-200 delay-200  data-[active=true]:opacity-100 data-[active=true]:z-10 data-[active=true]:delay-0"
              data-active={index === activeIndex}
              key={index}
            >
              {child}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
