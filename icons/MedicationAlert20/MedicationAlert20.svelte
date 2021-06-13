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
  data-carbon-icon="MedicationAlert20"
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
  <path d="M22 19H24V24H22z"></path><path d="M23,31a8,8,0,1,1,8-8A8,8,0,0,1,23,31Zm0-14a6,6,0,1,0,6,6A6,6,0,0,0,23,17Z"></path><circle cx="23" cy="26" r="1"></circle><path d="M20,2H4A2,2,0,0,0,2,4V8a2,2,0,0,0,2,2V28a2,2,0,0,0,2,2h8V28H6V26h5V12H6V10H18v3h2V10a2,2,0,0,0,2-2V4A2,2,0,0,0,20,2ZM9,14V24H6V14ZM4,8V4H20V8Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>