'use client'

import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Store {
  id: string
  name: string
  address: string
  phone: string
  city: string
  coordinates: [number, number] // [latitude, longitude]
  image: string
  url: string
}

const stores: Store[] = [
  {
    id: "matriz",
    name: "Duzzi Refrigeração - Matriz",
    address: "Av. Miguel Sutil, 2265 - Areão, Cuiabá - MT",
    phone: "(65) 3624-1990",
    city: "Cuiabá",
    coordinates: [-15.602493562480237, -56.07623541804967], // Coordenadas aproximadas de Cuiabá
    image: "/matriz.png",
    url: "/lojas/matriz"
  },
  {
    id: "porto",
    name: "Duzzi Refrigeração - Porto",
    address: "Av. Mário Correa, 319, Porto - Cuiabá - MT",
    phone: "(65) 3623-3452",
    city: "Cuiabá",
    coordinates: [-15.611784341670454, -56.10214517015268], // Coordenadas ligeiramente diferentes para exemplo
    image: "/porto.png",
    url: "/lojas/porto"
  },
  // Adicione outras lojas aqui
]

function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap()
  map.setView(center, map.getZoom())
  return null
}

export default function StoreMap() {
  const [activeStore, setActiveStore] = useState<Store | null>(stores[0])
  const [mapCenter, setMapCenter] = useState<[number, number]>(stores[0].coordinates)

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
    <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto gap-4">
      <div className="w-full lg:w-2/3 h-[400px] lg:h-[500px]">
        <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%', borderRadius: '10px', overflow: 'hidden'}}>
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
      </div>
      <div className="w-full lg:w-1/3 ">
        {activeStore && (
          <Card>
            <CardHeader>
              <CardTitle>{activeStore.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={activeStore.image}
                alt={activeStore.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-sm text-gray-600 mb-2">{activeStore.address}</p>
              <p className="text-sm font-semibold">{activeStore.phone}</p>
              <a
                href={activeStore.url}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Ver detalhes
              </a>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

