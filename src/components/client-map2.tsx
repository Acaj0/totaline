'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { duzziIcon, MAP_TILE_URL, MAP_TILE_ATTRIBUTION } from '@/lib/leaflet-icon'

interface ClientMap2Props {
  name: string
  coordinates: [number, number]
}

export default function ClientMap2({ name, coordinates }: ClientMap2Props) {
  return (
    <MapContainer center={coordinates} zoom={15} style={{ height: '100%', width: '100%', borderRadius: '1rem' }} className="z-10">
      <TileLayer url={MAP_TILE_URL} attribution={MAP_TILE_ATTRIBUTION} />
      <Marker position={coordinates} icon={duzziIcon({ active: true })}>
        <Popup>
          <div className="p-3 min-w-[160px]">
            <p className="font-semibold text-brand-navy text-sm">{name}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
