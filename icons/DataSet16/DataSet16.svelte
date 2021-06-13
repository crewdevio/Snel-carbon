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
  data-carbon-icon="DataSet16"
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
  <path d="M25 13L25 4 23 4 23 6 20 6 20 8 23 8 23 13 20 13 20 15 28 15 28 13 25 13zM8.5 6A3.5 3.5 0 115 9.5 3.5 3.5 0 018.5 6m0-2A5.5 5.5 0 1014 9.5 5.5 5.5 0 008.5 4zM8.5 20A3.5 3.5 0 115 23.5 3.5 3.5 0 018.5 20m0-2A5.5 5.5 0 1014 23.5 5.5 5.5 0 008.5 18zM23.5 20A3.5 3.5 0 1120 23.5 3.5 3.5 0 0123.5 20m0-2A5.5 5.5 0 1029 23.5 5.5 5.5 0 0023.5 18z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>