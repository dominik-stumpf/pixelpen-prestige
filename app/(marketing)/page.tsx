import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

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
        tincidunt massa leo, at ornare augue egestas non.
      </div>
      <div className="my-8 flex gap-4">
        <Button className="text-lg uppercase" size="lg" variant="default">
          Get Started
        </Button>
        <Button
          className="space-x-2 text-lg uppercase"
          size="lg"
          variant="outline"
        >
          <span>See Demo</span>
          <ArrowDown />
        </Button>
      </div>
      <div className="aspect-video h-full w-[70vw] rounded-xl border bg-card" />
    </div>
  );
}
