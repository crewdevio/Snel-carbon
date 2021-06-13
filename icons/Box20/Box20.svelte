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
  data-carbon-icon="Box20"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="20" height="20"
  class={className}
  preserveAspectRatio="xMidYMid meet"
  {style}
  {id}
  {...attributes}>
  <path d="M20,21H12a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h8a2,2,0,0,1,2,2v2A2,2,0,0,1,20,21Zm-8-4v2h8V17Z"></path><path d="M28,4H4A2,2,0,0,0,2,6v4a2,2,0,0,0,2,2V28a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V12a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4ZM26,28H6V12H26Zm2-18H4V6H28v4Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>