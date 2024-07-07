import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/courses-images/java.svg"
            alt="Java"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Java
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/courses-images/javascript.svg"
            alt="JavaScript"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          JavaScript
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/courses-images/bash.svg"
            alt="Bash"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Bash
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/courses-images/django.svg"
            alt="Django"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Django
        </Button>

        <Button size="lg" variant="ghost" className="w-full cursor-default">
          <Image
            src="/courses-images/react.svg"
            alt="React"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          JavaScript
        </Button>
      </div>
    </div>
  );
};
