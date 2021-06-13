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
  data-carbon-icon="MachineLearning24"
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
  <path d="M16 25a6.9908 6.9908 0 01-5.833-3.1287l1.666-1.1074a5.0007 5.0007 0 008.334 0l1.666 1.1074A6.9908 6.9908 0 0116 25zM20 14a2 2 0 102 2A1.9806 1.9806 0 0020 14zM12 14a2 2 0 102 2A1.9806 1.9806 0 0012 14z"></path><path d="M30,16V14H28V10a4.0045,4.0045,0,0,0-4-4H22V2H20V6H12V2H10V6H8a4.0045,4.0045,0,0,0-4,4v4H2v2H4v5H2v2H4v3a4.0045,4.0045,0,0,0,4,4H24a4.0045,4.0045,0,0,0,4-4V23h2V21H28V16ZM26,26a2.0023,2.0023,0,0,1-2,2H8a2.0023,2.0023,0,0,1-2-2V10A2.0023,2.0023,0,0,1,8,8H24a2.0023,2.0023,0,0,1,2,2Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>