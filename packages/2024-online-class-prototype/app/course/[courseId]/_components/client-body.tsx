'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useRef, useState, useEffect } from 'react'
import { z } from 'zod'
import { isEqual } from 'lodash-es'
import { courseObject } from './schema'
import { fetchCourseData } from './util'
import LoadingLayout from '@/components/loading-layout'
import Information from './information'
import { useAppSelector } from '@/redux/hooks'
import { selectPurchasedClassIDs } from '@/redux/features/user/selector'
import Introduction from './introduction'
import Divider from './divider'
import PreviewVideo from './preview-video'
import OutlineSection from './outline-section'
import VideoSection from './video-section'

const MAX_RETRY_TIMES = 3

export default function ClientBody() {
  const router = useRouter()
  const pathname = usePathname()
  const courseId = pathname.split('/')[2]
  const fetchTimes = useRef(0)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<z.infer<typeof courseObject> | null>(null)
  const purchasedClasses = useAppSelector(selectPurchasedClassIDs, isEqual)
  const isPurchased = purchasedClasses.includes(courseId)

  useEffect(() => {
    const initialize = async () => {
      try {
        fetchTimes.current += 1

        const result = await fetchCourseData()
        const matchedData = result.find((course) => course.ID === courseId)

        if (matchedData?.AllowPublicAccess === 'FALSE') {
          router.replace('/')
          return
        }

        if (matchedData) {
          setData(matchedData)
        }

        setIsLoading(false)
      } catch (error) {
        console.error(
          '// Encountered error during initialization in course page'
        )
        console.error(error)

        if (fetchTimes.current < MAX_RETRY_TIMES) initialize()
        else setIsLoading(false)
      }
    }

    initialize()
  }, [courseId])

  return (
    <LoadingLayout isLoading={isLoading}>
      {data && (
        <div className="mb-20 mt-0 w-full md:mb-[140px] md:mt-[30px] lg:mb-[120px] lg:mt-[60px] lg:max-w-course">
          <Information {...data} isPurchased={isPurchased} />
          <Introduction relateds={data.relateds} />
          <Divider />
          <PreviewVideo
            src={data.PreviewVideoURL}
            poster={data.PreviewVideoImage}
          />
          <OutlineSection
            Description={data.Description}
            outline={data.outline}
          />
          <Divider />
          <VideoSection {...data} isPurchased={isPurchased} />
          <a
            href="#video-list"
            className="fixed right-5 top-[clamp(20px,calc(424/530*100%),424px)] inline-block rounded-xl bg-main px-3 py-2 text-xl font-bold leading-[1.2] text-white md:hidden"
          >
            開始
            <br />
            上課
          </a>
        </div>
      )}
    </LoadingLayout>
  )
}
