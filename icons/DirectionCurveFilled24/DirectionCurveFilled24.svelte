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
  data-carbon-icon="DirectionCurveFilled24"
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
  <path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM22.5859,13.4141,18,8.8281v5.7686a5.0206,5.0206,0,0,1-1.0957,3.124l-2.2471,2.8086A3.01,3.01,0,0,0,14,22.4033V27H12V22.4033a5.0206,5.0206,0,0,1,1.0957-3.124l2.2471-2.8086A3.01,3.01,0,0,0,16,14.5967V8.8281l-4.5859,4.586L10,12l7-7,7,7Z"></path><path fill="none" d="M22.5859,13.4141,18,8.8281v5.7686a5.0206,5.0206,0,0,1-1.0957,3.124l-2.2471,2.8086A3.01,3.01,0,0,0,14,22.4033V27H12V22.4033a5.0206,5.0206,0,0,1,1.0957-3.124l2.2471-2.8086A3.01,3.01,0,0,0,16,14.5967V8.8281l-4.5859,4.586L10,12l7-7,7,7Z" data-icon-path="inner-path"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>