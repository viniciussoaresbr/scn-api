import { Request, Response } from "express";
import { notesController } from "../controllers/notes.controller";

type Method = "get" | "post" | "put" | "patch" | "delete";

interface IRoutes {
  method: Method;
  path: string;
  handler: (req: Request, res: Response) => void;
}

export const routes: IRoutes[] = [
  {
    method: "get",
    path: "/notes",
    handler: notesController.getAll,
  },
  {
    method: "post",
    path: "/notes",
    handler: notesController.save,
  },
  {
    method: "put",
    path: "/notes/:id",
    handler: notesController.updateOne,
  },
  {
    method: "delete",
    path: "/notes/:id",
    handler: notesController.deleteOne,
  },
];
