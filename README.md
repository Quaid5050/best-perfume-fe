# Boilerplate and Starter for Next.js 16+, Tailwind CSS 4, and TypeScript.

🚀 Boilerplate and Starter for Next.js with App Router, Tailwind CSS, and TypeScript ⚡️ Prioritizing developer experience first: Next.js, TypeScript, ESLint, Prettier, Lefthook (replacing Husky), Lint-Staged, Vitest (replacing Jest), Testing Library, Playwright, Commitlint, VSCode, Tailwind CSS, Error Monitoring with [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo), Logging with LogTape (replacing Pino.js) and Log Management, Monitoring as Code, Storybook, Multi-language (i18n), AI-powered code reviews with CodeRabbit, Secure with [Arcjet](https://launch.arcjet.com/Q6eLbRE) (Bot detection, Rate limiting, Attack protection, etc.), and more.

Clone this project and use it to create your own Next.js project.

### Features

Developer experience first, extremely flexible code structure and only keep what you need:

- ⚡ [Next.js](https://nextjs.org) with App Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 19
- 🌐 Multi-language (i18n) with next-intl and [Crowdin](https://l.crowdin.com/next-js)
- ♻️ Type-safe environment variables with T3 Env
- ⌨️ Form handling with React Hook Form
- 🔴 Validation library with Zod
- 🗃️ State management with Zustand
- 🔄 Data fetching with React Query (TanStack Query)
- 🔗 URL state management with nuqs
- 🎨 Icons with [Lucide React](https://lucide.dev)
- 🔔 Toast notifications with [Sonner](https://sonner.emilkowal.ski)
- 🎯 Class name utilities with clsx and tailwind-merge
- 📅 Date manipulation with [Day.js](https://day.js.org)
- ✨ Animations with [Framer Motion](https://www.framer.com/motion)
- ⏱️ Debounce and throttle with [use-debounce](https://github.com/xnimorz/use-debounce)
- 🎨 UI components with [shadcn/ui](https://ui.shadcn.com) (built on Radix UI)
- 📏 Linter with [ESLint](https://eslint.org) (default Next.js, Next.js Core Web Vitals, Tailwind CSS and Antfu configuration)
- 💖 Code Formatter with Prettier
- 🦊 Husky for Git Hooks (replaced by Lefthook)
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🔍 Unused files and dependencies detection with Knip
- 🌍 I18n validation and missing translation detection with i18n-check
- 🦺 Unit Testing with Vitest and Browser mode (replacing React Testing Library)
- 🧪 Integration and E2E Testing with Playwright
- 👷 Run tests on pull request with GitHub Actions
- 🎉 Storybook for UI development
- 🐰 AI-powered code reviews with [CodeRabbit](https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025)
- 🚨 Error Monitoring with [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo)
- 🔍 Local development error monitoring with Sentry Spotlight
- ☂️ Code coverage with [Codecov](https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo)
- 📝 Logging with LogTape and Log Management with [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate)
- 🖥️ Monitoring as Code with [Checkly](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate)
- 🔐 Security and bot protection ([Arcjet](https://launch.arcjet.com/Q6eLbRE))
- 📊 Analytics with PostHog
- 🎁 Automatic changelog generation with Semantic Release
- 🔍 Visual regression testing
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and Extensions
- 🤖 SEO metadata, JSON-LD and Open Graph tags
- 🗺️ Sitemap.xml and robots.txt
- 👷 Automatic dependency updates with Dependabot
- ⚙️ Bundler Analyzer
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in features from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

Optional features (easy to add):

- 🔗 Web 3 (Base, MetaMask, Coinbase Wallet, OKX Wallet)

### Philosophy

- Nothing is hidden from you, allowing you to make any necessary adjustments to suit your requirements and preferences.
- Dependencies are regularly updated on a monthly basis
- Start for free without upfront costs
- Easy to customize
- Minimal code
- Unstyled template
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js 22+ and pnpm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/quaid5050/best-perfume-fe.git my-project-name
cd my-project-name
pnpm install
```

For your information, all dependencies are updated every month.

Then, you can run the project locally in development mode with live reload by executing:

```shell
pnpm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.


### Translation (i18n) setup

For translation, the project uses `next-intl` combined with [Crowdin](https://l.crowdin.com/next-js). As a developer, you only need to take care of the English (or another default language) version. Translations for other languages are automatically generated and handled by Crowdin. You can use Crowdin to collaborate with your translation team or translate the messages yourself with the help of machine translation.

To set up translation (i18n), create an account at [Crowdin.com](https://l.crowdin.com/next-js) and create a new project. In the newly created project, you will be able to find the project ID. You will also need to create a new Personal Access Token by going to Account Settings > API. Then, in your GitHub Actions, you need to define the following environment variables: `CROWDIN_PROJECT_ID` and `CROWDIN_PERSONAL_TOKEN`.

After defining the environment variables in your GitHub Actions, your localization files will be synchronized with Crowdin every time you push a new commit to the `main` branch.

### Documentation

Comprehensive documentation is available in the `docs/` folder:

- **[Project Structure and Best Practices](./docs/project-structure-and-best-practices.md)** - Complete guide on project structure, conventions, and best practices
- **[Development Workflow](./docs/development-workflow.md)** - Git workflow, commit guidelines, and development process

These documents cover:
- Technology stack and when to use each tool
- File naming conventions (kebab-case)
- Type management (single source of truth)
- Service layer pattern
- Component organization rules
- State management guidelines
- Code quality standards

### Project structure

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
│   ├── actions                     # Reusable actions
│   └── workflows                   # GitHub Actions workflows
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── docs                            # Project documentation
│   ├── project-structure-and-best-practices.md
│   └── development-workflow.md
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   │   ├── ui                      # shadcn/ui components
│   │   ├── icons                   # Icon components
│   │   └── providers               # Context providers
│   ├── features                    # Feature-based modules
│   ├── hooks                       # Shared reusable hooks
│   ├── lib                         # Library configurations
│   ├── libs                        # 3rd party libraries configuration
│   ├── locales                     # Locales folder (i18n messages)
│   ├── services                    # API service layer
│   ├── stores                      # Zustand stores
│   ├── styles                      # Styles folder
│   ├── templates                   # Templates folder
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
│   └── validations                 # Validation schemas
├── tests
│   ├── e2e                         # E2E tests, also includes Monitoring as Code
│   └── integration                 # Integration tests
├── next.config.ts                  # Next JS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate by searching the entire project for `FIXME:` to make quick customizations. Here are some of the most important files to customize:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon
- `src/utils/app-config.ts`: configuration file
- `src/templates/base-template.tsx`: default theme
- `next.config.ts`: Next.js configuration
- `.env`: default environment variables

You have full access to the source code for further customization. The provided code is just an example to help you start your project. The sky's the limit 🚀.

### Commit Message Format

The project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification, meaning all commit messages must be formatted accordingly. To help you write commit messages, the project provides an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
pnpm run commit
```

One of the benefits of using Conventional Commits is the ability to automatically generate GitHub releases. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### CodeRabbit AI Code Reviews

The project uses [CodeRabbit](https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025), an AI-powered code reviewer. CodeRabbit monitors your repository and automatically provides intelligent code reviews on all new pull requests using its powerful AI engine.

Setting up CodeRabbit is simple, visit [coderabbit.ai](https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025), sign in with your GitHub account, and add your repository from the dashboard. That's it!

### Testing

All unit tests are located alongside the source code in the same directory, making them easier to find. The unit test files follow this format: `*.test.ts` or `*.test.tsx`. The project uses Vitest and React Testing Library for unit testing. You can run the tests with the following command:

```shell
pnpm run test
```

### Integration & E2E Testing

The project uses Playwright for integration and end-to-end (E2E) testing. Integration test files use the `*.spec.ts` extension, while E2E test files use the `*.e2e.ts` extension. You can run the tests with the following commands:

```shell
npx playwright install # Only for the first time in a new environment
pnpm run test:e2e
```

### Storybook

Storybook is configured for UI component development and testing. The project uses Storybook with Next.js and Vite integration, including accessibility testing and documentation features.

Stories are located alongside your components in the `src` directory and follow the pattern `*.stories.ts` or `*.stories.tsx`.

You can run Storybook in development mode with:

```shell
pnpm run storybook
```

This will start Storybook on http://localhost:6006 where you can view and interact with your UI components in isolation.

To run Storybook tests in headless mode, you can use the following command:

```shell
pnpm run storybook:test
```

### State Management with Zustand

The project uses [Zustand](https://github.com/pmndrs/zustand) for state management. Zustand is a small, fast, and scalable state management solution with a minimal API.

#### Store Structure

Stores are located in the `src/stores` directory. An example store is provided at `src/stores/use-store.ts`:

```typescript
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),
      }),
      {
        name: 'app-store',
      },
    ),
    {
      name: 'AppStore',
    },
  ),
);
```

#### Using Stores in Components

You can use the store in any React component:

```typescript
'use client';

import { useStore } from '@/stores/use-store';

export const Counter = () => {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
```

#### Features

- **Devtools**: The store includes Zustand devtools middleware for debugging in development
- **Persistence**: The store uses the persist middleware to save state to localStorage
- **TypeScript**: Full TypeScript support with type-safe state and actions
- **Minimal API**: Simple and intuitive API for managing global state

For more information, visit the [Zustand documentation](https://github.com/pmndrs/zustand).

### Data Fetching with React Query

The project uses [TanStack Query (React Query)](https://tanstack.com/query/latest) for server state management, data fetching, caching, and synchronization. React Query works seamlessly with Next.js App Router and complements server-side rendering.

#### Setup

React Query is already configured with a `QueryProvider` in the root layout. The provider includes:
- Default query options optimized for SSR
- React Query Devtools for development debugging
- Automatic caching and background refetching

#### Creating Query Hooks

Example hooks are provided in `src/hooks/use-perfumes.ts`:

```typescript
import { useQuery } from '@tanstack/react-query';

interface Perfume {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
}

const fetchPerfumes = async () => {
  const response = await fetch('/api/perfumes');
  if (!response.ok) throw new Error('Failed to fetch perfumes');
  return response.json();
};

export const usePerfumes = () => {
  return useQuery({
    queryKey: ['perfumes'],
    queryFn: fetchPerfumes,
  });
};
```

#### Using Queries in Components

```typescript
'use client';

import { usePerfumes } from '@/hooks/use-perfumes';

export const PerfumeList = () => {
  const { data, isLoading, error } = usePerfumes();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.perfumes.map((perfume) => (
        <div key={perfume.id}>
          <h3>{perfume.name}</h3>
          <p>{perfume.brand} - ${perfume.price}</p>
        </div>
      ))}
    </div>
  );
};
```

#### Mutations

For creating, updating, or deleting data:

```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (perfumeId: string) => {
      const response = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({ perfumeId }),
      });
      if (!response.ok) throw new Error('Failed to add to cart');
      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch cart data
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};
```

#### Features

- **Automatic Caching**: Queries are cached automatically with smart invalidation
- **Background Refetching**: Data stays fresh with background updates
- **Optimistic Updates**: Update UI immediately before server confirmation
- **SSR Compatible**: Works seamlessly with Next.js server components
- **Devtools**: Built-in React Query Devtools for debugging
- **TypeScript**: Full type safety with TypeScript support

#### When to Use React Query vs Zustand

- **React Query**: Use for server state (API data, database queries, external APIs)
- **Zustand**: Use for client state (UI state, form state, local preferences)

For more information, visit the [TanStack Query documentation](https://tanstack.com/query/latest).

### URL State Management with nuqs

The project uses [nuqs](https://nuqs.47ng.com/) for managing URL search parameters (query strings). nuqs provides type-safe, SSR-compatible URL state management, perfect for filters, pagination, sorting, and other state that should be reflected in the URL.

#### Setup

nuqs is already configured with a `NuqsProvider` in the root layout. The provider works seamlessly with Next.js App Router and next-intl.

#### Creating Parsers

Parsers define the structure and types of your URL parameters. Create parsers in your own files:

```typescript
import { parseAsInteger, parseAsString, parseAsStringEnum } from 'nuqs';

export const searchParsers = {
  q: parseAsString.withDefault(''),
  page: parseAsInteger.withDefault(1),
  sort: parseAsStringEnum(['asc', 'desc', 'newest']).withDefault('newest'),
  filter: parseAsString,
};
```

#### Using nuqs in Components

```typescript
'use client';

import { useQueryStates } from 'nuqs';
import { searchParsers } from '@/libs/your-parsers';

export const SearchComponent = () => {
  const [filters, setFilters] = useQueryStates(searchParsers);

  return (
    <div>
      <input
        value={filters.q}
        onChange={(e) => setFilters({ q: e.target.value })}
        placeholder="Search..."
      />
      <select
        value={filters.sort}
        onChange={(e) => setFilters({ sort: e.target.value as any })}
      >
        <option value="newest">Newest</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};
```

#### Reading URL Parameters in Server Components

```typescript
import { parseAsInteger, parseAsString } from 'nuqs/server';
import { searchParams } from 'nuqs/server';

export default async function PerfumePage({
  searchParams: nextSearchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams(nextSearchParams);
  const page = parseAsInteger.withDefault(1).parseServerSide(params.page);
  const q = parseAsString.withDefault('').parseServerSide(params.q);

  // Use page and q for server-side data fetching
  return <div>Page {page}, Search: {q}</div>;
}
```

#### Features

- **Type-Safe**: Full TypeScript support with type inference
- **SSR Compatible**: Works seamlessly with Next.js server components
- **URL Synchronized**: State is always reflected in the URL
- **Shareable URLs**: Users can share filtered/searched URLs
- **Browser Navigation**: Back/forward buttons work correctly
- **Default Values**: Easy to set default values for parameters
- **Validation**: Built-in validation for enum and number types

#### Common Use Cases

- **Search & Filters**: Search queries, filters, ranges
- **Pagination**: Page numbers in URL
- **Sorting**: Sort options
- **View Modes**: Grid/list view toggle
- **Modal States**: Open/close states for modals
- **Tab Navigation**: Active tab state

For more information, visit the [nuqs documentation](https://nuqs.47ng.com/).

### Icons with Lucide React

The project uses [Lucide React](https://lucide.dev) for icons. Lucide provides a beautiful, consistent icon set that's tree-shakeable and works perfectly with React and TypeScript.

#### Usage

**Direct import (simple usage):**

```typescript
import { Search, Heart, ShoppingCart, User } from 'lucide-react';

export const IconExample = () => {
  return (
    <div className="flex gap-4">
      <Search className="w-5 h-5" />
      <Heart className="w-5 h-5 text-red-500" />
      <ShoppingCart className="w-5 h-5" />
      <User className="w-5 h-5" />
    </div>
  );
};
```

**Centralized icon registry (recommended for larger projects):**

The project includes a centralized icon registry at `src/components/icons/icon.tsx`:

```typescript
import { Icons } from '@/components/icons/icon';

export const IconExample = () => {
  const SearchIcon = Icons.search;
  const CartIcon = Icons.shoppingCart;
  const UserIcon = Icons.user;

  return (
    <div className="flex gap-4">
      <SearchIcon className="w-5 h-5" />
      <CartIcon className="w-5 h-5" />
      <UserIcon className="w-5 h-5" />
    </div>
  );
};
```

Benefits of the centralized registry:
- **Consistent naming**: All icons follow a consistent naming convention
- **Easy to find**: All available icons in one place
- **Type-safe**: Full TypeScript support with autocomplete
- **Customizable**: Can add custom icons or wrappers
- **Maintainable**: Easy to update or replace icons across the app

#### Features

- **Tree-shakeable**: Only imports icons you use, keeping bundle size small
- **TypeScript**: Full TypeScript support with type-safe icon names
- **Customizable**: Icons accept standard React props (className, size, color, etc.)
- **Consistent**: Beautiful, consistent design system
- **Accessible**: Icons are SVG-based and can be made accessible with proper ARIA attributes
- **Tailwind Compatible**: Works seamlessly with Tailwind CSS classes

#### Common Icons

Lucide includes 1000+ icons. Some commonly used ones:

- Navigation: `Menu`, `X`, `ChevronDown`, `ArrowRight`
- Actions: `Search`, `Filter`, `Sort`, `Edit`, `Trash`
- Social: `Heart`, `Share`, `Bookmark`, `Star`
- E-commerce: `ShoppingCart`, `Package`, `CreditCard`
- User: `User`, `Settings`, `LogOut`, `Bell`

Browse all icons at [lucide.dev/icons](https://lucide.dev/icons).

### Toast Notifications with Sonner

The project uses [Sonner](https://sonner.emilkowal.ski) for toast notifications. Sonner provides beautiful, accessible toast notifications that work seamlessly with Next.js.

#### Setup

Sonner is already configured with a `Toaster` component in the root layout. The toaster is positioned at the top-right with rich colors enabled.

#### Usage

```typescript
'use client';

import { toast } from 'sonner';

export const NotificationExample = () => {
  const handleSuccess = () => {
    toast.success('Operation completed successfully!');
  };

  const handleError = () => {
    toast.error('Something went wrong');
  };

  const handleInfo = () => {
    toast.info('Here is some information');
  };

  const handlePromise = async () => {
    const promise = fetch('/api/data');
    
    toast.promise(promise, {
      loading: 'Loading...',
      success: 'Data loaded successfully!',
      error: 'Failed to load data',
    });
  };

  return (
    <div>
      <button onClick={handleSuccess}>Success Toast</button>
      <button onClick={handleError}>Error Toast</button>
      <button onClick={handleInfo}>Info Toast</button>
      <button onClick={handlePromise}>Promise Toast</button>
    </div>
  );
};
```

#### Features

- **Lightweight**: Small bundle size with minimal dependencies
- **Accessible**: Built with accessibility in mind
- **Customizable**: Easy to style and customize
- **Promise Support**: Built-in support for async operations
- **Rich Colors**: Beautiful default styling with rich colors
- **Position Control**: Easy to change toast position
- **TypeScript**: Full TypeScript support

For more information, visit the [Sonner documentation](https://sonner.emilkowal.ski).

### Class Name Utilities

The project includes a utility function `cn` (class names) that combines `clsx` and `tailwind-merge` for managing Tailwind CSS classes.

#### Usage

The `cn` utility is available at `src/utils/cn.ts`:

```typescript
import { cn } from '@/utils/cn';

export const Button = ({ variant, className, ...props }) => {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md font-medium',
        {
          'bg-blue-500 text-white': variant === 'primary',
          'bg-gray-200 text-gray-900': variant === 'secondary',
        },
        className
      )}
      {...props}
    />
  );
};
```

#### Benefits

- **Conditional Classes**: Use `clsx` for conditional class application
- **Conflict Resolution**: `tailwind-merge` automatically resolves Tailwind class conflicts
- **Type-Safe**: Full TypeScript support
- **Flexible**: Accepts strings, objects, arrays, and conditional logic

#### Example Use Cases

```typescript
import { cn } from '@/utils/cn';

// Conditional classes
cn('base-class', isActive && 'active-class', isDisabled && 'disabled-class');

// With objects
cn('base-class', {
  'text-red-500': hasError,
  'text-green-500': isSuccess,
});

// Merging Tailwind conflicts (last one wins)
cn('px-2 py-1', 'px-4 py-2'); // Result: 'py-2 px-4'

// Combining with existing className prop
cn('base-class', className);
```

### Date Manipulation with Day.js

The project uses [Day.js](https://day.js.org) for date manipulation. Day.js is a lightweight alternative to Moment.js with a similar API and excellent performance.

#### Setup

Day.js is configured with useful plugins in `src/libs/dayjs.ts`:
- **relativeTime**: Human-readable relative time (e.g., "2 hours ago")
- **utc**: UTC timezone support
- **timezone**: Timezone conversion
- **duration**: Duration formatting
- **localizedFormat**: Localized date formats

#### Usage

```typescript
import dayjs from '@/libs/dayjs';

// Basic usage
const now = dayjs();
const date = dayjs('2024-01-15');

// Formatting
dayjs().format('YYYY-MM-DD'); // '2024-01-15'
dayjs().format('DD/MM/YYYY'); // '15/01/2024'
dayjs().format('MMMM D, YYYY'); // 'January 15, 2024'

// Relative time
dayjs().fromNow(); // 'a few seconds ago'
dayjs().subtract(2, 'hours').fromNow(); // '2 hours ago'

// Manipulation
dayjs().add(1, 'day');
dayjs().subtract(1, 'month');
dayjs().startOf('day');
dayjs().endOf('month');

// Comparison
dayjs().isBefore(dayjs('2024-01-01'));
dayjs().isAfter(dayjs('2024-01-01'));
dayjs().isSame(dayjs('2024-01-15'), 'day');

// Duration
dayjs.duration(2, 'hours').humanize(); // '2 hours'
```

#### Features

- **Lightweight**: Only 2KB minified and gzipped
- **Immutable**: All operations return new instances
- **Chainable**: Fluent API for easy chaining
- **Plugin System**: Extensible with plugins
- **TypeScript**: Full TypeScript support
- **i18n Support**: Locale support for internationalization
- **Timezone Support**: Built-in timezone handling

#### Common Use Cases

```typescript
import dayjs from '@/libs/dayjs';

// Format dates for display
const formatted = dayjs().format('MMM D, YYYY');

// Calculate time differences
const daysAgo = dayjs().diff(dayjs('2024-01-01'), 'days');

// Check if date is in range
const isInRange = dayjs().isBetween(startDate, endDate);

// Get start/end of periods
const startOfWeek = dayjs().startOf('week');
const endOfMonth = dayjs().endOf('month');

// Relative time for "time ago" displays
const timeAgo = dayjs(pastDate).fromNow();
```

For more information, visit the [Day.js documentation](https://day.js.org/docs/en/display/format).

### Animations with Framer Motion

The project uses [Framer Motion](https://www.framer.com/motion) for animations and transitions. Framer Motion provides a powerful, declarative animation library for React with gesture support and layout animations.

#### Setup

Framer Motion is installed and ready to use. Example animation components are provided in `src/components/animations/`:
- `PageTransition` - Smooth page transitions
- `FadeIn` - Fade-in animation wrapper

#### Basic Usage

```typescript
'use client';

import { motion } from 'framer-motion';

export const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Content here
    </motion.div>
  );
};
```

#### Using Pre-built Animation Components

```typescript
'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { PageTransition } from '@/components/animations/page-transition';

export const MyComponent = () => {
  return (
    <PageTransition>
      <FadeIn delay={0.2}>
        <h1>Animated Content</h1>
      </FadeIn>
    </PageTransition>
  );
};
```

#### Gesture Support

```typescript
'use client';

import { motion } from 'framer-motion';

export const GestureExample = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Hover me
    </motion.button>
  );
};
```

#### Layout Animations

```typescript
'use client';

