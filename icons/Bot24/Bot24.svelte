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
  data-carbon-icon="Bot24"
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
  <path d="M18 10H20V12H18zM12 10H14V12H12z"></path><path d="M26,20H21V18h1a2.0023,2.0023,0,0,0,2-2V12h2V10H24V8a2.0023,2.0023,0,0,0-2-2H20V2H18V6H14V2H12V6H10A2.0023,2.0023,0,0,0,8,8v2H6v2H8v4a2.0023,2.0023,0,0,0,2,2h1v2H6a2.0023,2.0023,0,0,0-2,2v8H6V22H26v8h2V22A2.0023,2.0023,0,0,0,26,20ZM10,8H22v8H10Zm3,10h6v2H13Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>