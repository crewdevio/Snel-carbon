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
  data-carbon-icon="Awake32"
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
  <path d="M15 2H17V6.96H15z"></path><path d="M21.67 6.85H26.630000000000003V8.85H21.67z" transform="rotate(-45 24.142 7.85)"></path><path d="M25.04 15H30V17H25.04z"></path><path d="M23.15 21.67H25.15V26.630000000000003H23.15z" transform="rotate(-45 24.152 24.146)"></path><path d="M15 25.04H17V30H15z"></path><path d="M5.37 23.15H10.33V25.15H5.37z" transform="rotate(-45 7.86 24.144)"></path><path d="M2 15H6.96V17H2z"></path><path d="M6.85 5.37H8.85V10.33H6.85z" transform="rotate(-45 7.85 7.848)"></path><path d="M16,12a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>