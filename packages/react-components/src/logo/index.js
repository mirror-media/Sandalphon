import React from 'react' // eslint-disable-line
import styled from 'styled-components'
import { MirrorWeeklyIcon } from './react-components/icon'

const WeeklyLogo = styled.a`
  display: inline-block;
  width: 63px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (min-width: 768px) {
    width: 90.7px;
  }
`

/**
 * @param {Object} props
 * @param {string} [props.color]
 * - color of logo.
 * - optional, default value is `''`.
 * @param {string} [props.className]
 * - className of logo.
 * - optional, default value is `'weekly-logo'`.
 * @param {import("react").MouseEventHandler} [props.onClick]
 * - logo onClick function.
 * - optional, default value is {()=> void}.
 * @returns {JSX.Element}
 */

export function Logo({
  className = 'mirror-weekly-logo',
  color = '',
  onClick,
}) {
  return (
    <WeeklyLogo
      href="https://www.mirrormedia.mg"
      target="_blank"
      rel="noreferrer noopenner"
      className={className}
      onClick={onClick}
      aria-label="前往 鏡週刊 首頁"
    >
      <MirrorWeeklyIcon color={color} />
    </WeeklyLogo>
  )
}
