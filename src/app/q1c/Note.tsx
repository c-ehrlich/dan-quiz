import { DifferentToggle } from "./Toggle";

export function Note(props: { note: string }) {
  // @ts-ignore
  return <DifferentToggle note={props.note} />;
}
