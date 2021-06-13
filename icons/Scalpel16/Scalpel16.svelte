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
  data-carbon-icon="Scalpel16"
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
  <path d="M28.83,5.17a4.1,4.1,0,0,0-5.66,0L.34,28H9.59a5,5,0,0,0,3.53-1.46L28.83,10.83a4,4,0,0,0,0-5.66ZM12.29,18.88l2.09-2.09,2.83,2.83-2.09,2.09Zm-.58,6.24A3,3,0,0,1,9.59,26H5.17l5.71-5.71,2.83,2.83ZM27.41,9.41l-8.79,8.8-2.83-2.83,8.8-8.79a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>