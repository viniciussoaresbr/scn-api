import { Request, Response } from "express";
import { notesService } from "../services/notes.service";

const getAll = async (req: Request, res: Response) => {
  try {
    const data = await notesService.getAll();
    res.send(data);
  } catch (error) {
    if (error instanceof Error) res.send({ message: error.message });
  }
};

const save = async (req: Request, res: Response) => {
  try {
    const data = await notesService.save(req.body);
    res.status(201).send();
  } catch (error) {
    if (error instanceof Error) res.send({ message: error.message });
  }
};

const updateOne = async (req: Request, res: Response) => {
  try {
    const data = await notesService.updateOne(req.body, req.params.id);
    res.status(200).send({ message: "Nota Atualizada" });
  } catch (error) {
    if (error instanceof Error) res.send({ message: error.message });
  }
};

const deleteOne = async (req: Request, res: Response) => {
  try {
    const data = await notesService.deleteOne(req.params.id);
    res.status(200).send({ message: "Nota Deletada" });
  } catch (error) {
    if (error instanceof Error) res.send({ message: error.message });
  }
};

export const notesController = { getAll, save, updateOne, deleteOne };
