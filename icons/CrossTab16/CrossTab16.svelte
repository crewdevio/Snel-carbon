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
  data-carbon-icon="CrossTab16"
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
  <path d="M28,2H10A2.0023,2.0023,0,0,0,8,4V7H4A2.0023,2.0023,0,0,0,2,9V28a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V4A2.0023,2.0023,0,0,0,28,2ZM10,4H28V7H10ZM28,14H20V9h8ZM10,21V16h8v5Zm8,2v5H10V23ZM8,21H4V16H8ZM18,9v5H10V9Zm2,7h8v5H20ZM8,9v5H4V9ZM4,23H8v5H4Zm16,5V23h8v5Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>