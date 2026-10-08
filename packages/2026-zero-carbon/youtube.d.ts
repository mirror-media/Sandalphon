/* eslint-disable */

declare namespace YT {
  class Player {
    constructor(elementId: string | HTMLElement, options: any)
  }
}

interface Window {
  onYouTubeIframeAPIReady?: () => void
  YT: typeof YT
}
