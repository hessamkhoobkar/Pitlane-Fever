import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

function IndexPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold text-violet-500">Hello world!</h1>
      <Button onClick={() => setCount((count) => count + 1)}>
        Click me {count}
      </Button>

      <ModeToggle />
    </>
  );
}

export default IndexPage;
