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
  data-carbon-icon="WatsonHealthStackedScrolling_224"
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
  <path d="M8 30H2a2 2 0 01-2-2V14a2 2 0 012-2H8a2 2 0 012 2V28A2 2 0 018 30zM2 14V28H8V14zM20 30H14a2 2 0 01-2-2V14a2 2 0 012-2h6a2 2 0 012 2V28A2 2 0 0120 30zM14 14V28h6V14z"></path><path d="M27,21H25V9H17V7h8a2,2,0,0,1,2,2Z"></path><path d="M32,16H30V4H22V2h8a2,2,0,0,1,2,2Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>