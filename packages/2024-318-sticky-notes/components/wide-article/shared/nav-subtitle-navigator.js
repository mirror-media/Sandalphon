import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { onGA4Event } from '~/utils/wide-article'

/**
 * @typedef {Pick<import('~/type/wide-article/draft').DraftBlock, 'key' | 'text' | 'type'> & { type: 'header-two' | 'header-three'}} H2AndH3Block
 */

/**
 * @typedef {import('~/type/theme').Theme} Theme
 */

/**
 * @typedef {'side-index' | 'side-bar'} ComponentStyle
 */

const navWrapperSideIndex = css`
  position: absolute;
  top: 0;
  left: calc((100vw - 100%) / 2 * -1);
  width: calc((100vw - 100%) / 2);
  height: 100%;
`
const navWrapperSideMenu = css`
  background-color: #3e3e3e;
  padding: 24px 24px 20px;
`

const NavWrapper = styled.section`
  ${
    /**
     * @param {{componentStyle: ComponentStyle}} Object
     */
    ({ componentStyle }) => {
      switch (componentStyle) {
        case 'side-index':
          return navWrapperSideIndex
        case 'side-bar':
          return navWrapperSideMenu
        default:
        case 'side-index':
          return navWrapperSideIndex
      }
    }
  }
`

const navItemSideIndex = css`
  color: ${
    /**
     * @param {Object} props
     * @param {Theme} [props.theme]
     */
    ({ theme }) => theme.color.brandColor.white
  };

  ${
    /**
     * @param {Object} param
     * @param {boolean} param.isActive
     * @param {Theme} param.theme
     */
    ({ isActive, theme }) =>
      isActive &&
      `
    color: ${theme.color.brandColor.pink} !important;
    text-decoration: underline;
    font-weight: 600;
    `
  }
`

const navItemSideMenu = css`
  color: ${({ theme }) => theme.color.brandColor.white};
  position: relative;
  margin-left: 28px;
  width: 168px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -20px;
    width: 8px;
    height: 8px;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.brandColor.white};
  }

  ${
    /**
     * @param {Object} param
     * @param {boolean} param.isActive
     */
    ({ isActive }) =>
      isActive &&
      `
        color: #FF8C8C;
        &::before{
         background-color: #FF8C8C;
        }
      `
  }
`

const NavItem = styled.li`
  margin-bottom: 8px;
  font-weight: 300;
  color: #c7c7c7;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -20px;
    width: 6px;
    height: 6px;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.brandColor.white};
  }

  ${
    /**
     * @param {Object} param
     * @param {boolean} param.isActive
     * @param {ComponentStyle} param.componentStyle
     * @param {'header-two' | 'header-three'} param.headerType
     * @param {Theme} param.theme
     */
    ({ headerType }) => {
      switch (headerType) {
        case 'header-two':
          return `  
        font-size: 14px;
        line-height: 1.5;
        `
        case 'header-three':
          return `
        font-size: 12px;
        line-height: 2;
        `
        default:
          return `  
        font-size: 14px;
        line-height: 1.5;
        `
      }
    }
  }
  ${({ componentStyle }) => {
    switch (componentStyle) {
      case 'side-index':
        return navItemSideIndex

      case 'side-bar':
        return navItemSideMenu

      default:
      case 'side-index':
        return navItemSideIndex
    }
  }}
`

const navSideIndex = css`
  display: none;
  ${({ theme }) => theme.breakpoint.xl} {
    display: block;
    position: sticky;
    top: 15%;

    margin: 20px auto;
    width: 208px;
    height: auto;
  }
`
const navSideMenu = css`
  display: block;
`

const Nav = styled.nav`
  ${
    /**
     * @param {Object} param
     * @param {ComponentStyle} [param.componentStyle]
     */
    ({ componentStyle }) => {
      switch (componentStyle) {
        case 'side-index':
          return navSideIndex
        case 'side-bar':
          return navSideMenu
        default:
        case 'side-index':
          return navSideIndex
      }
    }
  }
`

const NavItemGroup = styled.ul`
  li:nth-child(1),
  li:nth-child(4),
  li:nth-child(8),
  li:nth-child(11),
  li:nth-child(15),
  li:nth-child(16) {
    color: #c7c59e;

    &::before {
      background-color: #c7c59e;
    }
  }
`

/**
 * @callback HandleCloseSideBar
 * @return {void | import('react').SetStateAction<boolean> }
 */

/**
 * Component for showing index of h2 and h3.
 * This component will show the text of `<h2>` and `h3` in article.
 * User can click the index and screen will scroll to the corresponding h2 or h3.
 * If certain `<h2>` or `<h3>` is appear in the middle of screen, corresponding index will have different style.
 * This component is currently used at story page wide and premium layout.
 * @param {Object} props
 * @param {H2AndH3Block[]} props.h2AndH3Block
 * - Detail of h2 and h3, which will contain key of h2 and h3.
 * - This details can help the component to locate where the corresponding h2 or h3 are, and show the text of h2 or h3.
 *
 * @param {ComponentStyle} [props.componentStyle]
 * - Style of component. Because this component will be used at different place and have different style.
 * - If value is `side-index`, it should be used at the side of the article.
 * - If value is `side-bar`, it should be used at the side-bar of header (side-bar can be opened by clicking header's hamburger).
 * @param {JSX.Element} [props.children] - Component that should be placed above the index of h2 and h3.
 * @param {HandleCloseSideBar} [props.handleCloseSideBar] - If `params.componentStyle` is `side-bar`, it should close the side bar when click side index.
 * @returns {JSX.Element}
 */
