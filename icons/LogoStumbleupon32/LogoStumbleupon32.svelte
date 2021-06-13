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
  data-carbon-icon="LogoStumbleupon32"
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
  <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm-.09,10.45a.84.84,0,0,0-.84.84v5.14a3.55,3.55,0,0,1-7.1,0V16.09h2.71v2.24a.84.84,0,0,0,1.68,0v-5a3.55,3.55,0,0,1,7.09,0v1l-1.58.51-1.12-.51v-1A.85.85,0,0,0,15.91,12.45Zm7.93,6a3.55,3.55,0,0,1-7.09,0V16.14l1.12.51,1.58-.51v2.29a.84.84,0,0,0,1.68,0V16.19h2.71Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>