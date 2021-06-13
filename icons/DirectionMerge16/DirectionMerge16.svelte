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
  data-carbon-icon="DirectionMerge16"
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
  <path d="M17.8784,15.4648A2.9821,2.9821,0,0,1,17,13.3433V7.8281l4.5859,4.586L23,11,16,4,9,11l1.4141,1.4141L15,7.8281v5.5152a2.9805,2.9805,0,0,1-.8784,2.1211l-2.6572,2.6567A4.9682,4.9682,0,0,0,10,21.6567V28h2V21.6567a2.9805,2.9805,0,0,1,.8784-2.1211l2.6572-2.6567A5.0021,5.0021,0,0,0,16,16.3135a5.0021,5.0021,0,0,0,.4644.5654l2.6572,2.6563A2.9821,2.9821,0,0,1,20,21.6567V28h2V21.6567a4.9682,4.9682,0,0,0-1.4644-3.5356Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>