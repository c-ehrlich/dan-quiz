import { Content } from "./Content";
import { Container } from "./Container";
import { Sidebar } from "./Sidebar";

export default function Question3() {
  return (
    <Container
      // @ts-ignore
      left={<Sidebar />}
      // @ts-ignore
      right={<Content />}
    />
  );
}
