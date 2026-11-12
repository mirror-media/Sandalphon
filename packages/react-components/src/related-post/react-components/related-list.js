import React, { useState } from 'react' // eslint-disable-line
import styled from 'styled-components'
import DefaultImage from './image/default-image'

const RelatedItem = styled.li`
  list-style: none;
  width: 100%;
  max-width: 280px;
  margin: 0px auto 24px auto;
  cursor: pointer;

  > a {
    text-decoration: none;
    color: #000000;
  }

  @media (min-width: 768px) {
    margin: 0px;
    margin-bottom: 36px;
    max-width: ${
      /**
       *  @param {Object} props
       *  @param {number} props.postAmount
       */ (props) => (props.postAmount === 1 ? 'none' : '276px')
    };
  }
`

const ImgBlock = styled.div`
  width: 100%;
  height: 187px;
  overflow: hidden;
  margin-bottom: 12px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  @media (min-width: 768px) {
    margin-bottom: 16px;
    height: ${
      /**
       *  @param {Object} props
       *  @param {number} props.postAmount
       */ (props) => (props.postAmount === 1 ? '394px' : '184px')
    };
  }

  @media (min-width: 1200px) {
    height: ${
      /**
       *  @param {Object} props
       *  @param {number} props.postAmount
       */ (props) => (props.postAmount === 1 ? '420px' : '184px')
    };
  }
`

const PostCaption = styled.div`
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: 400;
  line-height: 1.5;
  font-size: 18px;
  color: ${(props) => props.color};
  @media (min-width: 768px) {
    -webkit-line-clamp: 3;
  }
`

// Post-image：error handle
// if `props.relatedData.imageUrl` occur error, show `props.defaultImage`.
// if `props.defaultImage` occur error, show `<DefaultImage>`.
/**
 * @param {string} imgSrc
 * @param {number} postAmount
 * @param {string} alt
 * @returns {JSX.Element}
 */
function RelatedPostImage({ imgSrc, postAmount, alt }) {
  const [errored, setErrored] = useState(false)
  return (
    <ImgBlock postAmount={postAmount}>
      {imgSrc && !errored ? (
        <img src={imgSrc} onError={() => setErrored(true)} alt={alt} />
      ) : (
        <DefaultImage />
      )}
    </ImgBlock>
  )
}

/**
 * @typedef {import('../typedef').Post} Post
 *
 * @param {Object} props
 * @param {Post[]} props.relatedData
 * - post data, default value is `[]`.
 * - required.
 * @param {string} [props.captionClassName]
 * - className of caption.
 * - optional, default value is `"related-post-caption"`.
 * @param {string} [props.defaultImage]
 * - default image, it will show if `relatedData.imageUrl` can not be loaded
 * - optional, default value is `""`.
 * @returns {JSX.Element}
 */
export default function RelatedList({
  relatedData,
  captionClassName,
  defaultImage,
}) {
  return (
    <>
      {relatedData.map((item, index) => {
        return (
          <RelatedItem
            key={item.id ? item.id : index}
            className="related-post-list"
            postAmount={relatedData.length}
          >
            <a
              href={
                item.slug
                  ? `https://www.mirrormedia.mg/story/${item.slug}/`
                  : item.link
              }
              target="_blank"
              rel="noreferrer"
            >
              <RelatedPostImage
                postAmount={relatedData.length}
                imgSrc={item.imageUrl ? item.imageUrl : defaultImage}
                alt={item.alt}
              />
              {item.caption && (
                <PostCaption className={captionClassName}>
                  {item.caption}
                </PostCaption>
              )}
            </a>
          </RelatedItem>
        )
      })}
    </>
  )
}
