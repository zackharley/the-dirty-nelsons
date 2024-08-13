import Link from 'next/link';
import type { PropsWithChildren } from 'react';

interface BaseButton extends PropsWithChildren {
  className?: string;
}

interface ButtonWithHref extends BaseButton {
  href: string;
  rel?: string;
  target?: string;
}

interface ButtonWithOnClick extends BaseButton {
  onClick: () => void;
}

export default function Button(props: ButtonWithHref | ButtonWithOnClick) {
  const isAnchor = 'href' in props;
  const actualProps = {
    ...props,
    className: `border border-solid border-cream px-4 py-2 hover:opacity-75 ${props.className}`,
  };
  if (isAnchor) {
    return <Link {...(actualProps as ButtonWithHref)}>{props.children}</Link>;
  }
  return (
    <button {...(actualProps as ButtonWithOnClick)}>{props.children}</button>
  );
}
