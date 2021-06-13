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
  data-carbon-icon="GroupPresentation20"
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
  <path d="M10 30H8V27H4v3H2V27a2.0023 2.0023 0 012-2H8a2.0023 2.0023 0 012 2zM30 30H28V27H24v3H22V27a2.0023 2.0023 0 012-2h4a2.0023 2.0023 0 012 2zM20 30H18V27H14v3H12V27a2.0023 2.0023 0 012-2h4a2.0023 2.0023 0 012 2z"></path><circle cx="16" cy="22" r="2"></circle><circle cx="6" cy="22" r="2"></circle><circle cx="26" cy="22" r="2"></circle><circle cx="21" cy="18" r="2"></circle><circle cx="11" cy="18" r="2"></circle><path d="M26,14H6a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,6,2H26a2.0023,2.0023,0,0,1,2,2v8A2.0023,2.0023,0,0,1,26,14ZM6,4v8H26V4Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>