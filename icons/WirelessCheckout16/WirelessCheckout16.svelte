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
  data-carbon-icon="WirelessCheckout16"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="16" height="16"
  class={className}
  preserveAspectRatio="xMidYMid meet"
  {style}
  {id}
  {...attributes}>
  <path d="M18,28V26A10,10,0,0,0,28,16h2A12,12,0,0,1,18,28Z"></path><path d="M18,23V21a5,5,0,0,0,5-5h2A7,7,0,0,1,18,23Z"></path><path d="M27,11H21V7a3,3,0,0,0-3-3H12A3,3,0,0,0,9,7v4H3a1,1,0,0,0-1,1.15L3.88,24.3a2,2,0,0,0,2,1.7H15V24H5.86L4.17,13H27ZM11,7a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v4H11Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>