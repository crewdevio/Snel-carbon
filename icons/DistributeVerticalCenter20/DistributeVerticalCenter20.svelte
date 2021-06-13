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
  data-carbon-icon="DistributeVerticalCenter20"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="20" height="20"
  class={className}
  preserveAspectRatio="xMidYMid meet"
  {style}
  {id}
  {...attributes}>
  <path d="M30 21H26V20a2.0023 2.0023 0 00-2-2H8a2.0023 2.0023 0 00-2 2v1H2v2H6v1a2.0023 2.0023 0 002 2H24a2.0023 2.0023 0 002-2V23h4zm-6 3H8V20l16-.001zM30 9H22V8a2.0023 2.0023 0 00-2-2H12a2.0023 2.0023 0 00-2 2V9H2v2h8v1a2.0023 2.0023 0 002 2h8a2.0023 2.0023 0 002-2V11h8zM20 12H12V8l8-.001z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>