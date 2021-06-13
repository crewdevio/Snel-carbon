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
  data-carbon-icon="Keyboard20"
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
  <path d="M28,26H4a2,2,0,0,1-2-2V10A2,2,0,0,1,4,8H28a2,2,0,0,1,2,2V24A2,2,0,0,1,28,26ZM4,10V24H28V10Z"></path><path d="M10 20H21V22H10zM6 12H8V14H6zM10 12H12V14H10zM14 12H16V14H14zM18 12H20V14H18zM6 20H8V22H6zM6 16H8V18H6zM10 16H12V18H10zM14 16H16V18H14zM22 12H26V14H22zM22 16H26V18H22zM18 16H20V18H18zM23 20H26V22H23z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>