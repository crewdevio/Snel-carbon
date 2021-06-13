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
  data-carbon-icon="WatsonHealth3DCurveAutoColon32"
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
  <path d="M9.5,8H20.1a5,5,0,1,0,0-2H9.5a5.5,5.5,0,0,0,0,11h11a3.5,3.5,0,0,1,0,7H11.9a5,5,0,1,0,0,2h8.6a5.5,5.5,0,0,0,0-11H9.5a3.5,3.5,0,0,1,0-7ZM25,4a3,3,0,1,1-3,3A3,3,0,0,1,25,4ZM7,28a3,3,0,1,1,3-3A3,3,0,0,1,7,28Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>