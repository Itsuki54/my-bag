import { client } from "@/lib/hono";

export default async function Home() {
  const toolsRes = await client.api.tool.$get();
  if (!toolsRes.ok) {
    throw new Error("Failed to fetch tools");
  }
  const toolsData = await toolsRes.json();
  return (
    <div>
      <h1>Home</h1>
      {toolsData.map((tool) => (
        <div key={tool.id}>
          <h2>{tool.name}</h2>
          <p>{tool.memo}</p>
        </div>
      ))}
    </div>
  );
}
