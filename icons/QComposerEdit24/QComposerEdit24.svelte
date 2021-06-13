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
  data-carbon-icon="QComposerEdit24"
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
  <path d="M25.82,10H30V8H25.82a3,3,0,0,0-5.64,0H13V5H5V8H2v2H5v3h8V10h7.18A3,3,0,0,0,22,11.82v7.32A4,4,0,0,0,19.14,22H2v2H19.14a4,4,0,0,0,7.72,0H30V22H26.86A4,4,0,0,0,24,19.14V11.82A3,3,0,0,0,25.82,10ZM11,11H7V7h4ZM25,23a2,2,0,1,1-2-2A2,2,0,0,1,25,23Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>