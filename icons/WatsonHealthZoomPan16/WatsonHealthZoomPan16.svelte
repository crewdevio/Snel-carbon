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
  data-carbon-icon="WatsonHealthZoomPan16"
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
  <path d="M27.01 12L25.6 13.41 28.18 16 25.59 18.59 27.01 20 31.01 16 27.01 12zM6.41 13.42L5 12 1 16 5 20 6.42 18.59 3.83 16 6.41 13.42zM16 28.17L13.41 25.58 12 27 16 31 20 27 18.59 25.59 16 28.17zM16 3.83L18.58 6.41 20 5 16 1 12 5 13.41 6.42 16 3.83zM22 16a6 6 0 10-2.53 4.89l3.82 3.82 1.42-1.42-3.82-3.82A6 6 0 0022 16zm-6 4a4 4 0 114-4A4 4 0 0116 20z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>