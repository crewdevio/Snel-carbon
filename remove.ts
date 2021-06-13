import { walk } from "https://deno.land/std@0.98.0/fs/walk.ts";

for await (const file of walk("./icons", { exts: [".js", ".d.ts"] })) {
  if ((file.name === "index.js" || file.name === "index.d.ts") && file.isFile) {
    await Deno.remove(file.path);
  }
}


for await (const file of walk("./components", { exts: [".js", ".d.ts"] })) {
  if ((file.name === "index.js" || file.name === "index.d.ts") && file.isFile) {
    await Deno.remove(file.path);
  }
}