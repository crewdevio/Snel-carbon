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
  data-carbon-icon="ListBoxes16"
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
  <path d="M16 8H30V10H16zM16 22H30V24H16zM10 14H4a2.0023 2.0023 0 01-2-2V6A2.0023 2.0023 0 014 4h6a2.0023 2.0023 0 012 2v6A2.0023 2.0023 0 0110 14zM4 6v6h6.0012L10 6zM10 28H4a2.0023 2.0023 0 01-2-2V20a2.0023 2.0023 0 012-2h6a2.0023 2.0023 0 012 2v6A2.0023 2.0023 0 0110 28zM4 20v6h6.0012L10 20z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>