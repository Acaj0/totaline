'use client'

import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Store } from './store-map'
import { duzziIcon, MAP_TILE_URL, MAP_TILE_ATTRIBUTION } from '@/lib/leaflet-icon'

function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap()
  map.setView(center, map.getZoom())
  return null
}

interface ClientMapProps {
  stores: Store[]
  activeStore: Store
  setActiveStore: (store: Store) => void
}

export default function ClientMap({ stores, activeStore, setActiveStore }: ClientMapProps) {
  const [mapCenter, setMapCenter] = useState<[number, number]>(activeStore.coordinates)

  useEffect(() => {
    setMapCenter(activeStore.coordinates)
  }, [activeStore])

  return (
    <MapContainer center={mapCenter} zoom={6} style={{ height: '100%', width: '100%', borderRadius: '1rem' }} className="z-10">
      <TileLayer url={MAP_TILE_URL} attribution={MAP_TILE_ATTRIBUTION} />
      {stores.map((store) => (
        <Marker
          key={store.id}
          position={store.coordinates}
          icon={duzziIcon({ active: store.id === activeStore.id })}
          zIndexOffset={store.id === activeStore.id ? 1000 : 0}
          eventHandlers={{
            click: () => {
              setActiveStore(store)
              setMapCenter(store.coordinates)
            },
          }}
        >
          <Popup>
            <div className="p-3 min-w-[180px]">
              <p className="font-semibold text-brand-navy text-sm">{store.name}</p>
              <p className="text-xs text-muted-foreground mt-1 mb-2">{store.address}</p>
              <a href={store.url} className="text-xs font-semibold text-brand-red hover:underline">
                Ver detalhes da loja →
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
      <ChangeView center={mapCenter} />
    </MapContainer>
  )
}