import { motion, AnimatePresence } from 'framer-motion';

export const ListExample = ({ items }: { items: string[] }) => {
  return (
    <AnimatePresence>
      {items.map((item) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          {item}
        </motion.div>
      ))}
    </AnimatePresence>
  );
};
```

#### Features

- **Declarative API**: Simple, intuitive syntax for animations
- **Gesture Support**: Built-in hover, tap, drag, and pan gestures
- **Layout Animations**: Automatic animations when layout changes
- **Performance**: Optimized animations with GPU acceleration
- **TypeScript**: Full TypeScript support
- **Variants**: Reusable animation variants
- **Orchestration**: Control animation sequences and delays
- **Page Transitions**: Smooth transitions between pages

#### Common Use Cases

- **Page Transitions**: Smooth fade/slide transitions between routes
- **Micro-interactions**: Button hover effects, card interactions
- **List Animations**: Stagger animations for lists
- **Modal Animations**: Smooth open/close animations
- **Loading States**: Animated spinners and skeletons
- **Scroll Animations**: Animate elements on scroll
- **Drag & Drop**: Interactive drag and drop interfaces

For more information, visit the [Framer Motion documentation](https://www.framer.com/motion).

### Debounce and Throttle with use-debounce

The project uses [use-debounce](https://github.com/xnimorz/use-debounce) for debouncing and throttling values and callbacks. This is especially useful for search inputs, API calls, and other scenarios where you want to delay execution until the user stops typing.

#### Setup

use-debounce is installed and ready to use. Convenience hooks are available at:
- `src/hooks/use-debounced-value.ts` - For debouncing values
- `src/hooks/use-debounced-callback.ts` - For debouncing callback functions

#### Debouncing Values

Use `useDebounce` when you need to debounce a value (like search input):

```typescript
'use client';

