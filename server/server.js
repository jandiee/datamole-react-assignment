import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";
import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const adapter = new JSONFileSync("db.json");
const db = new LowSync(adapter);
db.read();

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.patch("/items/:itemId/mark-done", async (req, res, next) => {
  const item = db.data.items.find(
    (item) => item.id === Number(req.params.itemId)
  );
  if (item) {
    item.done = true;
    item.finishedAt = Date.now();
    await db.write();
  }
  res.locals.data = item;
  next();
});

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
