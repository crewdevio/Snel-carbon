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
  data-carbon-icon="TableBuilt20"
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
  <path d="M28,8H24V4a2.0025,2.0025,0,0,0-2-2H4A2.0025,2.0025,0,0,0,2,4V22a2.0025,2.0025,0,0,0,2,2H8v4a2.0025,2.0025,0,0,0,2,2H28a2.0025,2.0025,0,0,0,2-2V10A2.0025,2.0025,0,0,0,28,8ZM22,22H14V17h8Zm0-7H14V10h8ZM12,15H4V10h8ZM22,4V8H4V4ZM4,22V17h8v5Zm24,6H10V24H22a2.0025,2.0025,0,0,0,2-2V10h4Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>