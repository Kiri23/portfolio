---
name: "Rutero"
order: 2
oneliner: "Delivery routes in Puerto Rico from a list of addresses or a photo of an invoice."
stack: [Python, JavaScript, ArcGIS]
code: private
links:
  - { label: Demo, url: https://rutero.kiri231.com }
note: "Photos return sample invoices in the public demo."
image: /img/projects/rutero-resumen.png
image_alt: "Rutero screen: a 12-stop route ordered by town, with estimated time and distance and a View in Maps button"
---

## Problem

Addresses like "Carr. 159 Km. 0.7, Morovis" confuse regular geocoders, so route apps drop stops in the wrong place.

## What I built

Rutero cleans up the addresses, geocodes them with ArcGIS, and orders the stops by town, with time, distance, and a navigate button for each stop.

## The hard part

Getting a reliable point from an address that follows no standard format.
