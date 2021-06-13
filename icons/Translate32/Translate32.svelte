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
  data-carbon-icon="Translate32"
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
  <path d="M27.85 29H30L24 14H21.65l-6 15H17.8l1.6-4h6.85zM20.2 23l2.62-6.56L25.45 23zM18 7V5H11V2H9V5H2V7H12.74a14.71 14.71 0 01-3.19 6.18A13.5 13.5 0 017.26 9H5.16a16.47 16.47 0 003 5.58A16.84 16.84 0 013 18l.75 1.86A18.47 18.47 0 009.53 16a16.92 16.92 0 005.76 3.84L16 18a14.48 14.48 0 01-5.12-3.37A17.64 17.64 0 0014.8 7z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>