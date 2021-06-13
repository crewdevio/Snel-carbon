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
  data-carbon-icon="WarningAltFilled20"
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
  <path fill="none" d="M14.875,11h2.25V21h-2.25ZM16,27a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,27Z"></path><path d="M29.8872,28.5386l-13-25a1,1,0,0,0-1.7744,0l-13,25A1,1,0,0,0,3,30H29a1,1,0,0,0,.8872-1.4614ZM14.875,11h2.25V21h-2.25ZM16,27a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,27Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>