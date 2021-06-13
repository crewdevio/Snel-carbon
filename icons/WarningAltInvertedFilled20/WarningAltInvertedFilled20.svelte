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
  data-carbon-icon="WarningAltInvertedFilled20"
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
  <path fill="none" d="M14.875,5h2.25V15h-2.25ZM16,21a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,21Z"></path><path d="M29.855,2.481A1.0011,1.0011,0,0,0,29,2H3a1,1,0,0,0-.8872,1.4614l13,25a1,1,0,0,0,1.7744,0l13-25A1.001,1.001,0,0,0,29.855,2.481ZM14.875,5h2.25V15h-2.25ZM16,21a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,21Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>