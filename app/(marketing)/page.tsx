import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen py-40 flex items-center justify-center flex-col text-center gap-8">
      <h1 className="text-9xl font-display font-bold leading-none">
        Editing text
        <br />
        Made simple
      </h1>
      <div className="text-xl max-w-[70ch] [text-wrap:balance]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex
        sed purus commodo mattis. Donec vel convallis tellus. Suspendisse
        tincidunt massa leo, at ornare augue egestas non.
      </div>
      <div className="flex gap-4 my-8">
        <Button className="uppercase text-lg" size="lg" variant="default">
          Get Started
        </Button>
        <Button
          className="uppercase space-x-2 text-lg"
          size="lg"
          variant="outline"
        >
          <span>See Demo</span>
          <ArrowDown />
        </Button>
      </div>
      <div className="w-[70vw] h-full aspect-video bg-card border rounded-xl" />
    </div>
  );
}
