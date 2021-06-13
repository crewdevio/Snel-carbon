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
  data-carbon-icon="StarReview32"
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
  <path d="M18 26H26V28H18zM18 22H30V24H18zM18 18H30V20H18z"></path><path d="M20.549 11.217L16 2 11.451 11.217 1.28 12.695 8.64 19.87 6.902 30 14 26.269 14 24.009 9.559 26.344 10.611 20.208 10.789 19.171 10.036 18.438 5.578 14.091 11.739 13.196 12.779 13.045 13.245 12.102 16 6.519 18.755 12.102 19.221 13.045 20.261 13.196 27.715 14.281 28 12.3 20.549 11.217z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>