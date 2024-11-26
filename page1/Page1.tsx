export function Page1() {
  const structuredCloneTest = structuredClone({ a: 1, b: 2, c: 3 });

  return (
    <div>
      <h1>Page 1</h1>
      <p>{JSON.stringify(structuredCloneTest)}</p>
    </div>
  );
}
