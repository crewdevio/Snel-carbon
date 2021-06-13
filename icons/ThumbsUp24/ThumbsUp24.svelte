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
  data-carbon-icon="ThumbsUp24"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="24" height="24"
  class={className}
  preserveAspectRatio="xMidYMid meet"
  {style}
  {id}
  {...attributes}>
  <path d="M26,11H20V6a3.64,3.64,0,0,0-3.24-4A3.22,3.22,0,0,0,16,2H14.43A1.51,1.51,0,0,0,13,3.17v.12L12,9.63,8.46,15H2V29H21c7.44,0,9-4.35,9-8V15a3.64,3.64,0,0,0-3.24-4A3.22,3.22,0,0,0,26,11ZM8,27H4V17H8Zm20-6c0,4.09-2.22,6-7,6H10V16.3l4-5.93L14.73,5l.14-1H16c1.44,0,2,.56,2,2v7h8c1.44,0,2,.56,2,2Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>