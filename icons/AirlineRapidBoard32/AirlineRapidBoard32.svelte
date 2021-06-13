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
  data-carbon-icon="AirlineRapidBoard32"
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
  <path d="M18 23H16V21a3.0033 3.0033 0 00-3-3H9a3.0033 3.0033 0 00-3 3v2H4V21a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM11 6A3 3 0 118 9a3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0011 4zM2 26H30V28H2zM30 8L28 8 28 6 26 6 26 4 30 4 30 8zM19 4L23 4 23 6 21 6 21 8 19 8 19 4zM28 13H30V15H28zM26 11H28V13H26zM19 11L21 11 21 13 23 13 23 15 19 15 19 11z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>