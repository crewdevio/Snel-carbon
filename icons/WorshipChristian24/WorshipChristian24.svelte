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
  data-carbon-icon="WorshipChristian24"
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
  <path d="M17,30H15a2.0021,2.0021,0,0,1-2-2V14H8a2.0021,2.0021,0,0,1-2-2V10A2.0021,2.0021,0,0,1,8,8h5V4a2.0021,2.0021,0,0,1,2-2h2a2.0021,2.0021,0,0,1,2,2V8h5a2.0021,2.0021,0,0,1,2,2v2a2.0021,2.0021,0,0,1-2,2H19V28A2.0021,2.0021,0,0,1,17,30ZM8,10v2h7V28h2V12h7V10H17V4H15v6Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>