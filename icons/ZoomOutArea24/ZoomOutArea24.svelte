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
  data-carbon-icon="ZoomOutArea24"
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
  <path d="M16 19H24V21H16z"></path><path d="M31 29.5859l-4.6885-4.6884a8.028 8.028 0 10-1.414 1.414L29.5859 31zM20 26a6 6 0 116-6A6.0066 6.0066 0 0120 26zM4 8H2V4A2.0021 2.0021 0 014 2H8V4H4zM26 8H24V4H20V2h4a2.0021 2.0021 0 012 2zM12 2H16V4H12zM8 26H4a2.0021 2.0021 0 01-2-2V20H4v4H8zM2 12H4V16H2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>