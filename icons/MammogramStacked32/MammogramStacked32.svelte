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
  data-carbon-icon="MammogramStacked32"
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
  <path d="M30,16H28V4H16V2H28a2.0023,2.0023,0,0,1,2,2Z"></path><path d="M25,23H23V9H9V7H23a2.0023,2.0023,0,0,1,2,2Z"></path><path d="M18,30H4a2.0023,2.0023,0,0,1-2-2V14a2.002,2.002,0,0,1,2-2H18a2.0023,2.0023,0,0,1,2,2V28A2.0027,2.0027,0,0,1,18,30ZM4,14V28H18.002L18,14Z"></path><path d="M13,18h1V16H13a5.0083,5.0083,0,0,0-4.8989,4H7v2H8.1011A5.0083,5.0083,0,0,0,13,26h1V24H13a3,3,0,0,1,0-6Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>