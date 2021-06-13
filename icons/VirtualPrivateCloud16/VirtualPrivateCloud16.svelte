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
  data-carbon-icon="VirtualPrivateCloud16"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="16" height="16"
  class={className}
  preserveAspectRatio="xMidYMid meet"
  {style}
  {id}
  {...attributes}>
  <path d="M20,20V17a4,4,0,0,0-8,0v3a2.0025,2.0025,0,0,0-2,2v6a2.0025,2.0025,0,0,0,2,2h8a2.0025,2.0025,0,0,0,2-2V22A2.0025,2.0025,0,0,0,20,20Zm-6-3a2,2,0,0,1,4,0v3H14ZM12,28V22h8l.0012,6Z"></path><path d="M25.8288,10.1152A10.0067,10.0067,0,0,0,17.89,2.1816,10.0025,10.0025,0,0,0,6.17,10.1152,7.502,7.502,0,0,0,7.4912,25H8V23H7.4953a5.5019,5.5019,0,0,1-.9694-10.9165l1.3488-.2441.2591-1.3457a8.0109,8.0109,0,0,1,15.7312,0l.259,1.3457,1.3489.2441A5.5019,5.5019,0,0,1,24.5076,23H24v2h.5076a7.502,7.502,0,0,0,1.3212-14.8848Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>