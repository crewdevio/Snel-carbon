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
  data-carbon-icon="TextClearFormat24"
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
  <path d="M29.4384,16.5715l-7.985-7.9856a2.0014,2.0014,0,0,0-2.8291,0l-5.3584,5.3584L9,2H7L2,16H4l.999-3h6l.8035,2.4077L4.5858,22.6244a2,2,0,0,0,0,2.8282L9.1316,30h9.5908l10.716-10.717A1.9173,1.9173,0,0,0,29.4384,16.5715ZM5.6653,11l2.331-7,2.3355,7Zm12.229,17H9.96L6,24.0381l6.3123-6.3115L20.24,25.6538Zm3.76-3.76-7.9275-7.9272L20.0393,10l7.9268,7.9272Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>