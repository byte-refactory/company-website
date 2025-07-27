# Supreme Rice Mill Manager - Static Mockup

This is a static HTML/CSS mockup of the internal mill management system for Supreme Rice. The mockup demonstrates the layout, design, and structure for the future production system built with Blazor Server.

## 🎯 Project Overview

This mockup showcases how Supreme Rice would handle:
- **Farmer contract management** - tracking agreements and deliveries
- **Rice processing workflows** - from intake through milling and packaging  
- **Storage and inventory management** - bin capacity monitoring and packaging operations
- **System administration** - user management and configuration

## 🎨 Design System

The mockup uses authentic Supreme Rice branding:
- **Colors**: Supreme Red (#b12328), Supreme Gold (#ffc239), Rich Browns
- **Typography**: Oswald and Open Sans fonts (matching Supreme Rice website)
- **Assets**: Actual logo and imagery from Supreme Rice website

## 📂 File Structure

```
supreme-mockup/
├── index.html              # Dashboard with KPIs and overview
├── farmers.html            # Farmer management and contracts
├── processing.html         # Rice processing workflow tracking
├── storage.html           # Storage bin monitoring and packaging
├── settings.html          # System configuration and user management
├── assets/
│   ├── css/
│   │   └── styles.css     # Supreme Rice inspired styling
│   ├── images/
│   │   ├── Logo.png       # Supreme Rice logo
│   │   └── Stamp.png      # Supreme Rice stamp/icon
│   └── fonts/
│       └── [brandon fonts] # Brand fonts from Supreme Rice
└── README.md              # This file
```

## 🚀 Features Demonstrated

### Dashboard (`index.html`)
- High-level KPI cards (contracts, inventory, processing jobs)
- Active contracts summary table
- Processing queue with progress indicators
- Storage capacity monitoring
- Recent activity feed

### Farmers & Contracts (`farmers.html`)
- Registered farmers table with contact info and acreage
- Active contracts with pricing and delivery dates
- New contract creation form
- Contract status tracking (Active, Pending, Overdue)

### Processing (`processing.html`)
- Visual processing timeline (Intake → Drying → Milling → Packaging)
- Active batch monitoring with progress tracking
- Processing queue management
- Equipment status indicators
- Machine operator assignments

### Storage & Packaging (`storage.html`)
- Storage bin capacity visualization with color-coded alerts
- Real-time inventory levels by product type
- Packaging queue and operations
- Storage alerts and notifications
- Product grading and quality tracking

### Settings (`settings.html`)
- User management and role-based access control
- System notification thresholds configuration
- Feature toggles and preferences
- External system integrations (ERP, IoT, Email)
- System health and version information

## 🛠️ Technical Implementation

- **Pure HTML/CSS** - No JavaScript dependencies for maximum compatibility
- **Responsive design** - Mobile-friendly layouts
- **CSS Grid/Flexbox** - Modern layout techniques
- **Custom CSS properties** - Maintainable color and spacing system
- **Semantic HTML** - Accessible structure and markup

## 🔄 Future Migration to Blazor

This mockup is designed for easy conversion to Blazor Server:
- HTML structure maps directly to Razor components
- CSS classes can be reused without modification  
- Form layouts translate to Blazor form components
- Table structures work with Blazor data binding
- Navigation structure supports Blazor routing

## 📝 Comments and TODOs

Throughout the code, you'll find comments indicating where real functionality would be implemented:

```html
<!-- TODO: Call API to fetch contract data -->
<!-- TODO: Integrate with Farmers API for real farmer data -->
<!-- TODO: Track timestamps, machine status, and logs -->
<!-- TODO: Integrate with RFID/IoT sensors for real-time weight monitoring -->
```

These comments provide guidance for future development.

## 🌐 Deployment

This static site can be deployed to:
- **GitHub Pages** (recommended for demo)
- **Netlify** 
- **Vercel**
- **Any web server** (Apache, Nginx, IIS)

Simply upload the files to your hosting provider - no build process required.

## 🎯 Demo Purpose

This mockup demonstrates:
- **Visual design direction** aligned with Supreme Rice branding
- **Information architecture** for mill management workflows
- **User interface patterns** for forms, tables, and dashboards
- **Responsive layout** that works on desktop and mobile
- **Scalable structure** ready for conversion to full application

---

**Note**: This is a static demonstration only. No backend functionality is implemented. All data shown is placeholder content for visualization purposes.
