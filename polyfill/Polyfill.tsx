export function Polyfill() {
  const structuredCloneTest = structuredClone({ a: 1, b: 2, c: 3 });

  return (
    <div>
      <h1>Polyfill Test</h1>
      <p>{JSON.stringify(structuredCloneTest)}</p>
    </div>
  );
}
