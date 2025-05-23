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