import { useState } from 'react';
import { useDebounce } from '@/hooks/use-debounced-value';
import { useQuery } from '@tanstack/react-query';

export const SearchComponent = () => {
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, 500);

  // This query will only run when debouncedSearch changes
  const { data } = useQuery({
    queryKey: ['search', debouncedSearch],
    queryFn: () => fetchResults(debouncedSearch),
    enabled: !!debouncedSearch,
  });

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      {/* Results update 500ms after user stops typing */}
    </div>
  );
};
```

#### Debouncing Callbacks

Use `useDebouncedCallback` when you need to debounce a function:

```typescript
'use client';

import { useDebouncedCallback } from '@/hooks/use-debounced-callback';

export const SearchInput = () => {
  const debouncedSearch = useDebouncedCallback((value: string) => {
    // This function will only be called 500ms after the last call
    fetchResults(value);
  }, 500);

  return (
    <input
      onChange={(e) => debouncedSearch(e.target.value)}
      placeholder="Search..."
    />
  );
};
```

#### Throttling

You can also use throttling instead of debouncing:

```typescript
'use client';

import { useThrottledCallback } from 'use-debounce';

export const ScrollComponent = () => {
  const throttledScroll = useThrottledCallback((event: Event) => {
    // This will run at most once every 100ms
    handleScroll(event);
  }, 100);

  return (
    <div onScroll={throttledScroll}>
      Scrollable content
    </div>
  );
};
```

#### Features

- **Value Debouncing**: Debounce any value with `useDebounce`
- **Callback Debouncing**: Debounce function calls with `useDebouncedCallback`
- **Throttling**: Throttle function calls with `useThrottledCallback`
- **TypeScript**: Full TypeScript support
- **Flexible Delay**: Customizable delay in milliseconds
- **Cancel Support**: Ability to cancel pending debounced calls
- **React 19 Compatible**: Works with latest React

#### Common Use Cases

- **Search Inputs**: Delay API calls until user stops typing
- **Form Validation**: Debounce validation checks
- **Resize Handlers**: Throttle window resize events
- **Scroll Events**: Throttle scroll handlers for performance
- **Auto-save**: Debounce auto-save functionality
- **Filter Inputs**: Delay filter application
- **Price Range Sliders**: Debounce slider value changes

#### Example: Search with Debounce

```typescript
'use client';

