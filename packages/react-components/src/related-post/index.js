import React from 'react' // eslint-disable-line
import styled from 'styled-components'
import RelatedList from './react-components/related-list'

const Container = styled.div`
  width: 100%;
  padding-top: 16px;

  > ul {
    width: 100%;
    padding: 0;
    margin: auto;
  }

  @media (min-width: 768px) {
    > ul {
      max-width: 600px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  @media (min-width: 1200px) {
    > ul {
      max-width: 640px;
    }
  }
`
const Title = styled.p`
  width: 100%;
  margin-bottom: 15px;
  text-align: center;
  font-weight: 600;
  font-size: 21px;
  line-height: 1.5;
  color: #000000;

  @media (min-width: 768px) {
    margin-bottom: 36px;
    font-size: 28px;
    font-weight: 500;
  }
`

/**
 * @typedef {import('./typedef').Post} Post
 *
 * @param {Object} props
 * @param {Post[]} props.relatedData
 * - post data, default value is `[]`.
 * - required.
 * @param {string} [props.title]
 * - title.
 * - optional, default value is `"延伸閱讀"`.
 * @param {string} [props.titleClassName]
 * - className of title.
 * - optional, default value is `"related-post-title"`.
 * @param {string} [props.captionClassName]
 * - className of caption.
 * - optional, default value is `"related-post-caption"`.
 * @param {string} [props.defaultImage]
 * - default image, it will show if `relatedData.imageUrl` can not be loaded
 * - optional, default value is `""`.
 * @returns {JSX.Element}
 */

export function RelatedPost({
  relatedData = [],
  title = '延伸閱讀',
  titleClassName = 'related-post-title',
  captionClassName = 'related-post-caption',
  defaultImage = '',
}) {
  function isDataEmpty(data) {
    try {
      if (!data?.length)
        throw `Error: The 'relatedData' array is empty or undefined.`
      if (
        !data?.every(
          (obj) => obj.hasOwnProperty('caption') && obj['caption'] !== ''
        )
      )
        throw `Error: Not all objects in 'relatedData' have the key 'caption'`
    } catch (err) {
      console.log(err)
    }

    return data?.length !== 0
  }

  return (
    <>
      {isDataEmpty(relatedData) && (
        <Container>
          <Title className={titleClassName}>{title}</Title>
          <ul className="related-post-box">
            <RelatedList
              relatedData={relatedData}
              captionClassName={captionClassName}
              defaultImage={defaultImage}
            />
          </ul>
        </Container>
      )}
    </>
  )
}
