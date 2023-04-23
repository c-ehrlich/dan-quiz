let foo = 0;

export async function Details(props: { note: string }) {
  console.log("Details.tsx getting details");
  const details = await getDetails(props.note);
  console.log("Details.tsx got details");
  return <div>{details}</div>;
}

async function getDetails(note: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  foo++;
  return `Details for ${note} ${foo}`;
}
