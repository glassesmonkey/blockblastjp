

let wispClient: any = null;

async function getWispClient() {
  if (!wispClient) {
    const { buildWispClient } = await import('@wisp-cms/client');
    wispClient = buildWispClient({
      baseUrl: "https://www.wisp.blog",
      blogId: "330a62fc-d380-4a8c-ab59-a5ebf290609a", // 请替换为您的实际 Blog ID
    });
  }
  return wispClient;
}

export { getWispClient };