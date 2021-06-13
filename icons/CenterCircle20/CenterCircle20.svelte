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
  data-carbon-icon="CenterCircle20"
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
  <path d="M30,15H27.9492A12.0071,12.0071,0,0,0,17,4.0508V2H15V4.0508A12.0071,12.0071,0,0,0,4.0508,15H2v2H4.0508A12.0071,12.0071,0,0,0,15,27.9492V30h2V27.9492A12.0071,12.0071,0,0,0,27.9492,17H30ZM17,25.9492V22H15v3.9492A10.0166,10.0166,0,0,1,6.0508,17H10V15H6.0508A10.0166,10.0166,0,0,1,15,6.0508V10h2V6.0508A10.0166,10.0166,0,0,1,25.9492,15H22v2h3.9492A10.0166,10.0166,0,0,1,17,25.9492Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>