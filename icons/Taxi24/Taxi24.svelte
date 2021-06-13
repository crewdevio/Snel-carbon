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
  data-carbon-icon="Taxi24"
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
  <path d="M29.39,16.08,22.7,13.21,20.16,8.87l-.08-.12A2,2,0,0,0,18.52,8h-8a2,2,0,0,0-1.67.89L5.46,14H3a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1H5.14a4,4,0,0,0,7.72,0h6.28a4,4,0,0,0,7.72,0H29a1,1,0,0,0,1-1V17A1,1,0,0,0,29.39,16.08ZM9,26a2,2,0,1,1,2-2A2,2,0,0,1,9,26Zm14,0a2,2,0,1,1,2-2A2,2,0,0,1,23,26Zm5-3H26.86a4,4,0,0,0-7.72,0H12.86a4,4,0,0,0-7.72,0H4V16H6a1,1,0,0,0,.83-.45L10.54,10h8l2.63,4.5a1,1,0,0,0,.47.42L28,17.66Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>