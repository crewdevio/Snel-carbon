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
  data-carbon-icon="DrillBack20"
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
  <path d="M6 22L7.414 20.586 3.828 17 12 17 12 15 3.828 15 7.414 11.414 6 10 0 16 6 22z"></path><path d="M16,10a5.9815,5.9815,0,0,0-4.2427,1.7573L16,16l-4.2427,4.2427A6,6,0,1,0,16,10Z"></path><path d="M16,2A13.9581,13.9581,0,0,0,6.105,6.105L7.5188,7.5186a12,12,0,1,1,0,16.9628L6.105,25.895A13.9974,13.9974,0,1,0,16,2Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>