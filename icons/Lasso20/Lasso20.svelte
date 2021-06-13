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
  data-carbon-icon="Lasso20"
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
  <path d="M20,2H12A9.9842,9.9842,0,0,0,7.0349,20.6553C7.0249,20.7705,7,20.8818,7,21a3.9929,3.9929,0,0,0,2.9106,3.83A4.0049,4.0049,0,0,1,6,28H4v2H6a6.0044,6.0044,0,0,0,5.928-5.12,3.9966,3.9966,0,0,0,2.93-2.88H20A10,10,0,0,0,20,2ZM11,23a2,2,0,1,1,2-2A2.0025,2.0025,0,0,1,11,23Zm9-3H14.8579a3.9841,3.9841,0,0,0-7.15-1.2637A7.99,7.99,0,0,1,12,4h8a8,8,0,0,1,0,16Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>