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
  data-carbon-icon="WaveHeight16"
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
  <path d="M24 2H30V4H24zM24 8H28V10H24zM24 14H30V16H24zM24 20H28V22H24z"></path><path d="M30,28H24a10.0349,10.0349,0,0,1-6.9268-17.2622A11.9629,11.9629,0,0,0,12.9937,10a6.9027,6.9027,0,0,0-6.0308,3.42C4.9966,16.4348,4,21.34,4,28H2c0-7.0542,1.106-12.3274,3.2871-15.6726A8.906,8.906,0,0,1,12.9937,8h.0068a14.762,14.762,0,0,1,6.4619,1.592,1,1,0,0,1,.0869,1.7222A8.0249,8.0249,0,0,0,24,26h6Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>