import { useState } from 'react';
import { useDebounce } from '@/hooks/use-debounced-value';
import { useQuery } from '@tanstack/react-query';

export const ProductSearch = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 300);

  const { data, isLoading } = useQuery({
    queryKey: ['products', debouncedQuery],
    queryFn: () => searchProducts(debouncedQuery),
    enabled: debouncedQuery.length > 2,
  });

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      {isLoading && <p>Searching...</p>}
      {data && <ProductList products={data} />}
    </div>
  );
};
```

For more information, visit the [use-debounce documentation](https://github.com/xnimorz/use-debounce).

### UI Components with shadcn/ui

The project uses [shadcn/ui](https://ui.shadcn.com) for UI components. shadcn/ui is a collection of re-usable components built with Radix UI and Tailwind CSS. Components are copied into your project, giving you full control to customize them.

#### Setup

shadcn/ui is configured and ready to use. The configuration is in `components.json`. Essential components are already added:
- `Button` - Versatile button component with multiple variants
- `Input` - Form input component

#### Adding More Components

To add more components, use the shadcn CLI:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add select
```

#### Using Components

```typescript
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const FormExample = () => {
  return (
    <form className="space-y-4">
      <Input type="text" placeholder="Enter your name" />
      <Button type="submit">Submit</Button>
    </form>
  );
};
```

