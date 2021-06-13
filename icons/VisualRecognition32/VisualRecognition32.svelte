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
  data-carbon-icon="VisualRecognition32"
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
  <circle cx="23" cy="12" r="2"></circle><path d="M28,5H16.24A8,8,0,1,0,6,16.92V27a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V7A2,2,0,0,0,28,5ZM4,10A6,6,0,0,1,15.19,7H8V9h7.91A6.64,6.64,0,0,1,16,10a6.64,6.64,0,0,1-.09,1H10v2h5.19A6,6,0,0,1,4,10ZM28,27H8l5-5,1.59,1.59a2,2,0,0,0,2.82,0L23,18l5,5Zm0-6.83-3.59-3.59a2,2,0,0,0-2.82,0L16,22.17l-1.59-1.59a2,2,0,0,0-2.82,0L8,24.17V17.74A8.24,8.24,0,0,0,10,18a8,8,0,0,0,8-8,7.9,7.9,0,0,0-.59-3H28Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>