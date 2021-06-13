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
  data-carbon-icon="FavoriteHalf16"
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
  <path d="M4.21,17.0615,16,29,27.79,17.0615a7.7313,7.7313,0,0,0,0-10.8232,7.494,7.494,0,0,0-10.6841,0L16,7.3643l-1.1062-1.126a7.494,7.494,0,0,0-10.6841,0A7.7313,7.7313,0,0,0,4.21,17.0615ZM26.3552,15.645,16,26.1255V10.23q1.2708-1.2876,2.5413-2.5742a5.4768,5.4768,0,0,1,7.8139,0A5.708,5.708,0,0,1,26.3552,15.645Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>