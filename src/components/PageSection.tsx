import type { PropsWithChildren } from 'react';
import RippedPaperBorder from './RippedPaperBorder';

export default function PageSection({
  borderFill = 'cream',
  children,
  color = 'black',
  id,
  title,
}: {
  borderFill?: string;
  color?: string;
  id?: string;
  title: string;
} & PropsWithChildren) {
  const accentColor = color === 'black' ? 'cream' : 'black';
  console.log({ color, accentColor, borderFill });
  return (
    <div className={`bg-${color}`}>
      <div id={id} className={`flex flex-col items-center pt-16 pb-12`}>
        <div className="max-w-5xl w-full flex flex-col items-stretch">
          <h2
            className={`text-5xl font-bold self-center mb-2 border-b border-dashed border-${accentColor}`}
          >
            {title}
          </h2>
          {children}
        </div>
      </div>
      <RippedPaperBorder fill={borderFill} />
    </div>
  );
}
