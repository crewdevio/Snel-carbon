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
  data-carbon-icon="Theater16"
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
  <path d="M20 25a6.9908 6.9908 0 01-5.833-3.1287l1.666-1.1074a5.0007 5.0007 0 008.334 0l1.666 1.1074A6.9908 6.9908 0 0120 25zM24 14a2 2 0 102 2A1.9806 1.9806 0 0024 14zM16 14a2 2 0 102 2A1.9806 1.9806 0 0016 14z"></path><path d="M28,8H22V4a2.0023,2.0023,0,0,0-2-2H4A2.0023,2.0023,0,0,0,2,4V14a10.01,10.01,0,0,0,8.8027,9.9214A9.9989,9.9989,0,0,0,30,20V10A2.0023,2.0023,0,0,0,28,8ZM4,14V4H20V8H12a2.0023,2.0023,0,0,0-2,2V20a9.9628,9.9628,0,0,0,.168,1.78A8.0081,8.0081,0,0,1,4,14Zm24,6a8,8,0,0,1-16,0V10H28Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>