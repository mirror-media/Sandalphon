import styled from 'styled-components'
import { defaultBlockStyle } from '~/styles/shared-style'
import ContentBlock from '~/components/shared/content-block'
import { color, breakpoint } from '~/styles/theme'
import Link from 'next/link'

const Wrapper = styled.div`
  ${defaultBlockStyle}
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
  gap: 16px;
`

const ApplyButton = styled.div`
  cursor: pointer;
  background-color: #2eabad;
  color: ${color.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  text-align: center;
  padding: 12px;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid #000000;

  ${breakpoint.xl} {
    font-size: 20px;
  }
`

type RegistrationProps = {
  content: string
}
export default function Registration({
  content,
}: RegistrationProps): JSX.Element | null {
  //Error Handle
  const shouldShowJsx = Boolean(typeof content !== 'string' || content.trim())
  if (!shouldShowJsx) {
    return null
  }

  return (
    <Wrapper id="registration">
      <h1>報名資訊</h1>
      <ContentBlock content={content} />
      <ButtonWrapper>
        <Link
          href="https://readr.oen.tw/events/32aV7T5C5sFAjt8IAmKbbjzQ9Er"
          target="_blank"
        >
          <ApplyButton>信用卡報名</ApplyButton>
        </Link>
        <Link href="https://forms.gle/R9VRViCA5XMRmxFz7" target="_blank">
          <ApplyButton>匯款報名</ApplyButton>
        </Link>
      </ButtonWrapper>
    </Wrapper>
  )
}
