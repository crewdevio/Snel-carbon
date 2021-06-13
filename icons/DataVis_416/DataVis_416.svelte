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
  data-carbon-icon="DataVis_416"
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
  <path d="M27,3H5A2.002,2.002,0,0,0,3,5V27a2.0023,2.0023,0,0,0,2,2H27a2.0027,2.0027,0,0,0,2-2V5A2.0023,2.0023,0,0,0,27,3Zm0,6H17V5H27ZM15,27H11V23h4Zm0-6H11V17h4ZM9,21H5V17H9Zm2-6V11H21v4Zm0-6V5h4V9Zm12,2h4l0,4H23ZM9,5V15H5V5ZM5,23H9v4H5Zm12,4V17H27.001l.001,10Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>