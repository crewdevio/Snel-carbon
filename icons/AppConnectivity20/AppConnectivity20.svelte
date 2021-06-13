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
  data-carbon-icon="AppConnectivity20"
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
  <path d="M20,14h8a2.0023,2.0023,0,0,0,2-2V4a2.0023,2.0023,0,0,0-2-2H20a2.0023,2.0023,0,0,0-2,2H9A2.0023,2.0023,0,0,0,7,6v4H4a2.0023,2.0023,0,0,0-2,2v8a2.0023,2.0023,0,0,0,2,2H6v4a2.0023,2.0023,0,0,0,2,2H18a2.0023,2.0023,0,0,0,2,2h8a2.0023,2.0023,0,0,0,2-2V20a2.0023,2.0023,0,0,0-2-2H20a2.0023,2.0023,0,0,0-2,2v6H8V22h4a2.0023,2.0023,0,0,0,2-2V12a2.0023,2.0023,0,0,0-2-2H9V6h9v6A2.0023,2.0023,0,0,0,20,14Zm0,14V24h8v4Zm8-8,0,2H20V20ZM4,20V16h8v4Zm8.0005-6H4V12h8ZM20,12V8h8v4Zm8-8,0,2H20V4Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>