# Rutero

- **Order:** 2
- **One-liner:** Delivery routes in Puerto Rico from a list of addresses or a photo of an invoice.
- **Problem:** Addresses like "Carr. 159 Km. 0.7, Morovis" confuse regular geocoders, so route apps drop stops in the wrong place.
- **What I built:** Rutero cleans up the addresses, geocodes them with ArcGIS, and orders the stops by town, with time, distance, and a navigate button for each stop.
- **The hard part:** Getting a reliable point from an address that follows no standard format.
- **Stack:** Python, JavaScript, ArcGIS
- **Links:** Demo (photos return sample invoices in the public demo). Code is private.
