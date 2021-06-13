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
  data-carbon-icon="HospitalBed32"
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
  <path d="M25,16H17a2.0023,2.0023,0,0,0-2,2v6H4V14H2V30H4V26H28v4h2V21A5.0059,5.0059,0,0,0,25,16Zm3,8H17V18h8a3.0033,3.0033,0,0,1,3,3Z"></path><path d="M9.5 17A1.5 1.5 0 118 18.5 1.5017 1.5017 0 019.5 17m0-2A3.5 3.5 0 1013 18.5 3.5 3.5 0 009.5 15zM21 6L17 6 17 2 15 2 15 6 11 6 11 8 15 8 15 12 17 12 17 8 21 8 21 6z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>