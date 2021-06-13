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
  data-carbon-icon="Application20"
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
  <path d="M16 18H6a2 2 0 01-2-2V6A2 2 0 016 4H16a2 2 0 012 2V16A2 2 0 0116 18zM6 6V16H16V6zM26 12v4H22V12h4m0-2H22a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V12a2 2 0 00-2-2zM26 22v4H22V22h4m0-2H22a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V22a2 2 0 00-2-2zM16 22v4H12V22h4m0-2H12a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2V22a2 2 0 00-2-2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>