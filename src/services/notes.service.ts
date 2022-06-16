import { INotes } from "../interfaces";
import NotesModel from "../models/notes";

const getAll = () => {
  return NotesModel.find();
};

const save = (notesBody: INotes) => {
  const notes = new NotesModel({
    title: notesBody.title,
    description: notesBody.description,
    color: notesBody.color,
  });

  return notes.save();
};

const updateOne = (notesBody: INotes, id: string) => {
  return NotesModel.updateOne({ _id: id }, notesBody);
};

const deleteOne = (id: string) => {
  return NotesModel.deleteOne({ _id: id });
};

export const notesService = { save, getAll, updateOne, deleteOne };
