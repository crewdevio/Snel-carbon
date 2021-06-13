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
  data-carbon-icon="WatsonHealthSaveImage32"
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
  <path d="M21.56,15.1l-3.48-4.35A2,2,0,0,0,16.52,10H4a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V16.35A2,2,0,0,0,21.56,15.1ZM9,12h6v3H9Zm6,16H9V22h6Zm2,0V22a2,2,0,0,0-2-2H9a2,2,0,0,0-2,2v6H4V12H7v3a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V12.6l3,3.75V28Z"></path><path d="M28,20H25V18h3V4H14V7H12V4a2,2,0,0,1,2-2H28a2,2,0,0,1,2,2V18A2,2,0,0,1,28,20Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>