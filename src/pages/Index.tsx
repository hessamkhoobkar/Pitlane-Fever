import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import { Button } from "@/components/ui/button";

function IndexPage() {
  const [count, setCount] = useState(0);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
    console.log("called");
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-violet-500">Hello world!</h1>
      <Button onClick={() => setCount((count) => count + 1)}>
        Click me {count}
      </Button>

      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </>
  );
}

export default IndexPage;
