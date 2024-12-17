'use client'

import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Store } from './store-map'

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
    (async function init() {
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/marker-icon-2x.png',
        iconUrl: '/leaflet/marker-icon.png',
        shadowUrl: '/leaflet/marker-shadow.png',
      })
    })()
  }, [])

  return (
    <MapContainer center={mapCenter} zoom={6} style={{ height: '100%', width: '100%', borderRadius: '10px'}} className='z-40'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {stores.map((store) => (
        <Marker
          key={store.id}
          position={store.coordinates}
          eventHandlers={{
            click: () => {
              setActiveStore(store)
              setMapCenter(store.coordinates)
            },
          }}
        />
      ))}
      <ChangeView center={mapCenter} />
    </MapContainer>
  )
}

