"use client";
import { useMemo, useRef, useState } from "react";
// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting
import { FeatureGroup, MapContainer, Marker, Polygon, Popup, TileLayer, useMapEvents } from "react-leaflet";

export default function Map() {
  const center = {
    lat: -8.052770867957172,
    lng: -34.95059967041016,
  }

  const UFPE = [
    [-8.04639699140255, -34.953775405883796],
    [-8.04656696274523, -34.94493484497071],
    [-8.052367192083407, -34.94624376296998],
    [-8.059782016298445, -34.94596481323243],
    [-8.056382686813597, -34.95660781860352],
  ];

  const GOLF_CLUB = [
    [-8.033181501402352, -34.952273368835456],
    [-8.031141773286445, -34.95145797729493],
    [-8.028507109306654, -34.95124340057374],
    [-8.0278696880344, -34.94497776031495],
    [-8.03441383217304, -34.94463443756104],
    [-8.037048457822186, -34.94566440582276],
  ];

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(true)
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            navigator.clipboard.writeText(`[${marker.getLatLng().lat}, ${marker.getLatLng().lng}],`);
            console.log(`[${marker.getLatLng().lat}, ${marker.getLatLng().lng}],`);
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )
  
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
      {/* <Polygon pathOptions={{color: 'blue'}} positions={polygons} /> */}
      {/* <Marker position={[center.lat, center.lng]}>
        <Popup>
          This Marker icon is displayed correctly with <i>leaflet-defaulticon-compatibility</i>.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
}