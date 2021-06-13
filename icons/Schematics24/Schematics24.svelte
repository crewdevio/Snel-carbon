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
  data-carbon-icon="Schematics24"
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
  <path d="M27,19.001A4.0056,4.0056,0,0,0,22.9991,15H9.0011A2.0031,2.0031,0,0,1,7,12.9991V9.858A3.9949,3.9949,0,0,0,9.8581,7h12.284a4,4,0,1,0,0-2H9.8581A3.9916,3.9916,0,1,0,5,9.858v3.1411A4.0057,4.0057,0,0,0,9.0011,17h13.998A2.003,2.003,0,0,1,25,19.001V22H22v3H9.8581a4,4,0,1,0,0,2H22v3h8V22H27ZM26,4a2,2,0,1,1-2,2A2.0019,2.0019,0,0,1,26,4ZM4,6A2,2,0,1,1,6,8,2.0019,2.0019,0,0,1,4,6ZM6,28a2,2,0,1,1,2-2A2.002,2.002,0,0,1,6,28Zm22-4v4H24V24Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>