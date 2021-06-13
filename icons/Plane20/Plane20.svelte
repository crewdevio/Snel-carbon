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
  data-carbon-icon="Plane20"
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
  <path d="M29.37,14.75,20,10V6a4,4,0,0,0-8,0v4L2.63,14.75a1,1,0,0,0-.63.93v5a1,1,0,0,0,1,1,1,1,0,0,0,.29-.05L12,18v5L8.55,24.72a1,1,0,0,0-.55.9V29a1,1,0,0,0,1,1,.9.9,0,0,0,.28,0L16,28l6.72,2A.9.9,0,0,0,23,30a1,1,0,0,0,1-1V25.62a1,1,0,0,0-.55-.9L20,23V18l8.71,3.61a1,1,0,0,0,.29.05,1,1,0,0,0,1-1v-5A1,1,0,0,0,29.37,14.75ZM28,19.15,18,15v9.24l4,2v1.43l-6-1.75-6,1.75V26.24l4-2V15L4,19.15V16.3l10-5.07V6a2,2,0,0,1,4,0v5.23L28,16.3Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>