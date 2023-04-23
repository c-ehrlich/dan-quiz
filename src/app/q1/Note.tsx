import { Details } from "~/components/Details";
import { Toggle } from "./Toggle";

export function Note(props: { note: string }) {
  return (
    <Toggle>
      {/* @ts-ignore */}
      <Details note={props.note} />
    </Toggle>
  );
}
