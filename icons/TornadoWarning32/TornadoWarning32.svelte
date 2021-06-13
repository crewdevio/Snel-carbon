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
  data-carbon-icon="TornadoWarning32"
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
  <path d="M2 4H18V6H2zM4 8H16V10H4zM2 12H14V14H2zM2 16H12V18H2zM4 20H12V22H4zM8 24H14V26H8zM12 28H16V30H12z"></path><path fill="none" d="M23.75,10h-1.5V6h1.5ZM23,11a1,1,0,1,0,1,1A1,1,0,0,0,23,11Z"></path><path d="M29.9115,13.9355,23.6284,2.3706a.7181.7181,0,0,0-1.2568,0L16.0885,13.9355A.72.72,0,0,0,16.72,15H29.28A.72.72,0,0,0,29.9115,13.9355ZM22.25,6h1.5v4h-1.5ZM23,13a1,1,0,1,1,1-1A1,1,0,0,1,23,13Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>