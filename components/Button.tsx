import React from 'react'
import cln from 'classnames'

type Appearance = 'primary' | 'secondary' | 'tertiary'

type Props = {
  appearance?: Appearance
  children: React.ReactNode
  href?: string
} & React.ButtonHTMLAttributes<HTMLElement>

const styles: Record<Appearance, string> = {
  primary: 'text-white bg-mochi',
  secondary: 'text-mochi bg-white',
  tertiary: 'text-mochi bg-mochi bg-opacity-[15%]',
}

export const Button = ({
  appearance,
  children,
  className,
  href,
  ...props
}: Props) => {
  if (href) {
    return (
      <a
        {...props}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cln(
          className,
          styles[appearance ?? 'primary'],
          'flex gap-x-2 items-center rounded-lg px-4 py-2 font-semibold',
        )}
      >
        {children}
      </a>
    )
  }
  return (
    <button
      {...props}
      className={cln(
        className,
        styles[appearance ?? 'primary'],
        'flex gap-x-2 items-center rounded-lg px-4 py-2 font-semibold',
      )}
    >
      {children}
    </button>
  )
}