#### Button Variants

```typescript
import { Button } from '@/components/ui/button';

export const ButtonVariants = () => {
  return (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
};
```

#### Button Sizes

```typescript
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <Icons.search />
</Button>
```

#### Features

- **Copy-Paste Components**: Components are copied into your project, not installed as dependencies
- **Fully Customizable**: Modify components directly in your codebase
- **Built on Radix UI**: Accessible, unstyled components
- **TypeScript**: Full TypeScript support
- **Tailwind CSS**: Styled with Tailwind CSS
- **Theme Support**: Built-in light/dark mode support via CSS variables
- **No Runtime**: Zero runtime JavaScript, pure CSS

#### Available Components

Essential components are included:
- `Button` - Button component with variants
- `Input` - Input field component

Browse all available components at [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components).

#### Customization

All components are in `src/components/ui/` and can be customized directly. The theme is controlled via CSS variables in `src/styles/global.css`.

For more information, visit the [shadcn/ui documentation](https://ui.shadcn.com).

### Deploy to production

You can generate a production build with:

```shell
$ pnpm run build
```

It generates an optimized production build of the boilerplate. To test the generated build, run:

```shell
$ pnpm run start
```

This command starts a local server using the production build. You can now open http://localhost:3000 in your preferred browser to see the result.

### Deploy to Sevalla

You can deploy a Next.js application on [Sevalla](https://sevalla.com). First, create an account on Sevalla.

After registration, you will be redirected to the dashboard. From there, click `Application > Create an App`. After connecting your GitHub account, select the repository you want to deploy. Keep the default settings for the remaining options, then click `Create`.

Finally, initiate a new deployment by clicking `Overview > Latest deployments > Deploy now`. If everything is set up correctly, your application will be deployed successfully.

### Error Monitoring

The project uses [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) to monitor errors.

#### Local development with Sentry and Spotlight

In the development environment, no additional setup is required: Next.js Boilerplate comes pre-configured with Sentry and Spotlight (Sentry for Development). All errors are automatically captured by your local Spotlight instance, enabling testing without sending data to Sentry Cloud.

You can inspect captured events, view stack traces, and analyze errors in the Spotlight UI at `http://localhost:8969`.

#### Production setup with Sentry

For production environment, you'll need to create a Sentry account and a new project. Then, in `.env.production`, you need to update the following environment variables:

```shell
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_ORGANIZATION=
SENTRY_PROJECT=
```

You also need to create a environment variable `SENTRY_AUTH_TOKEN` in your hosting provider's dashboard.

### Code coverage

Next.js Boilerplate relies on [Codecov](https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) for code coverage reporting solution. To enable Codecov, create a Codecov account and connect it to your GitHub account. Your repositories should appear on your Codecov dashboard. Select the desired repository and copy the token. In GitHub Actions, define the `CODECOV_TOKEN` environment variable and paste the token.

Make sure to create `CODECOV_TOKEN` as a GitHub Actions secret, do not paste it directly into your source code.

### Logging

The project uses LogTape for logging. In the development environment, logs are displayed in the console by default.

For production, the project is already integrated with [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) to manage and query your logs using SQL. To use Better Stack, you need to create a [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) account and create a new source: go to your Better Stack Logs Dashboard > Sources > Connect source. Then, you need to give a name to your source and select Node.js as the platform.

After creating the source, you will be able to view and copy your source token. In your environment variables, paste the token into the `NEXT_PUBLIC_BETTER_STACK_SOURCE_TOKEN` variable. You'll also need to define the `NEXT_PUBLIC_BETTER_STACK_INGESTING_HOST` variable, which can be found in the same place as the source token.

Now, all logs will automatically be sent to and ingested by Better Stack.

### Checkly monitoring

The project uses [Checkly](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate) to ensure that your production environment is always up and running. At regular intervals, Checkly runs the tests ending with `*.check.e2e.ts` extension and notifies you if any of the tests fail. Additionally, you have the flexibility to execute tests from multiple locations to ensure that your application is available worldwide.

To use Checkly, you must first create an account on [their website](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate). After creating an account, generate a new API key in the Checkly Dashboard and set the `CHECKLY_API_KEY` environment variable in GitHub Actions. Additionally, you will need to define the `CHECKLY_ACCOUNT_ID`, which can also be found in your Checkly Dashboard under User Settings > General.

To complete the setup, update the `checkly.config.ts` file with your own email address and production URL.

### Arcjet security and bot protection

The project uses [Arcjet](https://launch.arcjet.com/Q6eLbRE), a security as code product that includes several features that can be used individually or combined to provide defense in depth for your site.

To set up Arcjet, [create a free account](https://launch.arcjet.com/Q6eLbRE) and get your API key. Then add it to the `ARCJET_KEY` environment variable.

Arcjet is configured with two main features: bot detection and the Arcjet Shield WAF:

- [Bot detection](https://docs.arcjet.com/bot-protection/concepts) is configured to allow search engines, preview link generators e.g. Slack and Twitter previews, and to allow common uptime monitoring services. All other bots, such as scrapers and AI crawlers, will be blocked. You can [configure additional bot types](https://docs.arcjet.com/bot-protection/identifying-bots) to allow or block.
- [Arcjet Shield WAF](https://docs.arcjet.com/shield/concepts) will detect and block common attacks such as SQL injection, cross-site scripting, and other OWASP Top 10 vulnerabilities.

Arcjet is configured with a central client at `src/libs/arcjet.ts` that includes the Shield WAF rules. Additional rules are applied when Arcjet is called in `proxy.ts`.

### Useful commands

### Code Quality and Validation

The project includes several commands to ensure code quality and consistency. You can run:

- `pnpm run lint` to check for linting errors
- `pnpm run lint:fix` to automatically fix fixable issues from the linter
- `pnpm run check:types` to verify type safety across the entire project
- `pnpm run check:deps` help identify unused dependencies and files
- `pnpm run check:i18n` ensures all translations are complete and properly formatted

#### Bundle Analyzer

Next.js Boilerplate includes a built-in bundle analyzer. It can be used to analyze the size of your JavaScript bundles. To begin, run the following command:

```shell
pnpm run build-stats
```

By running the command, it'll automatically open a new browser window with the results.

### VSCode information (optional)

If you are VSCode user, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed in your VSCode, ESLint and Prettier can automatically fix the code and display errors. The same applies to testing: you can install the VSCode Vitest extension to automatically run your tests, and it also shows the code coverage in context.

Pro tips: if you need a project wide-type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have any questions or find a bug. Totally open to suggestions and improvements.

### License

Licensed under the MIT License, Copyright © 2025

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [Quaid Ahmed](https://github.com/quaid5050) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/quaid5050.svg?style=social&label=Follow%20%40quaid5050)](https://twitter.com/quaid5050)

Looking for a custom boilerplate to kick off your project? I'd be glad to discuss how I can help you build one. Feel free to reach out anytime!
