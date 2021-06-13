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
  data-carbon-icon="Workspace20"
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
  <path d="M16 17v8H6V17H16m0-2H6a2 2 0 00-2 2v8a2 2 0 002 2H16a2 2 0 002-2V17a2 2 0 00-2-2zM27 6v5H17V6H27m0-2H17a2 2 0 00-2 2v5a2 2 0 002 2H27a2 2 0 002-2V6a2 2 0 00-2-2zM27 17v5H22V17h5m0-2H22a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2V17a2 2 0 00-2-2zM11 6v5H6V6h5m0-2H6A2 2 0 004 6v5a2 2 0 002 2h5a2 2 0 002-2V6a2 2 0 00-2-2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>