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
  data-carbon-icon="PendingFilled16"
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
  <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM8,18a2,2,0,1,1,2-2A2,2,0,0,1,8,18Zm8,0a2,2,0,1,1,2-2A2,2,0,0,1,16,18Zm8,0a2,2,0,1,1,2-2A2,2,0,0,1,24,18Z"></path><circle cx="8" cy="16" r="2" fill="none"></circle><circle cx="16" cy="16" r="2" fill="none"></circle><circle cx="24" cy="16" r="2" fill="none"></circle>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>