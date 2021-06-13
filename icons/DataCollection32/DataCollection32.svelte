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
  data-carbon-icon="DataCollection32"
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
  <circle cx="16" cy="16" r="2"></circle><path d="M30 17L30 15 23.83 15 26.41 12.41 25 11 20 16 25 21 26.41 19.59 23.83 17 30 17zM15 23.83L15 30 17 30 17 23.83 19.59 26.41 21 25 16 20 11 25 12.41 26.41 15 23.83zM7 11L5.59 12.41 8.17 15 2 15 2 17 8.17 17 5.59 19.59 7 21 12 16 7 11zM17 8.17L17 2 15 2 15 8.17 12.41 5.59 11 7 16 12 21 7 19.59 5.59 17 8.17z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>