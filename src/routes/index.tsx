import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Dara Steward</h1>
      <p className="text-muted-foreground text-lg">Welcome. Your app is ready to build.</p>
    </div>
  );
}
