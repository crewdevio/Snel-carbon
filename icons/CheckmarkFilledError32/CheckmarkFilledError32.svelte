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
  data-carbon-icon="CheckmarkFilledError32"
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
  <path d="M30,24a6,6,0,1,0-6,6A6.0066,6.0066,0,0,0,30,24Zm-2,0a3.9521,3.9521,0,0,1-.5669,2.019L21.981,20.5669A3.9529,3.9529,0,0,1,24,20,4.0045,4.0045,0,0,1,28,24Zm-8,0a3.9521,3.9521,0,0,1,.5669-2.019l5.4521,5.4521A3.9529,3.9529,0,0,1,24,28,4.0045,4.0045,0,0,1,20,24Z"></path><path d="M14,2a12,12,0,1,0,2,23.82V24a8,8,0,0,1,8-8h1.82A11.9348,11.9348,0,0,0,14,2ZM12,18.5908l-4-4L9.5908,13,12,15.4092,17.4092,10,19,11.5908Z"></path><path fill="none" d="M12 18.591L8 14.591 9.591 13 12 15.409 17.409 10 19 11.591 12 18.591z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>