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
  data-carbon-icon="Mpeg20"
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
  <path d="M32 21H28a2.0023 2.0023 0 01-2-2V13a2.002 2.002 0 012-2h4v2H28v6h2V17H29l0-2h3zM24 13L24 11.024 18 11.024 18 21 24 21 24 19 20 19 20 17 22 17 22 15 20 15 20 13 24 13zM14 11H9V21h2V18h3a2.0027 2.0027 0 002-2V13A2.0023 2.0023 0 0014 11zm-3 5V13h3l.001 3zM7 11L5 11 3.5 15 2 11 0 11 0 21 2 21 2 14 3.5 18 5 14 5 21 7 21 7 11z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>