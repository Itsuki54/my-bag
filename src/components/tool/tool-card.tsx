import { Tool } from "@prisma/client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

type ToolCardProps = {
  tool: Tool;
};

export const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <Card className="border p-4 rounded-md shadow-md">
      <CardHeader>
        <h2>{tool.name}</h2>
      </CardHeader>
      <CardContent>
        <p><strong>ID:</strong> {tool.id}</p>
        <p><strong>ブランド:</strong> {tool.brand}</p>
        <p><strong>種類:</strong> {tool.kind}</p>
        <p><strong>メモ:</strong> {tool.memo}</p>
        <p><strong>作成日:</strong> {tool.createdAt.toLocaleDateString()}</p>
        <p><strong>更新日:</strong> {tool.updatedAt.toLocaleDateString()}</p>
      </CardContent>
    </Card>
  );
};