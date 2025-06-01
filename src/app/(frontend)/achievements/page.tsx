export const dynamic = 'force-dynamic'

import React from 'react'

import AchievementHero from '@/components/achievementpage/AchievementHero'
import AchievementsPage from '@/components/achievementpage/AchieventCards'
import PaginationComponent from '@/components/navigation/PaginationComponent'
import { fetchAllAchievements } from '@/lib/achieveUtil'

type Props = {
  searchParams?: Promise<{
    page?: string
  }>
}
export const metadata = {
  title: 'Achievements | Hon. Peter Maina – MCA Uthiru/Ruthimitu, Nairobi County',
  description:
    'Discover the key milestones and community-impacting achievements of Hon. Peter Maina (Maina Osama), MCA for Uthiru/Ruthimitu Ward. From infrastructure upgrades to youth empowerment, explore the progress made through servant leadership.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/achievements`),
  openGraph: {
    title: 'Achievements | Community Progress Led by Hon. Peter Maina',
    description:
      'Explore a detailed record of Hon. Peter Maina’s accomplishments in office. See how his initiatives in education, infrastructure, health, and governance are transforming Uthiru/Ruthimitu Ward.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/achievements`,
    images: [
      {
        url: '/port.png', // Replace with a relevant image showing community work or progress
        width: 1200,
        height: 630,
        alt: 'Hon. Peter Maina Achievements – Development in Action',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/achievements`,
  },
}

export default async function AchievementPage({ searchParams }: Props) {
  const resolvedParams = await searchParams

  const currentPage = Number(resolvedParams?.page) || 1
  const { docs, pagination } = await fetchAllAchievements(currentPage)

  return (
    <>
      <AchievementHero />
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((post) => {
            // Ensure all photo.url are strings (not null/undefined)
            const safeImages = post.image.map((img) => ({
              photo: {
                url: img.photo.url ?? '',
                alt: img.photo.alt,
              },
            }))
            const safePost = { ...post, image: safeImages }
            return <AchievementsPage key={post.id} post={safePost} />
          })}
        </div>

        <PaginationComponent totalPages={pagination.totalPages} />
      </section>
    </>
  )
}
