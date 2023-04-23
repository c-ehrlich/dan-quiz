import { Details } from "~/components/Details";
import { Toggle } from "./Toggle";

export function Note(props: { note: string }) {
  // @ts-ignore
  return <Toggle details={<Details note={props.note} />} />;
}
