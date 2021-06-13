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
  data-carbon-icon="ChartNetwork16"
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
  <path d="M26,14a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2H20a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h2v4.1A5,5,0,0,0,18.1,22H14V20a2,2,0,0,0-2-2H10V13.9a5,5,0,1,0-2,0V18H6a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V24h4.1A5,5,0,1,0,24,18.1V14ZM6,9a3,3,0,1,1,3,3A3,3,0,0,1,6,9Zm6,17H6V20h6Zm14-3a3,3,0,1,1-3-3A3,3,0,0,1,26,23ZM20,6h6v6H20Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>