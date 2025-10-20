import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  default: {
    override: {
      wrapper: "cloudflare-node",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
});
