---
name: "myContacts"
order: 3
oneliner: "A contacts manager built to a client's design document."
stack: [Angular, TypeScript, ASP.NET Core, .NET 10, Entity Framework Core, SQL Server, Docker]
code: private
links:
  - { label: Demo, url: https://mycontacts.kiri231.com }
---

## Problem

The spec was strict: username-only login, CSV import, and an XML export that has to validate against a given XSD.

## What I built

An Angular front end on an ASP.NET Core API and SQL Server, all in Docker, covered by 32 end-to-end tests.
