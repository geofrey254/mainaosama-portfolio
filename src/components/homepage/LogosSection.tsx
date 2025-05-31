'use client'
import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

interface LogoProps {
  block?: {
    company_logos: { logo: { url: string; alt: string } }[]
  }
}

export default function LogosSection({ block }: LogoProps) {
  const logos = block?.company_logos || []

  if (!logos.length) return null

  return (
    <section className="bg-emerald-700 py-0 w-full">
      <div className="mx-auto md:px-4">
        <div className="relative mx-auto">
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {logos.map((item, index) => (
                <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-4 h-32 flex items-center justify-center group">
                    <div className="relative flex justify-center items-center w-24 h-24 transition-all duration-300 transform bg-white rounded-full p-2 border-2 border-amber-600 group-hover:scale-110">
                      <Image
                        width={60}
                        height={60}
                        src={item.logo.url}
                        alt={item.logo.alt}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
