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
  data-carbon-icon="PhoneFilled16"
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
  <path d="M20.33,21.48l2.24-2.24a2.19,2.19,0,0,1,2.34-.48l2.73,1.09a2.18,2.18,0,0,1,1.36,2v5A2.17,2.17,0,0,1,26.72,29C7.59,27.81,3.73,11.61,3,5.41A2.17,2.17,0,0,1,5.17,3H10a2.16,2.16,0,0,1,2,1.36l1.09,2.73a2.16,2.16,0,0,1-.47,2.34l-2.24,2.24S11.67,20.4,20.33,21.48Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>