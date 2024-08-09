import { test, expect, request } from "@playwright/test";

const BASE_URL = "https://jsonplaceholder.typicode.com";

test.describe("API Testing @api", () => {
  // Example of a GET request
  test("GET /posts/1", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/1`);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("id", 1);
  });

  // Example of a POST request
  test("POST /posts", async ({ request }) => {
    const newPost = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    const response = await request.post(`${BASE_URL}/posts`, { data: newPost });
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("title", "foo");
  });

  // Example of a PUT request
  test("PUT /posts/1", async ({ request }) => {
    const updatedPost = {
      id: 1,
      title: "foo updated",
      body: "bar updated",
      userId: 1,
    };
    const response = await request.put(`${BASE_URL}/posts/1`, {
      data: updatedPost,
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("title", "foo updated");
  });

  // Example of a DELETE request
  test("DELETE /posts/1", async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/posts/1`);
    expect(response.status()).toBe(200);
  });
});
