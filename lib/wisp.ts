

let wispClient: any = null;

async function getWispClient() {
  if (!wispClient) {
    const { buildWispClient } = await import('@wisp-cms/client');
    wispClient = buildWispClient({
      baseUrl: "https://www.wisp.blog",
      blogId: "cm2w280s9001cdufrgi9sccgg", // 请替换为您的实际 Blog ID
    });
  }
  return wispClient;
}

export { getWispClient };