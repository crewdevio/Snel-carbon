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
  data-carbon-icon="ReflectVertical20"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="20" height="20"
  class={className}
  preserveAspectRatio="xMidYMid meet"
  {style}
  {id}
  {...attributes}>
  <path d="M16.79,19.386l7,9A1,1,0,0,1,23,30H9a1,1,0,0,1-.79-1.614l7-9a1,1,0,0,1,1.5791,0Z"></path><path d="M15 2H17V30H15z" transform="rotate(-90 16 16)"></path><path d="M16,13a1.001,1.001,0,0,1-.79-.386l-7-9A1,1,0,0,1,9,2H23a1,1,0,0,1,.79,1.614l-7,9A1.001,1.001,0,0,1,16,13ZM11.0444,4,16,10.3711,20.9556,4Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>