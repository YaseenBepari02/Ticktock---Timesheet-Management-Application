# Ticktock - Timesheet Management Application

A modern, responsive timesheet management SaaS application built with Next.js 15 and TypeScript for the TenTwenty Frontend Developer Technical Assessment.

![Ticktock Dashboard]([https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Ticktock+Dashboard](https://www.perplexity.ai/apps/60aaef7a-b5bb-49d6-b39d-c3973853e06a?0=d&preview=1))

## 🚀 Live Demo

**Live Application**: [https://www.perplexity.ai/apps/60aaef7a-b5bb-49d6-b39d-c3973853e06a?0=d&preview=1](https://www.perplexity.ai/apps/60aaef7a-b5bb-49d6-b39d-c3973853e06a?0=d&preview=1)

## 🔑 Demo Credentials

Use these credentials to test the application:

- **Email**: `john.doe@example.com`
- **Password**: `password123`

Alternative credentials:
- **Email**: `admin@ticktock.com`
- **Password**: `admin123`

## ✨ Features

- 🔐 **Secure Authentication** - Login system with NextAuth.js
- 📊 **Dashboard Overview** - Clean, intuitive timesheet management interface
- 🗓️ **Timesheet Tracking** - Weekly timesheet entries with status management
- 🔍 **Smart Filtering** - Filter by date range and completion status
- ➕ **Add/Edit Entries** - Modal-based entry management with form validation
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Pixel-Perfect UI** - Matches Figma designs exactly
- ⚡ **Fast Performance** - Optimized with Next.js 15 App Router
- 🛡️ **Type Safety** - Full TypeScript implementation
- 🔄 **Real-time Updates** - Instant UI updates after data changes

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

### Authentication & Forms
- **Authentication**: [NextAuth.js v5](https://next-auth.js.org/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: Built-in validation with custom error handling

### Development & Deployment
- **Package Manager**: npm
- **Deployment**: [PERXPLITY]
- **Code Quality**: ESLint + Prettier
- **Version Control**: Git

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ticktock-timesheet.git
   cd ticktock-timesheet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   # Copy environment template
   cp .env.example .env.local
   
   # Add your environment variables to .env.local
   ```

4. **Environment Variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-super-secret-key-here-min-32-chars
   AUTH_SECRET=your-super-secret-key-here-min-32-chars
   ```
   
   **Generate secret key:**
   ```bash
   # Use one of these methods:
   openssl rand -base64 32
   # OR
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open application**
   
   Navigate to [http://localhost:3000](http://localhost:3000)



## 🎯 Key Components

### Authentication Flow
- **Login Page**: Split-screen design with form validation
- **Route Protection**: Middleware-based authentication
- **Session Management**: JWT-based sessions with NextAuth

### Dashboard Features
- **Timesheet Table**: Sortable columns with status indicators
- **Filtering System**: Date range and status filters
- **Pagination**: 5 entries per page with navigation
- **Action Buttons**: Context-aware View/Update/Create actions

### Modal System
- **Add Entry**: Form for creating new timesheet entries
- **Edit Entry**: Modify existing timesheet data
- **Form Validation**: Real-time validation with error messages

## 📱 Responsive Design

The application is fully responsive across all device sizes:

- **Desktop** (1024px+): Full two-panel layout
- **Tablet** (768px-1023px): Stacked layout with optimized spacing
- **Mobile** (320px-767px): Single-column layout with touch-friendly interactions

## 🔒 Authentication

### Mock Authentication System
- Uses NextAuth.js with credentials provider
- Mock user database for demonstration
- Secure session management with JWTs
- Route protection via middleware

### Available Test Users
```typescript
// User 1
{
  email: 'john.doe@example.com',
  password: 'password123',
  name: 'John Doe'
}

// User 2  
{
  email: 'admin@ticktock.com',
  password: 'admin123',
  name: 'Admin User'
}
```

## 📊 Data Management

### Mock Data Structure
The application uses comprehensive mock data including:

- **50+ Timesheet Records**: Realistic weekly timesheet data
- **Multiple Status Types**: COMPLETED, INCOMPLETE, MISSING
- **Detailed Entries**: Project names, hours, descriptions
- **Date Ranges**: 2024 calendar data with proper formatting

### API Endpoints
- `GET /api/timesheets` - Fetch user timesheets
- `POST /api/timesheets` - Create new timesheet
- `GET /api/timesheets/[id]` - Get specific timesheet
- `PUT /api/timesheets/[id]` - Update timesheet
- `DELETE /api/timesheets/[id]` - Delete timesheet

## 🎨 UI/UX Features

### Design System
- **Color Palette**: Blue primary (#3B82F6) with semantic colors
- **Typography**: Inter font family for optimal readability
- **Status Indicators**: Color-coded badges for quick status recognition
- **Interactive Elements**: Hover states, focus indicators, smooth transitions

### Accessibility
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Semantic HTML with ARIA labels
- **Focus Management**: Proper focus handling in modals
- **Color Contrast**: WCAG 2.1 AA compliant color ratios

## ⚡ Performance Optimizations

- **Next.js App Router**: Optimized routing and code splitting
- **TypeScript**: Compile-time error checking
- **TailwindCSS**: Purged CSS for minimal bundle size
- **Component Optimization**: Memoized components where appropriate
- **Efficient Re-renders**: Optimized state updates

## 🧪 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Deployment
USING PREXPLITY 
```



 **Environment Variables**
   
   Add these in your Vercel dashboard:
   ```
   NEXTAUTH_URL=https://your-app-domain.vercel.app
   NEXTAUTH_SECRET=your-production-secret
   AUTH_SECRET=your-production-secret
   ```

### Alternative Deployment Options
- **Netlify**: Configure build command as `npm run build`
- **Railway**: Connect GitHub repository
- **DigitalOcean App Platform**: Deploy with git integration

## 🔍 Testing

### Manual Testing Checklist

- [ ] Login with valid credentials works
- [ ] Invalid login shows appropriate errors
- [ ] Dashboard loads with timesheet data
- [ ] Filters function correctly
- [ ] Pagination works as expected
- [ ] Modal opens and closes properly
- [ ] Form validation works in modal
- [ ] Timesheet entries save successfully
- [ ] Logout functionality works
- [ ] Responsive design on mobile/tablet
- [ ] All links and buttons functional
- [ ] No console errors present

## ⏱️ Development Timeline

**Total Time Invested**: 8-10 hours

### Breakdown:
- **Setup & Configuration** (1 hour): Next.js 15, TypeScript, TailwindCSS setup
- **Authentication System** (2 hours): NextAuth configuration, login page, route protection
- **Dashboard UI** (2.5 hours): Table design, filters, pagination, responsive layout
- **Modal Components** (1.5 hours): Add/edit forms, validation, modal system
- **API Development** (1 hour): Mock data, API routes, data management
- **Polish & Testing** (1.5 hours): Bug fixes, responsive design, final testing
- **Documentation** (0.5 hour): README, code comments, deployment

## 🤔 Assumptions Made

### Technical Assumptions
- **Mock Data**: Using client-side mock data instead of real database
- **Authentication**: Simplified credential-based auth for demonstration
- **API Simulation**: Mock API endpoints instead of real backend integration
- **Browser Support**: Modern browsers with ES2020+ support
- **Network**: Reliable internet connection for external fonts and assets

### Business Logic Assumptions
- **Work Week**: Standard Monday-Friday work week
- **Hour Tracking**: 8-hour workdays as standard
- **Project Types**: Predefined project categories
- **Status Flow**: Linear progression from Missing → Incomplete → Complete
- **User Roles**: Single user role (employee) for simplicity

## 📝 Future Enhancements

### Potential Features
- [ ] Real database integration (PostgreSQL/MongoDB)
- [ ] Advanced reporting and analytics
- [ ] Export functionality (PDF/Excel)
- [ ] Team management features
- [ ] Time tracking with start/stop functionality
- [ ] Mobile app version
- [ ] Notification system
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Calendar integration

### Technical Improvements
- [ ] Unit testing with Jest/React Testing Library
- [ ] E2E testing with Playwright
- [ ] Storybook for component documentation
- [ ] Performance monitoring
- [ ] Error boundary implementation
- [ ] Progressive Web App features
- [ ] Advanced caching strategies

## 🐛 Known Issues

- Mock data resets on page refresh (expected behavior)
- Some advanced filtering options are placeholder implementations
- Pagination is functional but with mock data limitations

## 📞 Support & Contact

### Developer Information
- **Name**: [Your Full Name]
- **Email**: [your.email@example.com]
- **LinkedIn**: [your-linkedin-profile]
- **GitHub**: [your-github-username]

### Assessment Details
- **Company**: TenTwenty
- **Position**: Frontend Developer
- **Assessment Date**: October 22, 2025
- **Submission Deadline**: 24-48 hours from receipt

## 📄 License

This project is created for the TenTwenty Frontend Developer Technical Assessment and is intended for evaluation purposes only.

---

## 🙏 Acknowledgments

- **TenTwenty Team**: For providing clear requirements and design specifications
- **Next.js Team**: For the excellent framework and documentation
- **PREXPLITY** : DEPOLYMENTN
- **TailwindCSS**: For the utility-first CSS framework
- **NextAuth.js**: For authentication solutions

---

**Built with ❤️ and ⚡ by [YASEEN]**

> "Clean code always looks like it was written by someone who cares." - Robert C. Martin
