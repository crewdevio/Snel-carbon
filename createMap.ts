import { dirname } from "https://deno.land/std@0.98.0/path/mod.ts";
import { walk } from "https://deno.land/std@0.98.0/fs/walk.ts";

const components = new Map<string, string>();
const icons = new Map<string, string>();

for await (const file of walk("./components/", { exts: ["svelte"] })) {
  const baseUrl = "https://denopkg.com/crewdevio/snel-carbon@main/components";

  const dirName = dirname(
    file.path.replace("components\\", "").replaceAll("\\", "/")
  );

  if (`${dirName}.svelte` === file.name) {
    components.set(
      `snel-carbon/components/${dirName}`,
      `${baseUrl}/${dirName}/${file.name}`
    );
  }

  components.set(
    `snel-carbon/components/${dirName}/${file.name}`,
    `${baseUrl}/${dirName}/${file.name}`
  );
}

for await (const file of walk("./icons/", { exts: ["svelte"] })) {
  const baseUrl = "https://denopkg.com/crewdevio/snel-carbon@main/icons";

  const dirName = dirname(
    file.path.replace("icons\\", "").replaceAll("\\", "/")
  );

  if (`${dirName}.svelte` === file.name) {
    icons.set(
      `snel-carbon/icons/${dirName}`,
      `${baseUrl}/${dirName}/${file.name}`
    );
  }

  icons.set(
    `snel-carbon/icons/${dirName}/${file.name}`,
    `${baseUrl}/${dirName}/${file.name}`
  );
}

await Deno.writeTextFile(
  "./components.map.json",
  JSON.stringify(
    { imports: Object.fromEntries(components) },
    null,
    2
  )
);

await Deno.writeTextFile(
  "./icons.map.json",
  JSON.stringify({ imports: Object.fromEntries(icons) }, null, 2)
);
