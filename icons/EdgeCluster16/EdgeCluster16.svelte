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
  data-carbon-icon="EdgeCluster16"
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
  <path d="M16 7a3 3 0 113-3A3.0033 3.0033 0 0116 7zm0-4a1 1 0 101 1A1.001 1.001 0 0016 3zM11 30a3 3 0 113-3A3.0033 3.0033 0 0111 30zm0-4a1 1 0 101 1A1.001 1.001 0 0011 26zM7 11a3 3 0 113-3A3.0033 3.0033 0 017 11zM7 7A1 1 0 108 8 1.001 1.001 0 007 7zM21 30a3 3 0 113-3A3.0033 3.0033 0 0121 30zm0-4a1 1 0 101 1A1.001 1.001 0 0021 26zM25 11a3 3 0 113-3A3.0033 3.0033 0 0125 11zm0-4a1 1 0 101 1A1.001 1.001 0 0025 7zM4 21a3 3 0 113-3A3.0033 3.0033 0 014 21zm0-4a1 1 0 101 1A1.001 1.001 0 004 17zM28 21a3 3 0 113-3A3.0033 3.0033 0 0128 21zm0-4a1 1 0 101 1A1.001 1.001 0 0028 17zM16 22a6 6 0 116-6A6.0069 6.0069 0 0116 22zm0-10a4 4 0 104 4A4.0045 4.0045 0 0016 12z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>