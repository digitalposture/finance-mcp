import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerPrompts(server: McpServer) {
  server.registerPrompt(
    "echo",
    {
      argsSchema: { message: z.string() }
    },
    ({ message }) => ({
      messages: [{
        role: "user",
        content: {
          type: "text",
          text: `Use math-tool to elaborate this operation: ${message}`
        }
      }]
    })
  );
}
