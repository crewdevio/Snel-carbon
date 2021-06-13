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
  data-carbon-icon="Moonset32"
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
  <path d="M2 28H30V30H2zM26 26H24a7.987 7.987 0 00-2.0371-5.3335l1.49-1.334A9.9835 9.9835 0 0126 26zM16 26H14a9.9268 9.9268 0 013.7539-7.804A7.89 7.89 0 0016 18a8.0092 8.0092 0 00-8 8H6A10.0113 10.0113 0 0116 16a9.8923 9.8923 0 014.4458 1.0515 1 1 0 010 1.79A7.9567 7.9567 0 0016 26zM16 14L11 9 12.41 7.59 15 10.17 15 10 15 2 17 2 17 10 17 10.17 19.59 7.59 21 9 16 14z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>