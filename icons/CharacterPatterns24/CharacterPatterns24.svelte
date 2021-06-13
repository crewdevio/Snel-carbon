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
  data-carbon-icon="CharacterPatterns24"
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
  <path d="M6 26V17.8281l-3.5859 3.586L1 20l6-6 6 6-1.4141 1.4141L8 17.8281V26H18v2H8A2.0024 2.0024 0 016 26zM30 22L30 20 22 20 22 22 27.5 22 22 28 22 30 30 30 30 28 24.507 28 30 22zM26 6v8.1719l3.5859-3.586L31 12l-6 6-6-6 1.4141-1.4141L24 14.1719V6H14V4H24A2.0024 2.0024 0 0126 6zM8 2H3V4H8V6H4A2 2 0 002 8v2a2 2 0 002 2h6V4A2.0023 2.0023 0 008 2zm0 8H4V8H8z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>