"use client";
import { useMemo, useRef, useState } from "react";
// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting
import { FeatureGroup, MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet";

import { GOLF_CLUB, UFPE } from "@/constants/Places";


export default function Map() {
  const center = {
    lat: -8.052770867957172,
    lng: -34.95059967041016,
  }

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(true);
    const [position, setPosition] = useState(center);
    const markerRef = useRef<any>(null);

    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          
          if (marker != null) {
            navigator.clipboard.writeText(`[${marker.getLatLng().lat}, ${marker?.getLatLng().lng}],`);
            console.log(`[${marker.getLatLng().lat}, ${marker.getLatLng().lng}],`);
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    );
  
    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      />
    )
  }

  return (
    <MapContainer
      preferCanvas={true}
      center={[center.lat, center.lng]}
      zoom={13}
      attributionControl={false}
      doubleClickZoom={false}
      scrollWheelZoom={false}
      zoomControl={false}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker />
      <FeatureGroup pathOptions={{color: 'blue'}}>
        <Popup>UFPE - Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Popup>
        <Polygon positions={UFPE} />
      </FeatureGroup>
      <FeatureGroup pathOptions={{color: 'red'}}>
        <Popup>Golf Club - Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Popup>
        <Polygon positions={GOLF_CLUB} />
      </FeatureGroup>
    </MapContainer>
  );
}