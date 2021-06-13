# Snel-carbon

Snel Carbon is a port from [Carbon Components Svelte](https://github.com/IBM/carbon-components-svelte) and [Carbon Icons Svelte](https://github.com/IBM/carbon-icons-svelte) library that implements the [Carbon Design](https://www.carbondesignsystem.com/) System, an open source design system by IBM.

## How to use?

all you need to use Snel carbon is to import whatever component you want to use.

`url schema`

```
https://denopkg.com/crewdevio/Snel-carbon@main/{target}/{scope}/{name}.svelte
```

```javascript
target = "components" | "icons"
scope = /* example */ "Button"
name = /* component target: example */ "Button.svelte"
```
`url example`
```
https://denopkg.com/crewdevio/Snel-carbon@main/Button/Button.svelte
```

## Use example

```html
<script>
  import Button from "https://denopkg.com/crewdevio/Snel-carbon@main/components/Button/Button.svelte";
</script>

<main>
  <Button>Click me!</Button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
```

- [Components usage documentation](https://carbon-svelte.vercel.app/)
- [Icons usage documentation](https://ibm.github.io/carbon-icons-svelte/)
