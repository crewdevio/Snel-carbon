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
  data-carbon-icon="WatsonHealth3DICa20"
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
  <path d="M15 14H10a2 2 0 01-2-2V4a2 2 0 01.59-1.42A3.57 3.57 0 0110 2h5V4H10v8h5zM4 6H6V14H4zM4 2H6V4H4zM27.45 19.11l-6-3a1 1 0 00-.9 0l-6 3A1 1 0 0014 20v7a1 1 0 00.55.89l6 3a1 1 0 00.9 0l6-3A1 1 0 0028 27V20A1 1 0 0027.45 19.11zm-6.45-1L24.76 20 21 21.88 17.24 20zm-5 3.5l4 2v4.76l-4-2zm6 6.76V23.62l4-2v4.76zM23 2H19a2 2 0 00-2 2V14h2V10h4v4h2V4A2 2 0 0023 2zM19 8V4h4V8z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>