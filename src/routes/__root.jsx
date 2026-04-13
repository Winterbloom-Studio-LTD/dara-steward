import { createRootRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>404 — Page Not Found</h1>
      <Link to="/" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
        Go Home
      </Link>
    </div>
  ),
});

function RootComponent() {
  return <Outlet />;
}
