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
  data-carbon-icon="WatsonHealthPageScroll32"
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
  <path d="M16,28H4a1.89,1.89,0,0,1-2-2V14a1.89,1.89,0,0,1,2-2H16a1.89,1.89,0,0,1,2,2V26A1.89,1.89,0,0,1,16,28ZM4,14V26H16V14Z"></path><path d="M22,19H20V10H10V8H20a1.89,1.89,0,0,1,2,2Z"></path><path d="M26 14H24V6H16V4h8a1.89 1.89 0 012 2zM24 17L24 19 26.8 19 22 24.4 22 22 20 22 20 28 26 28 26 26 23.2 26 28 20.6 28 23 30 23 30 17 24 17z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>