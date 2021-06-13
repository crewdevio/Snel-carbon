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
  data-carbon-icon="AlignHorizontalRight16"
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
  <path d="M4 24V20a2.0023 2.0023 0 012-2H21a2.0023 2.0023 0 012 2v4a2.0023 2.0023 0 01-2 2H6A2.0023 2.0023 0 014 24zm2 0H21V20L6 19.9988zM12 12V8a2.0023 2.0023 0 012-2h7a2.0023 2.0023 0 012 2v4a2.0023 2.0023 0 01-2 2H14A2.0023 2.0023 0 0112 12zm2 0h7V8l-7-.0012z"></path><path d="M26 2H28V30H26z" transform="rotate(-180 27 16)"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>