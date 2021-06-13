<script>
  let className = undefined;
  export { className as class };
  export let id = undefined;
  export let tabindex = undefined;
  export let focusable = false;
  export let title = undefined;
  export let style = undefined;

  $: ariaLabel = $$props['aria-label'];
  $: ariaLabelledBy = $$props['aria-labelledby'];
  $: labelled = ariaLabel || ariaLabelledBy || title;
  $: attributes = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-hidden': labelled ? undefined : true,
    role: labelled ? 'img' : undefined,
    focusable: tabindex === '0' ? true : focusable,
    tabindex
  };
</script>

<svg
  data-carbon-icon="MeterAlt32"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32"
  class={className}
  preserveAspectRatio="xMidYMid meet"
  {style}
  {id}
  {...attributes}>
  <path d="M30 20a13.8535 13.8535 0 00-2.2291-7.5288l-1.4452 1.4453A11.8917 11.8917 0 0128 20zM28 9.414L26.5859 8 18.019 16.5669A3.9521 3.9521 0 0016 16a4 4 0 104 4 3.9533 3.9533 0 00-.5669-2.0191zM16 22a2 2 0 112-2A2.0023 2.0023 0 0116 22zM16 8a11.9086 11.9086 0 016.0833 1.6743l1.4536-1.4536A13.9773 13.9773 0 002 20H4A12.0137 12.0137 0 0116 8z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>