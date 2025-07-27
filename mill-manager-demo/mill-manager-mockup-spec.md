# Supreme Rice Internal System – Static Mockup Specification

This specification outlines the creation of a **static HTML/CSS/JS mockup** of the internal software system for Supreme Rice. The purpose of this mockup is to demonstrate layout, structure, and design direction — without backend logic. This mockup will be deployable to GitHub Pages or any static hosting environment.

In the event that Supreme Rice moves forward with a full production system, this mockup can be incrementally converted to a Blazor Server application. HTML and CSS styles should be structured in a way that allows reuse inside `.razor` components.

---

## 🎯 Objectives

- Visual demonstration of:
  - Contracting workflows
  - Rice processing stages
  - Storage and packaging layout
- Provide structure and placeholders for future logic
- Use real Supreme Rice theming (colors, fonts, branding) where possible
- Zero backend or dynamic data; HTML and comments only

---

## 💡 Technology Stack

| Component     | Choice                     | Reason |
|---------------|----------------------------|--------|
| HTML          | Handwritten or Copilot-assisted | For layout and content structure |
| CSS           | Tailwind CSS or Bootstrap  | Clean, utility-first design with fast prototyping |
| JavaScript    | None, or minimal HTMX or Alpine.js (optional) | Avoids complexity and stays aligned with a Blazor future |
| Hosting       | GitHub Pages               | Free, simple deployment for static content |

---

## 🖼️ Pages and Sections

### `/index.html` – Dashboard
- High-level summary view
- Placeholder cards for KPIs like:
  - Active Contracts
  - Processing Queue
  - Bin Storage

### `/farmers.html`
- Farmer contract management
- Table layout for viewing farmers
- Form-style layout for creating new contracts

### `/processing.html`
- Visual steps for rice processing (receiving → drying → milling)
- Timeline or column layout
- Static icons or badges for status indication

### `/storage.html`
- Table/grid of storage bins
- Packaging area overview
- Inventory mockup by product type

### `/settings.html`
- Placeholder for user roles, system settings
- Show how app config might be handled

---

## 📁 Suggested File Structure

```
supreme-mockup/
│
├── index.html
├── farmers.html
├── processing.html
├── storage.html
├── settings.html
│
├── assets/
│   ├── css/
│   │   └── styles.css         # Tailwind/Bootstrap or custom styles
│   ├── images/
│   │   └── [downloaded from Supreme Rice site]
│   └── fonts/
│       └── [if extracted]
│
└── README.md
```

---

## 🧠 Implementation Notes

- No business logic should be implemented
- Add comments like:
  ```html
  <!-- TODO: This section will eventually show real-time processing status -->
  ```
- Use consistent class names and IDs to support later port to Blazor components
- Avoid inline styles — use utility classes or external CSS

---

## 🔁 Reuse in Blazor

| Asset        | Reuse Potential |
|--------------|-----------------|
| HTML         | ✅ Convert to Razor markup |
| CSS          | ✅ Full reuse in Blazor |
| Images/Fonts | ✅ Can be reused directly |
| JavaScript   | ⚠️ Avoid or isolate for clean migration |

---

## 📦 Deployment

Use GitHub Pages for zero-cost hosting:

- Place contents in `main` or `gh-pages` branch
- Add `404.html` as a copy of `index.html` (optional)
- Use a GitHub Action or manual upload to publish

---

## ✅ Deliverables

- Fully navigable static site with:
  - 5 HTML pages
  - Shared header/sidebar navigation
  - Realistic layout and dummy content
- Ready to be converted to Blazor Server if the project is approved
- GitHub Pages-compatible (pure static files)

---

**End of Spec**
