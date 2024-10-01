import { z } from 'zod'
import { optionalUrl, optionalDate, imageObject } from '@/utils/schema'

const relatedImage = z.object({
  ID: z.string(),
  Type: z.union([z.literal('Course'), z.literal('Lecturer')]),
  MobileURL: optionalUrl,
  TabletURL: optionalUrl,
  DesktopURL: optionalUrl,
})

const baseOutlineObject = z.object({
  ID: z.string(),
  Type: z.union([z.literal('Chapter'), z.literal('Section')]),
  Title: z.string(),
  VideoURL: optionalUrl,
  MaterialURL: optionalUrl,
})

type Outline = z.infer<typeof baseOutlineObject> & {
  children: Outline[]
}

const outlineObject: z.ZodType<Outline> = baseOutlineObject.extend({
  children: z.lazy(() => outlineObject.array()),
})

// TODO: add CourseIntro and LecturerIntro field
export const courseObject = z.object({
  ID: z.string(),
  CourseName: z.string(),
  heroImage: imageObject,
  StartDate: optionalDate,
  BasePrice: z.string(),
  SpecialPrice: z.string(),
  Lecturer: z.string(),
  PreviewVideoURL: optionalUrl,
  PaymentURL: optionalUrl,
  relateds: z.array(relatedImage),
})

export const dataSchema = z.object({
  courses: z.array(courseObject),
})
