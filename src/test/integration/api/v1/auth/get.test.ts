import { test, expect } from "vitest";

interface AuthResponse {
  auth: boolean;
}

test("GET to /api/v1/auth should return 200", async () => {
  const response: Response = await fetch("http://localhost:3000/api/v1/auth");
  expect(response.status).toBe(200);

  const responseBody = (await response.json()) as AuthResponse;
  expect(responseBody.auth).toBe(true);
});
