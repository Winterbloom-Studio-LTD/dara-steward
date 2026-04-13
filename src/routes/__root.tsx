import { createRootRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">404 — Page Not Found</h1>
      <Link to="/" className="text-primary underline">
        Go Home
      </Link>
    </div>
  ),
});

function RootComponent() {
  return <Outlet />;
}
