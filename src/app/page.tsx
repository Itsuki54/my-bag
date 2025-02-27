import { client } from "@/lib/hono";
import { ToolCard } from "@/components/tool/tool-card";
import { redirect } from "next/navigation";

export default async function Home() {
  const toolsRes = await client.api.tool.$get();
  if (!toolsRes.ok) {
    redirect("/auth/signin");
  }
  const toolsData = await toolsRes.json();
  return (
    <div>
      <h1>Home</h1>
      {toolsData.map((tool) => {
        const toolWithDate = {
          ...tool,
          createdAt: new Date(tool.createdAt),
          updatedAt: new Date(tool.updatedAt),
        };
        return <ToolCard key={tool.id} tool={toolWithDate} />;
      })}
    </div>
  );
}
