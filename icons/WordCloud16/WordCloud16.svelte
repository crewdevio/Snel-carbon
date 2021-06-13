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
  data-carbon-icon="WordCloud16"
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
  <path d="M10 16H22V18H10zM10 20H18V22H10z"></path><path d="M16,7h0a8.0233,8.0233,0,0,1,7.8649,6.4935l.2591,1.346,1.3488.244A5.5019,5.5019,0,0,1,24.5076,26H7.4954a5.5019,5.5019,0,0,1-.9695-10.9165l1.3488-.244.2591-1.346A8.0256,8.0256,0,0,1,16,7m0-2a10.0244,10.0244,0,0,0-9.83,8.1155A7.5019,7.5019,0,0,0,7.4911,28H24.5076a7.5019,7.5019,0,0,0,1.3213-14.8845A10.0229,10.0229,0,0,0,15.9883,5Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>