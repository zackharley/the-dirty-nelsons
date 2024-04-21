import type { PropsWithChildren } from 'react';

interface BaseButton extends PropsWithChildren {
  color?: string;
}

interface ButtonWithHref extends BaseButton {
  href: string;
  rel: string;
  target: string;
}

interface ButtonWithOnClick extends BaseButton {
  onClick: () => void;
}

export default function Button(props: ButtonWithHref | ButtonWithOnClick) {
  const isAnchor = 'href' in props;
  const color = props.color ?? 'cream';
  const accentColor = color === 'cream' ? 'black' : 'cream';
  const actualProps = {
    ...props,
    className: `border border-solid border-${color} px-4 py-2 hover:bg-${color} hover:text-${accentColor} transition-colors duration-200 ease-in-out`,
  };
  if (isAnchor) {
    return <a {...actualProps}>{props.children}</a>;
  }
  return <button {...actualProps}>{props.children}</button>;
}
