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
  data-carbon-icon="HybridNetworking32"
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
  <path d="M17,24.1836V20H15v4.1836a3,3,0,1,0,2,0Z"></path><path d="M26,12a3.9962,3.9962,0,0,0-3.8579,3H9.8579a4,4,0,1,0,0,2H22.1421A3.9934,3.9934,0,1,0,26,12ZM6,18a2,2,0,1,1,2-2A2.0025,2.0025,0,0,1,6,18Zm20,0a2,2,0,1,1,2-2A2.0025,2.0025,0,0,1,26,18Z"></path><path d="M19,5a3,3,0,1,0-4,2.8164V12h2V7.8164A2.9917,2.9917,0,0,0,19,5Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>