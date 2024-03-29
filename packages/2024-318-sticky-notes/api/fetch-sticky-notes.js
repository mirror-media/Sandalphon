import axios from '~/axios'
import { stickyNoteBaseUrl } from '~/const/sticky-notes'

/**
 * @typedef {import('~/data/mockData').RawData} RawData
 */

/**
 * @returns {Promise<RawData>}
 */
export const fetchStickyNotesAtPage = async (page) => {
  const url = stickyNoteBaseUrl + `/json/project_318_${page}.json`
  try {
    const response = await axios.get(url)
    /** @type {import('~/data/mockData').RawData} */
    const rawData = response.data
    return rawData
  } catch (error) {
    console.error(error)
    throw new Error(
      `fetch sticky notes failed in url ${url}, check the axios error above to debug`
    )
  }
}
