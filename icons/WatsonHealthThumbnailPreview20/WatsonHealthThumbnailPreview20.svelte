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
  data-carbon-icon="WatsonHealthThumbnailPreview20"
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
  <path d="M28,12H4a2.0023,2.0023,0,0,0-2,2V28a2.002,2.002,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V14A2.0027,2.0027,0,0,0,28,12ZM20,28H12V27a1.0009,1.0009,0,0,1,1-1h6a1.0009,1.0009,0,0,1,1,1Zm8,0H22V27a3.0033,3.0033,0,0,0-3-3H13a3.0033,3.0033,0,0,0-3,3v1H4V14H28.002Z"></path><path d="M16 23a4 4 0 114-4A4.0042 4.0042 0 0116 23zm0-6a2 2 0 102 2A2.0023 2.0023 0 0016 17zM30 4V8a2.0027 2.0027 0 01-2 2H24a2.0027 2.0027 0 01-2-2V4a2.0027 2.0027 0 012-2h4A2.0027 2.0027 0 0130 4zM28 8l.002-4H24V8zM20 4V8a2.0027 2.0027 0 01-2 2H14a2.0023 2.0023 0 01-2-2V4a2.0023 2.0023 0 012-2h4A2.0027 2.0027 0 0120 4zM18 8l.002-4H14V8zM10 4V8a2.0023 2.0023 0 01-2 2H4A2.0023 2.0023 0 012 8V4A2.0023 2.0023 0 014 2H8A2.0023 2.0023 0 0110 4zM8 8l.0015-4H4V8z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>