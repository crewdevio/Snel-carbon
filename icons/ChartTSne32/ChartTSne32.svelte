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
  data-carbon-icon="ChartTSne32"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32"
  class={className}
  preserveAspectRatio="xMidYMid meet"
  {style}
  {id}
  {...attributes}>
  <circle cx="10" cy="20" r="2"></circle><circle cx="10" cy="28" r="2"></circle><circle cx="10" cy="14" r="2"></circle><circle cx="28" cy="4" r="2"></circle><circle cx="22" cy="6" r="2"></circle><circle cx="28" cy="10" r="2"></circle><circle cx="20" cy="12" r="2"></circle><circle cx="28" cy="22" r="2"></circle><circle cx="26" cy="28" r="2"></circle><circle cx="20" cy="26" r="2"></circle><circle cx="22" cy="20" r="2"></circle><circle cx="16" cy="4" r="2"></circle><circle cx="4" cy="24" r="2"></circle><circle cx="4" cy="16" r="2"></circle>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>