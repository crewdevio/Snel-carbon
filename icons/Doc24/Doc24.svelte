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
  data-carbon-icon="Doc24"
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
  <path d="M30 23H24a2.0023 2.0023 0 01-2-2V11a2.002 2.002 0 012-2h6v2H24V21h6zM18 23H14a2.0023 2.0023 0 01-2-2V11a2.002 2.002 0 012-2h4a2.002 2.002 0 012 2V21A2.0023 2.0023 0 0118 23zM14 11V21h4V11zM6 23H2V9H6a4.0045 4.0045 0 014 4v6A4.0045 4.0045 0 016 23zM4 21H6a2.002 2.002 0 002-2V13a2.002 2.002 0 00-2-2H4z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>