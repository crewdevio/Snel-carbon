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
  data-carbon-icon="Apps16"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="16" height="16"
  class={className}
  preserveAspectRatio="xMidYMid meet"
  {style}
  {id}
  {...attributes}>
  <path d="M4 2v2H2V2h2zm1-1H1v4h4V1zM9 2v2H7V2h2zm1-1H6v4h4V1zM14 2v2h-2V2h2zm1-1h-4v4h4V1zM4 7v2H2V7h2zm1-1H1v4h4V6zM9 7v2H7V7h2zm1-1H6v4h4V6zM14 7v2h-2V7h2zm1-1h-4v4h4V6zM4 12v2H2v-2h2zm1-1H1v4h4v-4zM9 12v2H7v-2h2zm1-1H6v4h4v-4zM14 12v2h-2v-2h2zm1-1h-4v4h4v-4z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>