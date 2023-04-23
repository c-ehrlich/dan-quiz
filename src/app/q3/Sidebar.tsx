export async function Sidebar() {
  const sidebarData = await getSidebarData();
  return <div className="h-full bg-yellow-300">{sidebarData}</div>;
}

async function getSidebarData() {
  console.log("getSidebarData getting data");
  await new Promise((resolve) => setTimeout(resolve, 4000));
  console.log("getSidebarData got data");
  return `Sidebar Data`;
}