export default function NavSubtitleNavigator({
  h2AndH3Block = [],
  componentStyle = 'side-index',
  children = null,
  handleCloseSideBar = () => {},
}) {
  const [currentIndex, setCurrentIndex] = useState(undefined)
  const [scrollTitles, setScrollTitles] = useState([]) //for GA4 scroll event

  useEffect(() => {
    if (currentIndex) {
      const matchedItem = h2AndH3Block.find((item) => item.key === currentIndex)
      const hasScrolled = Boolean(
        scrollTitles.find((item) => item.key === currentIndex)
      )

      if (!hasScrolled) {
        setScrollTitles([...scrollTitles, matchedItem])
      }

      //如果該標題已經有觸發過 GA4 scroll event，則不再重複觸發。
      matchedItem && !hasScrolled && onGA4Event('scroll', matchedItem.text)
    }
  }, [h2AndH3Block, currentIndex, scrollTitles])

  const smoothScrollTo = (targetY) => {
    const startY = window.scrollY
    const distance = targetY - startY
    const startTime =
      'now' in window.performance ? performance.now() : new Date().getTime()

    const duration = 1000

    const easeInOutQuad = (time, start, distance, duration) => {
      time /= duration / 2
      if (time < 1) return (distance / 2) * time * time + start
      time--
      return (-distance / 2) * (time * (time - 2) - 1) + start
    }

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime
      const nextY = easeInOutQuad(timeElapsed, startY, distance, duration)

      window.scrollTo(0, nextY)

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  const handleOnClick = (key) => {
    const target = document.querySelector(`[data-offset-key*="${key}"]`)
    if (!target) {
      return
    }
    const { top, height } = target.getBoundingClientRect()
    const { scrollY, innerHeight } = window

    const y = top + height * 0.5 + scrollY - innerHeight * 0.5

    smoothScrollTo(y)

    if (componentStyle === 'side-bar') {
      handleCloseSideBar()
    }
  }

  useEffect(() => {
    let observer
    if (h2AndH3Block.length) {
      const targets = h2AndH3Block.map((item) =>
        //TODO: use `forwardRef` to get ref of component which render article content, and querySelect element inside of it,
        //not just use `document.body.querySelector`.
        document.body.querySelector(`[data-offset-key*="${item.key}"]`)
      )

      /**
       * Because content is currently render at client side, so we need to check element targets is existed.
       * If not, then should not add intersection observer.
       */
      if (targets.some((element) => element === null)) {
        return
      }
      /**
       * An Array to keep track of which subtitle is currently visible on the viewport.
       * Each object in the array has the following properties:
       *   - key: the key of the subtitle
       *   - isVisible: a boolean that indicates whether the subtitle is currently visible on the viewport
       */
      const visibleSubtitles = h2AndH3Block.map((item) => {
        return {
          key: item.key,
          isIntersecting: false,
        }
      })
      /**
       * Updates the current subtitle index based on the changes of the visibility of the subtitles.
       * @param {string} offsetKey - the offset key of the subtitle element
       * @param {boolean} isIntersecting - a boolean that indicates whether the subtitle is currently visible on the viewport
       */
      const updateCurrentIndexIfVisible = (offsetKey, isIntersecting) => {
        const item = visibleSubtitles.find((item) =>
          offsetKey.includes(item.key)
        )

        if (item && item.isIntersecting !== isIntersecting) {
          item.isIntersecting = isIntersecting

          //Find the visible subtitle and select its key, if there is multiple subtitle are visible, then select the last one.
          const reverseArray = [...visibleSubtitles].reverse()
          const lastIndex = reverseArray.findIndex(
            (item) => item.isIntersecting
          )

          if (lastIndex !== -1) {
            const lastKey = reverseArray[lastIndex].key

            setCurrentIndex(lastKey)
          }
        }
      }

      const callback = (entries) => {
        entries.forEach((entry) => {
          updateCurrentIndexIfVisible(
            entry.target.dataset.offsetKey,
            entry.isIntersecting
          )
        })
      }
      observer = new IntersectionObserver(callback, {
        threshold: 0,
        rootMargin: '50% 0px -50% 0px',
      })

      targets.forEach((item) => observer.observe(item))
    }
    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [h2AndH3Block])

  return (
    <NavWrapper componentStyle={componentStyle}>
      <Nav componentStyle={componentStyle}>
        {children}
        {h2AndH3Block.length ? (
          <NavItemGroup>
            {h2AndH3Block.map((item) => (
              <NavItem
                // @ts-ignore
                componentStyle={componentStyle}
                isActive={
                  currentIndex ? currentIndex.includes(item.key) : false
                }
                headerType={item.type}
                key={item.key}
                onClick={() => {
                  handleOnClick(item.key)
                  onGA4Event('click', `click ${item.text}-318_10th`)
                }}
              >
                <a href={`#header-${item.key}`}>{item.text}</a>
              </NavItem>
            ))}
          </NavItemGroup>
        ) : null}
      </Nav>
    </NavWrapper>
  )
}
