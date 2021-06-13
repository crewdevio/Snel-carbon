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
  data-carbon-icon="Money20"
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
  <path d="M2 22H30V24H2zM2 26H30V28H2zM24 10a2 2 0 102 2 2 2 0 00-2-2zM16 16a4 4 0 114-4A4.0045 4.0045 0 0116 16zm0-6a2 2 0 102 2A2.002 2.002 0 0016 10zM8 10a2 2 0 102 2 2 2 0 00-2-2z"></path><path d="M28,20H4a2.0051,2.0051,0,0,1-2-2V6A2.0051,2.0051,0,0,1,4,4H28a2.0051,2.0051,0,0,1,2,2V18A2.0027,2.0027,0,0,1,28,20ZM28,6H4V18H28Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>