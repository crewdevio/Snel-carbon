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
  data-carbon-icon="Overlay20"
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
  <path d="M28,8H24V4a2.0023,2.0023,0,0,0-2-2H4A2.0023,2.0023,0,0,0,2,4V22a2.0023,2.0023,0,0,0,2,2H8v4a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V10A2.0023,2.0023,0,0,0,28,8ZM4,22V4H22V8H10a2.0023,2.0023,0,0,0-2,2V22Zm18,0H19.4141L10,12.586V10h2.5859l9.4153,9.4156ZM10,15.4141,16.5859,22H10ZM22.001,16.587,15.4141,10H22ZM10,28V24H22a2.0023,2.0023,0,0,0,2-2V10h4V28Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>