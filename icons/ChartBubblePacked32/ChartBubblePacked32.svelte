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
  data-carbon-icon="ChartBubblePacked32"
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
  <path d="M27.5322,17.1724A8.99,8.99,0,1,0,13.6074,5.88,5.9969,5.9969,0,1,0,5.051,13.2217a6.9967,6.9967,0,1,0,7.9942,11.4844A5.9981,5.9981,0,0,0,25,24c0-.1216-.011-.24-.0181-.3594a3.4873,3.4873,0,1,0,2.55-6.4682ZM21,4a7,7,0,1,1-7,7A7.0078,7.0078,0,0,1,21,4ZM8,4A4,4,0,1,1,4,8,4.0045,4.0045,0,0,1,8,4ZM19,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,19,28Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>