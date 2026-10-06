import L from "leaflet";

const PIN_SVG = (color: string) => `
<svg xmlns="http://www.w3.org/2000/svg" width="34" height="44" viewBox="0 0 34 44" class="duzzi-marker">
  <path d="M17 0C7.611 0 0 7.611 0 17c0 12.75 17 27 17 27s17-14.25 17-27C34 7.611 26.389 0 17 0z" fill="${color}"/>
  <circle cx="17" cy="17" r="7" fill="white"/>
</svg>`;

export function duzziIcon(options?: { active?: boolean }) {
  const color = options?.active ? "#ec413f" : "#022e5e";
  return L.divIcon({
    html: PIN_SVG(color),
    className: "",
    iconSize: [34, 44],
    iconAnchor: [17, 44],
    popupAnchor: [0, -40],
  });
}

export const MAP_TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
export const MAP_TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
