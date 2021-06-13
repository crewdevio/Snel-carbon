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
  data-carbon-icon="Headset16"
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
  <path d="M25,10h-.06A9,9,0,0,0,7.06,10H7A5,5,0,0,0,7,20H9V11a7,7,0,0,1,14,0V21a4,4,0,0,1-3.17,3.91,4,4,0,1,0,.05,2A6,6,0,0,0,25,21V20a5,5,0,0,0,0-10ZM4,15a3,3,0,0,1,3-3v6A3,3,0,0,1,4,15ZM16,28a2,2,0,1,1,2-2A2,2,0,0,1,16,28Zm9-10V12a3,3,0,0,1,0,6Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>