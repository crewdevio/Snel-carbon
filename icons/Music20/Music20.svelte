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
  data-carbon-icon="Music20"
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
  <path d="M25,4H10A2.002,2.002,0,0,0,8,6V20.5563A3.9551,3.9551,0,0,0,6,20a4,4,0,1,0,4,4V12H25v8.5562A3.9545,3.9545,0,0,0,23,20a4,4,0,1,0,4,4V6A2.0023,2.0023,0,0,0,25,4ZM6,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,6,26Zm17,0a2,2,0,1,1,2-2A2.0027,2.0027,0,0,1,23,26ZM10,6H25v4H10Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>