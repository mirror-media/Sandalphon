import styled from 'styled-components'
import DraftRenderBlock from './draft-renderer-block'
import { defaultPingFangFontFamily } from '~/styles/shared-style/index'

/**
 * @typedef {import('~/type/theme').Theme} Theme
 */

/**
 * @typedef {import('~/type/wide-article/draft').Draft} Brief
 */

const BriefContainer = styled.div`
  background-color: ${
    /**
     * @param {Object} props
     * @param {Theme} [props.theme]
     */
    ({ theme }) => theme.color.brandColor.darkGray
  };
  padding: 16px 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;

  ${({ theme }) => theme.breakpoint.md} {
    font-weight: 400;
    font-size: 19.2px;
    padding: 24px 32px;
  }
  *,
  *::before,
  *::after {
    color: white;
    ${defaultPingFangFontFamily};
  }
`

/**
 * Component for render brief in `normal` and `premium` story layout
 * @param {Object} props
 * @param {Brief} props.brief
 * @param { 'normal' | 'wide' | 'photography' | 'premium' | 'amp' } [props.contentLayout]
 * @returns {JSX.Element}
 */
export default function ArticleBrief({
  brief = { blocks: [], entityMap: {} },
  contentLayout = 'normal',
}) {
  return (
    <DraftRenderBlock
      rawContentBlock={brief}
      contentLayout={contentLayout}
      wrapper={(children) => <BriefContainer>{children}</BriefContainer>}
    />
  )
}
