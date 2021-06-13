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
  data-carbon-icon="MedicationReminder24"
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
  <path d="M20,2H4A2,2,0,0,0,2,4V8a2,2,0,0,0,2,2V28a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V10a2,2,0,0,0,2-2V4A2,2,0,0,0,20,2ZM6,14H9V24H6ZM18,28H6V26h5V12H6V10H18ZM4,8V4H20V8Z"></path><circle cx="26" cy="16" r="4"></circle>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>