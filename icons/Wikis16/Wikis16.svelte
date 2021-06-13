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
  data-carbon-icon="Wikis16"
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
  <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM28,15H22A24.26,24.26,0,0,0,19.21,4.45,12,12,0,0,1,28,15ZM16,28a5,5,0,0,1-.67,0A21.85,21.85,0,0,1,12,17H20a21.85,21.85,0,0,1-3.3,11A5,5,0,0,1,16,28ZM12,15a21.85,21.85,0,0,1,3.3-11,6,6,0,0,1,1.34,0A21.85,21.85,0,0,1,20,15Zm.76-10.55A24.26,24.26,0,0,0,10,15h-6A12,12,0,0,1,12.79,4.45ZM4.05,17h6a24.26,24.26,0,0,0,2.75,10.55A12,12,0,0,1,4.05,17ZM19.21,27.55A24.26,24.26,0,0,0,22,17h6A12,12,0,0,1,19.21,27.55Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>