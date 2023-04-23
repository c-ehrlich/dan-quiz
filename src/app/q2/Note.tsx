import { Details } from "~/components/Details";
import { Toggle } from "~/components/Toggle";
import { Button } from "./Button";

export function Note(props: { note: string }) {
  console.log("Note.tsx rendering");
  return (
    <Toggle>
      {/* @ts-ignore */}
      <Details note={props.note} />
      <Button />
    </Toggle>
  );
}
