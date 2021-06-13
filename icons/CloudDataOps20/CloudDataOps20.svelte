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
  data-carbon-icon="CloudDataOps20"
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
  <path d="M28 18H30V28H28zM24 14H26V28H24zM20 22H22V28H20zM22.175 10L23.76 8.7339A9.9522 9.9522 0 0017.89 5.1816 10.0025 10.0025 0 006.17 13.1152 7.5054 7.5054 0 00.0544 21.4087 7.6843 7.6843 0 007.7692 28H16V26H7.6945a5.632 5.632 0 01-5.6023-4.4858 5.5064 5.5064 0 014.4339-6.4307l1.3486-.2441.2139-1.11a8.206 8.206 0 016.7426-6.6426 7.9666 7.9666 0 013.0137.13A7.8037 7.8037 0 0122.175 10z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>