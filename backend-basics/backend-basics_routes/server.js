import { createServer } from "node:http";

export const server = createServer((req, res) => {
  if (req.url === "/api/fish/1") {
    res.statusCode = 200;
    res.end("Shrimp");
    return;
  }

  if (req.url === "/api/fish/2") {
    res.statusCode = 200;
    res.end("Anemonefish");
    return;
  }
  res.end("Not found");
  res.statusCode = 404;
});
