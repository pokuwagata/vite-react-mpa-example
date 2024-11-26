import { useEffect, useState } from "react";

export function Fetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch Test</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
