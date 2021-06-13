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
  data-carbon-icon="WatsonHealthCdCreateExchange16"
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
  <circle cx="14" cy="14" r="2"></circle><path d="M14,2a12,12,0,0,0,0,24V24A10,10,0,1,1,24,14,8.27,8.27,0,0,1,24,15h2c0-.33.05-.66.05-1A12,12,0,0,0,14,2Z"></path><path d="M17 24L26.17 24 23.58 26.59 25 28 30 23 25 18 23.58 19.42 26.17 22 17 22 17 24zM14 20a6 6 0 116-6A6 6 0 0114 20zm0-10a4 4 0 104 4A4 4 0 0014 10z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>