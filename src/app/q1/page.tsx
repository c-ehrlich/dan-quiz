import { getNote } from "~/utils";
import { Note } from "./Note";

export default function Question1() {
  const note = getNote();
  return <Note note={note} />;
}
