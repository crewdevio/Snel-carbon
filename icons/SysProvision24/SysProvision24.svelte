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
  data-carbon-icon="SysProvision24"
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
  <path d="M21 20L21 30 30 25 21 20z"></path><circle cx="14" cy="14" r="2"></circle><path d="M14,20a6,6,0,1,1,6-6A6.0066,6.0066,0,0,1,14,20Zm0-10a4,4,0,1,0,4,4A4.0045,4.0045,0,0,0,14,10Z"></path><path d="M25.9512,12.91l-.0064,0A12.05,12.05,0,1,0,17,25.605V23.5386a9.9813,9.9813,0,1,1,6.6235-6.81l1.9248.544A12.0341,12.0341,0,0,0,26,14Q26,13.4492,25.9512,12.91Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>