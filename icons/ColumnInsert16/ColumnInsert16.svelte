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
  data-carbon-icon="ColumnInsert16"
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
  <path d="M28 30H22a2.0021 2.0021 0 01-2-2V10a2.0021 2.0021 0 012-2h6a2.0021 2.0021 0 012 2V28A2.0021 2.0021 0 0128 30zM22 10V28h6V10zM16 9L21.586 3.414 20.172 2 16 6.172 11.828 2 10.414 3.414 16 9zM10 30H4a2.0021 2.0021 0 01-2-2V10A2.0021 2.0021 0 014 8h6a2.0021 2.0021 0 012 2V28A2.0021 2.0021 0 0110 30zM4 10V28h6V10z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>