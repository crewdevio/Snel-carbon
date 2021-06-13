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
  data-carbon-icon="SailboatCoastal32"
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
  <path d="M24.7808,26,25.97,21.2422A1,1,0,0,0,25,20H20V17h5a1,1,0,0,0,.9082-1.4189l-6-13a1.0006,1.0006,0,0,0-1.7021-.19L8.2075,15.3906A1,1,0,0,0,9,17h9v3H7a1,1,0,0,0-.97,1.2422L7.2192,26H2v2H30V26ZM20,7.5527,23.437,15H20ZM11.0308,15,18,5.94V15ZM22.7192,26H9.2808l-1-4H23.7192Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>