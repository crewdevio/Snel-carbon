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
  data-carbon-icon="AlignVerticalBottom32"
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
  <path d="M2 26H30V28H2zM24 23H20a2.0023 2.0023 0 01-2-2V14a2.0023 2.0023 0 012-2h4a2.0023 2.0023 0 012 2v7A2.0023 2.0023 0 0124 23zm-4-9v7h4.0012L24 14zM12 23H8a2.0023 2.0023 0 01-2-2V6A2.0023 2.0023 0 018 4h4a2.0023 2.0023 0 012 2V21A2.0023 2.0023 0 0112 23zM8 6V21h4.0012L12 6z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>