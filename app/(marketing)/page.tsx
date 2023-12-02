import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 py-40 text-center">
      <h1 className="font-display text-9xl font-bold leading-none">
        Editing text
        <br />
        Made simple
      </h1>
      <div className="max-w-[70ch] text-xl [text-wrap:balance]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex
        sed purus commodo mattis. Donec vel convallis tellus. Suspendisse
        tincidunt massa leo.
      </div>
      <Button className="text-xl my-12 px-16 py-8 uppercase" size="lg" variant="default">
        Let's get started
      </Button>
      <div className="aspect-video h-full w-[70vw] rounded-xl border bg-card" />
    </div>
  );
}
