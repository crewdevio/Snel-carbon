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
  data-carbon-icon="Network_124"
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
  <path d="M16 20a4 4 0 114-4A4.0045 4.0045 0 0116 20zm0-6a2 2 0 102 2A2.0021 2.0021 0 0016 14zM5 20a4 4 0 114-4A4.0045 4.0045 0 015 20zm0-6a2 2 0 102 2A2.0023 2.0023 0 005 14zM10 31a4 4 0 114-4A4.0045 4.0045 0 0110 31zm0-6a2 2 0 102 2A2.0021 2.0021 0 0010 25zM22 31a4 4 0 114-4A4.0045 4.0045 0 0122 31zm0-6a2 2 0 102 2A2.0021 2.0021 0 0022 25zM27 20a4 4 0 114-4A4.0045 4.0045 0 0127 20zm0-6a2 2 0 102 2A2.0021 2.0021 0 0027 14zM22 9a4 4 0 114-4A4.0045 4.0045 0 0122 9zm0-6a2 2 0 102 2A2.0021 2.0021 0 0022 3zM10 9a4 4 0 114-4A4.0045 4.0045 0 0110 9zm0-6a2 2 0 102 2A2.0021 2.0021 0 0010 3z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>