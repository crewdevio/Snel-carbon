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
  data-carbon-icon="AlignVerticalCenter32"
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
  <path d="M30,15H26V12a2.0025,2.0025,0,0,0-2-2H20a2.0025,2.0025,0,0,0-2,2v3H14V8a2.0025,2.0025,0,0,0-2-2H8A2.0025,2.0025,0,0,0,6,8v7H2v2H6v7a2.0025,2.0025,0,0,0,2,2h4a2.0025,2.0025,0,0,0,2-2V17h4v3a2.0025,2.0025,0,0,0,2,2h4a2.0025,2.0025,0,0,0,2-2V17h4ZM8,24V8h4l.0012,16Zm12-4V12h4l.0012,8Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>