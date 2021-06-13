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
  data-carbon-icon="HealthCross20"
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
  <path d="M19,28H13a2.0023,2.0023,0,0,1-2-2V21H6a2.0023,2.0023,0,0,1-2-2V13a2.002,2.002,0,0,1,2-2h5V6a2.002,2.002,0,0,1,2-2h6a2.0023,2.0023,0,0,1,2,2v5h5a2.0023,2.0023,0,0,1,2,2v6a2.0027,2.0027,0,0,1-2,2H21v5A2.0027,2.0027,0,0,1,19,28ZM6,13v6h7v7h6V19h7V13H19V6H13v7Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>