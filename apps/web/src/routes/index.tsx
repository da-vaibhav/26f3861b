import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto provident esse nesciunt praesentium ea! Cupiditate hic laborum quisquam aut nostrum cumque exercitationem corrupti, non atque ex, rem veniam esse a.
    </div>
  );
}
