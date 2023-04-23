export async function Content() {
  const contentData = await getContentData();
  return <div className="h-full bg-green-300">{contentData}</div>;
}

async function getContentData() {
  console.log("getContentData getting data");
  await new Promise((resolve) => setTimeout(resolve, 4000));
  console.log("getContentData got data");
  return `Content Data`;
}
