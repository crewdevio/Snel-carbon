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
  data-carbon-icon="IbmSecurity20"
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
  <path d="M16,.0005,4,5.9784V20.0443a12,12,0,0,0,24,0V5.9784Zm6.83,27.3138L16,23.9119V26.14l5.0361,2.5088A10.0025,10.0025,0,0,1,6,20.0443V7.21L16,2.2284,26,7.21v3.75L16,5.9783V8.2062l10,4.9816v3.75L16,11.9562v2.2279l10,4.9815v.8787a9.9045,9.9045,0,0,1-.37,2.6871L16,17.934v2.2279l8.8952,4.4313A10.0252,10.0252,0,0,1,22.83,27.3143Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>