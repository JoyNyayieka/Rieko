## Rieko Frontend

Rieko is a modern React-based frontend application designed with scalability, composability, and production-readiness in mind.

The focus of this milestone is architectural correctness, responsive UI systems, and clean routing structure.

### Tech Stack
- React 18
- Vite
- React Router
- Mantine UI
- TailwindCSS
- Axios (scaffolded for future API integration)
- ESLint

### Architectural Principles

This project follows production-grade frontend patterns:

1. Clear separation of routing, layouts, pages, and feature components
2. Domain-driven folder grouping (landingpage, auth, etc.)
3. Reusable shared utilities and hooks
4. Layout-level composition instead of page-level duplication
5. Design-system-oriented UI layering (Mantine + Tailwind)

The architecture is intentionally structured for future backend integration without refactoring.

### Current Scope
#### Routing

Located in:
`src/routes/Router.jsx` 
- Centralized route configuration
- Layout abstraction (LandingLayout, AuthLayout)
- Clean separation between route-level pages and UI components
- Prepared structure for protected routes (not implemented yet)

#### Layout System
```
src/layouts/
  AuthLayout.jsx
  LandingLayout.jsx 
```
Layouts wrap route groups and manage:

1. Header/Footer placement
2. Global UI composition
3. Future loader/auth boundary logic

This avoids duplicating layout concerns inside pages.

#### Pages 
```
src/pages/
  auth/
    SigninPage.jsx
    SignupPage.jsx
  landing/
    LandingPage.jsx
```
Pages are route-level containers only.
They orchestrate feature components but do not contain heavy UI logic.

#### Landing Page Modules 
`src/components/landingpage/` 

Feature-grouped components:
Hero: 
- `Hero.jsx`
- `HeroImages.jsx`
- `HeroImages.css`
- `heroImgs.js`

Handles:
- Visual composition
- Decorative imagery layering
- Responsive image behavior
- Conditional rendering for mobile

About:
`About.jsx`

ContactUI:
```
ContactUI/
  ContactUI.jsx
  CursorLabel.jsx
  HoverLinkSection.jsx
```

Implements:
- Desktop hover interactions
- Mobile fallback behavior
- Interactive label tracking  
- Clear separation of logic and presentation

#### CTA + Additional Sections

`ExpertCTA.jsx`
`FAQs.jsx`

Includes:
- Background image layering
- Text overlay composition
- Call-to-action components

#### Shared components 
```
src/components/shared/
  AppLoader.jsx
  BacktoTop.jsx
```
- `AppLoader` prepared for navigation-based loading states
- `BacktoTop` affix-style scroll interaction

These are globally reusable and isolated from feature modules.

#### Hooks 
```
src/hooks/
  useActiveSectionIndex.js
  useReducedMotion.js
```
Custom hooks abstract:
- Scroll-based section tracking
- Accessibility-conscious motion control

Hooks isolate behavioral logic from UI rendering.

#### API Scaffold 
```
src/api/
  axios.js
  endpoints.js
```
Axios instance and endpoint mapping are scaffolded but not yet connected.
This allows future backend integration without architectural changes.

#### Assets
```
public/
assets/fonts/
```
- Static images stored in public/
- Custom fonts stored locally

### Development
1. `npm install`
2. `npm run dev`
3. `npm run build`

### Design & Engineering Decisions
1. Layout Isolation

Prevents UI duplication and simplifies route expansion.

2. Domain-Based Component Grouping

Landing-specific components are grouped together rather than globally scattered.

3. Hooks for Behavioral Logic

Scroll and motion logic are abstracted for maintainability.

4. API Preparedness

Axios and endpoints scaffolded early to avoid restructuring later.

5. Accessibility Awareness

Reduced motion hook anticipates motion-sensitive users.

#### Engineering Quality Standard

This codebase is structured to:

- Scale without architectural rewrites
- Remain maintainable under feature expansion
- Separate concerns clearly between UI, routing, and behavior

