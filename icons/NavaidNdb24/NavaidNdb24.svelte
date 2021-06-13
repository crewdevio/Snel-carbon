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
  data-carbon-icon="NavaidNdb24"
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
  <path d="M16,24a8,8,0,1,1,8-8A8.0092,8.0092,0,0,1,16,24Zm0-14a6,6,0,1,0,6,6A6.0067,6.0067,0,0,0,16,10Z"></path><circle cx="16" cy="16" r="2"></circle><circle cx="16" cy="4" r="2"></circle><circle cx="16" cy="28" r="2"></circle><circle cx="28" cy="16" r="2"></circle><circle cx="4" cy="16" r="2"></circle><circle cx="7.515" cy="7.515" r="2"></circle><circle cx="24.485" cy="24.485" r="2"></circle><circle cx="24.485" cy="7.515" r="2"></circle><circle cx="7.515" cy="24.485" r="2"></circle>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>