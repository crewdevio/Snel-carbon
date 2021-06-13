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
  data-carbon-icon="ContentView32"
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
  <circle cx="16" cy="19" r="2"></circle><path d="M23.7769,18.4785A8.64,8.64,0,0,0,16,13a8.64,8.64,0,0,0-7.7769,5.4785L8,19l.2231.5215A8.64,8.64,0,0,0,16,25a8.64,8.64,0,0,0,7.7769-5.4785L24,19ZM16,23a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,23Z"></path><path d="M27,3H5A2,2,0,0,0,3,5V27a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V5A2,2,0,0,0,27,3ZM5,5H27V9H5ZM5,27V11H27V27Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>