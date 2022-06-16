import { Router } from "express";
import { routes } from "./routes";
const router = Router();

routes.forEach(route => {
  router[route.method](route.path, route.handler);
});

export { router };
