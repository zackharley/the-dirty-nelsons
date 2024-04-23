import type { PropsWithChildren } from 'react';

export default function PageSection({
  children,
  color = 'black',
  id,
  title,
}: { color?: string; id?: string; title: string } & PropsWithChildren) {
  const accentColor = color === 'black' ? 'cream' : 'black';
  return (
    <div
      id={id}
      className={`flex flex-col items-center bg-${color} pt-16 pb-12`}
    >
      <div className="max-w-5xl w-full flex flex-col items-stretch">
        <h2
          className={`text-5xl font-bold self-center mb-2 border-b border-dashed border-${accentColor}`}
        >
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
