import React from 'react'
import { INVITE_LINK } from '~envs'
import { Button } from './Button'
import { DiscordIcon } from './icons/discord'

export const CTA = () => {
  return (
    <div className="body-block px-6 md:px-12">
      <div
        style={{
          backgroundImage: `url(/dot-bg.png), linear-gradient(90deg, #FCBCC8 0%, #D3A7F3 100%)`,
          backgroundSize: 'cover',
          backgroundBlendMode: 'overlay',
          height: 300,
        }}
        className="relative rounded-lg p-10 flex flex-col items-center justify-center"
      >
        <p className="text-lg md:text-3xl text-center">
          Level up your community. For Free ✨
        </p>
        <Button href={INVITE_LINK} appearance="secondary" className="mt-6">
          <DiscordIcon className="w-5 h-5" />
          <div>Get Mochi</div>
        </Button>
      </div>
    </div>
  )
}
