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
  data-carbon-icon="Deploy20"
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
  <path d="M23,2,17,8l1.4146,1.4023L22,5.8184V28H6V12H4V28a2.0025,2.0025,0,0,0,2,2H22a2.0025,2.0025,0,0,0,2-2V5.8154l3.5859,3.5869L29,8Z"></path><path d="M16,24H12a2.0023,2.0023,0,0,1-2-2V18a2.0023,2.0023,0,0,1,2-2h4a2.0023,2.0023,0,0,1,2,2v4A2.0023,2.0023,0,0,1,16,24Zm-4-6v4h4V18Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>