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
  data-carbon-icon="EdgeNode20"
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
  <path d="M22 6H26V10H22z"></path><circle cx="7" cy="7" r="1"></circle><circle cx="25" cy="25" r="1"></circle><circle cx="25" cy="21" r="1"></circle><circle cx="25" cy="17" r="1"></circle><path d="M22,17V15H20V14a2.0023,2.0023,0,0,0-2-2H17V10H15v2H13V10H11v2H10a2.0023,2.0023,0,0,0-2,2v1H6v2H8v2H6v2H8v1a2.0023,2.0023,0,0,0,2,2h1v2h2V24h2v2h2V24h1a2.0023,2.0023,0,0,0,2-2V21h2V19H20V17Zm-4,5H10V14h8Z"></path><path d="M28,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H28a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,28,30ZM4,4V28H28V4Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>