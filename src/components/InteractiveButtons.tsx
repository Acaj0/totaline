'use client'

import { Button } from '@/components/ui/button'
import { Navigation, MapPin, MessageCircle } from 'lucide-react'

interface InteractiveButtonsProps {
  wazeUrl: string
  googleMapsUrl: string
  whatsappUrl: string
}

export function InteractiveButtons({ wazeUrl, googleMapsUrl, whatsappUrl }: InteractiveButtonsProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Button 
          className="w-full" 
          onClick={() => window.open(wazeUrl, '_blank')}
        >
          <Navigation className="mr-2" /> Waze
        </Button>
        <Button 
          className="w-full" 
          onClick={() => window.open(googleMapsUrl, '_blank')}
        >
          <MapPin className="mr-2" /> Google Maps
        </Button>
      </div>
      <div className="mt-8 text-center">
        <Button 
          size="lg" 
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          <MessageCircle className="mr-2" /> Falar com a Loja
        </Button>
      </div>
    </>
  )
}

