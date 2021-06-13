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
  data-carbon-icon="Cafe24"
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
  <path d="M2 28H30V30H2zM24.5 11H8a2.002 2.002 0 00-2 2v8a5.0059 5.0059 0 005 5h8a5.0059 5.0059 0 005-5V20h.5a4.5 4.5 0 000-9zM22 21a3.0033 3.0033 0 01-3 3H11a3.0033 3.0033 0 01-3-3V13H22zm2.5-3H24V13h.5a2.5 2.5 0 010 5zM19 9H17V8.854a1.9883 1.9883 0 00-1.1055-1.7886L13.2109 5.7236A3.9788 3.9788 0 0111 2.146V1h2V2.146a1.9892 1.9892 0 001.1055 1.7886l2.6836 1.3418A3.9792 3.9792 0 0119 8.854z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>