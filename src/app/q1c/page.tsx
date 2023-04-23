import { getNote } from "~/utils";
import { Note } from "./Note";

export default function Question1c() {
  const note = getNote();
  return <Note note={note} />;
}
