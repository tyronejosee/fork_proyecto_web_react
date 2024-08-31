import "latamcomponents/latam-button";

export function Footer() {
  return (
    <footer className="bg-heading-color py-12 px-0">
      <div className="container grid items-center grid-cols-1 md:grid-cols-2">
        <h2 className="text-white">
          Join our community by using our services and grow your business.
        </h2>
        <latam-button
          custom-styles="justify-self-center"
          label="Try it for free"
          href="/try"
        />
      </div>
    </footer>
  );
}
