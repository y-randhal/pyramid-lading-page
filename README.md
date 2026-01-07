# Pyramid Landing Page
Hilariously deceptive landing page for an AI course.
A modern, full-stack web application built with Next.js 14, React 18, TypeScript, and Prisma ORM. This project features a comprehensive UI component library, authentication system, data visualization capabilities, and cloud storage integration.
*Note: This is a joke project. No actual AI course exists.*


## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Key Dependencies](#key-dependencies)
- [Development Guidelines](#development-guidelines)
- [Troubleshooting](#troubleshooting)
- [Browser Support](#browser-support)

## Features

- **Modern UI Components**: Built with Radix UI primitives and styled with Tailwind CSS
- **Authentication**: NextAuth.js integration with Prisma adapter
- **Data Visualization**: Multiple charting libraries (Chart.js, Recharts, Plotly.js)
- **Form Management**: React Hook Form with Yup and Zod validation
- **State Management**: Zustand, Jotai, and TanStack Query
- **Cloud Storage**: AWS S3 integration for file uploads
- **Animations**: Framer Motion for smooth transitions
- **Dark Mode**: Theme switching with next-themes
- **Type Safety**: Full TypeScript support
- **Database ORM**: Prisma with PostgreSQL

## Tech Stack

### Core Framework
- **Next.js 14.2.28** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript 5.2.2** - Type safety

### Styling
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **Tailwind Animate** - Animation utilities
- **PostCSS** - CSS processing
- **Class Variance Authority** - Component variants
- **clsx** - Conditional classnames

### UI Components
- **Radix UI** - Accessible component primitives (20+ components)
- **Lucide React** - Icon library
- **Magic UI** - Additional UI components
- **Headless UI** - Unstyled accessible components

### Forms & Validation
- **React Hook Form 7.53.0** - Form state management
- **Yup 1.3.0** - Schema validation
- **Zod 3.23.8** - TypeScript-first schema validation
- **Formik 2.4.5** - Alternative form library

### State Management
- **Zustand 5.0.3** - Lightweight state management
- **Jotai 2.6.0** - Atomic state management
- **TanStack Query 5.0.0** - Server state management
- **SWR 2.2.4** - Data fetching hooks

### Data Visualization
- **Chart.js 4.4.9** - Canvas-based charts
- **React Chart.js 2** - React wrapper for Chart.js
- **Recharts 2.15.3** - Composable charting library
- **Plotly.js 2.35.3** - Scientific charting
- **React Plotly.js** - React wrapper for Plotly

### Database & Authentication
- **Prisma 6.7.0** - Next-generation ORM
- **@prisma/client** - Prisma client
- **NextAuth.js 4.24.11** - Authentication solution
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT tokens

### Cloud Services
- **AWS SDK S3** - S3 file storage
- **AWS S3 Request Presigner** - Presigned URL generation

### Utilities
- **date-fns 3.6.0** - Date manipulation
- **dayjs 1.11.13** - Date library
- **lodash 4.17.21** - Utility functions
- **gray-matter** - Front matter parsing
- **csv 6.3.11** - CSV parsing

### Development Tools
- **ESLint 9.24.0** - Code linting
- **TypeScript ESLint** - TypeScript linting
- **Prettier** - Code formatting
- **ts-node** - TypeScript execution
- **tsx** - TypeScript runner

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 16.x or higher (recommended: 18.x or 20.x)
- **Yarn**: Version 1.22.x or higher (preferred package manager)
- **PostgreSQL**: Version 12.x or higher
- **Git**: For version control

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pyramid-lading-page
   ```

2. **Install dependencies**
   
   **Important**: This project uses Yarn. Do NOT use npm due to peer dependency conflicts.
   
   ```bash
   yarn install
   ```

   If you encounter the error `ERESOLVE unable to resolve dependency tree` with npm, it's because ESLint 9.24.0 is incompatible with @typescript-eslint/parser@7.0.0. Use Yarn instead.

## Environment Setup

1. **Create environment file**
   
   Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```

2. **Configure environment variables**
   
   Add the following variables to your `.env` file:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"

   # AWS S3 (if using file uploads)
   AWS_ACCESS_KEY_ID="your-aws-access-key"
   AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
   AWS_REGION="us-east-1"
   AWS_S3_BUCKET_NAME="your-bucket-name"

   # Optional: Additional configuration
   NODE_ENV="development"
   ```

   **Generate NEXTAUTH_SECRET**:
   ```bash
   openssl rand -base64 32
   ```

## Database Setup

1. **Ensure PostgreSQL is running**
   ```bash
   # Check PostgreSQL status
   pg_isready
   ```

2. **Create database**
   ```bash
   createdb your_database_name
   ```

3. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

4. **Run database migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Seed database (if seed script exists)**
   ```bash
   yarn prisma db seed
   ```

6. **Open Prisma Studio (optional)**
   ```bash
   npx prisma studio
   ```
   This opens a GUI at `http://localhost:5555` to view and edit your database.

## Running the Application

### Development Mode

Start the development server with hot-reload:

```bash
yarn dev
```

The application will be available at `http://localhost:3000`

### Production Mode

1. **Build the application**
   ```bash
   yarn build
   ```

2. **Start production server**
   ```bash
   yarn start
   ```

The optimized production build will run at `http://localhost:3000`

## Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server with hot-reload |
| `yarn build` | Create optimized production build |
| `yarn start` | Start production server (requires build first) |
| `yarn lint` | Run ESLint to check code quality |
| `npx prisma generate` | Generate Prisma Client |
| `npx prisma migrate dev` | Run database migrations in development |
| `npx prisma migrate deploy` | Run database migrations in production |
| `npx prisma studio` | Open Prisma Studio GUI |
| `npx prisma db seed` | Seed database with initial data |

## Project Structure

```
pyramid-lading-page/
├── app/                    # Next.js App Router directory
│   ├── components/         # Route-specific components
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable React components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and configurations
├── prisma/                 # Prisma schema and migrations
│   └── schema.prisma       # Database schema
├── public/                 # Static assets
├── node_modules/           # Dependencies (auto-generated)
├── .env                    # Environment variables (create this)
├── components.json         # Shadcn UI configuration
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── yarn.lock               # Yarn lock file
```

## Key Dependencies

### UI Component Libraries
- **Radix UI**: Provides 20+ accessible, unstyled component primitives
- **Lucide React**: 1000+ consistent icons
- **Framer Motion**: Production-ready animation library

### Form Libraries
- **React Hook Form**: Performant form validation
- **Yup & Zod**: Schema validation with TypeScript support

### State Management
- **Zustand**: Simple, fast state management
- **Jotai**: Primitive and flexible state management
- **TanStack Query**: Async state management for server data

### Data Visualization
- **Chart.js**: Simple yet flexible charting
- **Recharts**: Composable React charts
- **Plotly.js**: Advanced scientific visualization

### Authentication & Security
- **NextAuth.js**: Complete authentication solution
- **bcryptjs**: Secure password hashing
- **JWT**: Token-based authentication

## Development Guidelines

### Code Style
- Follow TypeScript best practices
- Use ESLint and Prettier for consistent formatting
- Run `yarn lint` before committing

### Component Development
- Use Radix UI primitives for accessible components
- Style with Tailwind CSS utility classes
- Create reusable components in `/components` directory

### State Management
- Use Zustand for global client state
- Use TanStack Query for server state
- Use React Hook Form for form state

### Database Changes
1. Modify `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name description`
3. Commit both schema and migration files

### Environment Variables
- Never commit `.env` file
- Document all required variables
- Use `.env.example` for reference

## Troubleshooting

### Common Issues

**1. Dependency Installation Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
```

**2. Database Connection Issues**
- Verify PostgreSQL is running
- Check DATABASE_URL in `.env`
- Ensure database exists

**3. Prisma Client Errors**
```bash
# Regenerate Prisma Client
npx prisma generate
```

**4. Build Errors**
```bash
# Clear Next.js cache
rm -rf .next
yarn build
```

**5. Port Already in Use**
```bash
# Use different port
yarn dev -p 3001
```

**6. TypeScript Errors**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### Getting Help

- Check Next.js documentation: https://nextjs.org/docs
- Check Prisma documentation: https://www.prisma.io/docs
- Check component documentation: https://ui.shadcn.com

## Browser Support

This application supports:
- Internet Explorer 11+
- Last 2 versions of major browsers
- Browsers with >0.5% market share
- Actively maintained browsers

Configured in `package.json` browserslist.

---

**Note**: This is a private project. For questions or contributions, please contact the project maintainer.
