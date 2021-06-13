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
  data-carbon-icon="ReflectHorizontal24"
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
  <path d="M19.386,15.2105l9-7A1,1,0,0,1,30,9V23a1,1,0,0,1-1.614.79l-9-7a1,1,0,0,1,0-1.5791Z"></path><path d="M15 2H17V30H15z" transform="rotate(-180 16 16)"></path><path d="M13,16a1.001,1.001,0,0,1-.386.79l-9,7A1,1,0,0,1,2,23V9a1,1,0,0,1,1.614-.79l9,7A1.001,1.001,0,0,1,13,16ZM4,20.9556,10.3711,16,4,11.0444Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>