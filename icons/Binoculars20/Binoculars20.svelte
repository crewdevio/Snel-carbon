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
  data-carbon-icon="Binoculars20"
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
  <path d="M28,8V5a1,1,0,0,0-1-1H21a1,1,0,0,0-1,1V8a2,2,0,0,0-2,2v2H14V10a2,2,0,0,0-2-2V5a1,1,0,0,0-1-1H5A1,1,0,0,0,4,5V8a2,2,0,0,0-2,2V22a2,2,0,0,0,1,1.72V27a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23.72A2,2,0,0,0,14,22V20h4v2a2,2,0,0,0,1,1.72V27a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23.72A2,2,0,0,0,30,22V10A2,2,0,0,0,28,8ZM11,26H5V24h6Zm1-4H4V10H6V6h4v4h2Zm2-4V14h4v4Zm13,8H21V24h6Zm1-4H20V10h2V6h4v4h2Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>