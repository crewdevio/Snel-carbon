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
  data-carbon-icon="Network_224"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="24" height="24"
  class={className}
  preserveAspectRatio="xMidYMid meet"
  {style}
  {id}
  {...attributes}>
  <path d="M17,17h5.1421a4,4,0,1,0,0-2H17V7h5.1421a4,4,0,1,0,0-2H17a2.0023,2.0023,0,0,0-2,2v8H9.8579a4,4,0,1,0,0,2H15v8a2.0023,2.0023,0,0,0,2,2h5.1421a4,4,0,1,0,0-2H17Zm9-3a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,14ZM26,4a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,4ZM6,18a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,6,18Zm20,6a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,24Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>