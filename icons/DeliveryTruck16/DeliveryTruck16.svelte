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
  data-carbon-icon="DeliveryTruck16"
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
  <path d="M29.92,16.61l-3-7A1,1,0,0,0,26,9H23V7a1,1,0,0,0-1-1H3A1,1,0,0,0,2,7V24a1,1,0,0,0,1,1H5.14a4,4,0,0,0,7.72,0h6.28a4,4,0,0,0,7.72,0H29a1,1,0,0,0,1-1V17A1,1,0,0,0,29.92,16.61ZM23,11h2.34l2.14,5H23ZM9,26a2,2,0,1,1,2-2A2,2,0,0,1,9,26Zm10.14-3H12.86a4,4,0,0,0-7.72,0H4V8H21V20.56A4,4,0,0,0,19.14,23ZM23,26a2,2,0,1,1,2-2A2,2,0,0,1,23,26Zm5-3H26.86A4,4,0,0,0,23,20V18h5Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>