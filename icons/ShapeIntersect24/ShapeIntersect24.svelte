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
  data-carbon-icon="ShapeIntersect24"
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
  <path d="M28,10H22V4a2.0025,2.0025,0,0,0-2-2H4A2.0025,2.0025,0,0,0,2,4V20a2.0025,2.0025,0,0,0,2,2h6v6a2.0025,2.0025,0,0,0,2,2H28a2.0025,2.0025,0,0,0,2-2V12A2.0025,2.0025,0,0,0,28,10ZM4,20V4H20v6H12a2.0025,2.0025,0,0,0-2,2v8Zm8,8V22h8a2.0025,2.0025,0,0,0,2-2V12h6V28Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>