import { test, expect } from "vitest";

interface StatusResponse {
  status: string;
}

test("GET to /api/v1/auth should return 200", async () => {
  const response: Response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = (await response.json()) as StatusResponse;
  expect(responseBody.status).toBe("healthy");
});
