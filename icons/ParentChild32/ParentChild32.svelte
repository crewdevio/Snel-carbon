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
  data-carbon-icon="ParentChild32"
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
  <path d="M28,12a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4v6a2,2,0,0,0,2,2H15v4H9a2,2,0,0,0-2,2v4H4a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V24a2,2,0,0,0-2-2H9V18H23v4H20a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V24a2,2,0,0,0-2-2H25V18a2,2,0,0,0-2-2H17V12ZM12,28H4V24h8Zm16,0H20V24h8ZM4,4H28v6H4Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>