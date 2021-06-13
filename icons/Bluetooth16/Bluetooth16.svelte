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
  data-carbon-icon="Bluetooth16"
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
  <path d="M16,30a1.06,1.06,0,0,1-.42-.09A1,1,0,0,1,15,29V18.41L8.41,25,7,23.59,14.59,16,7,8.41,8.41,7,15,13.59V3a1,1,0,0,1,.58-.91,1,1,0,0,1,1.07.15l7,6A1,1,0,0,1,24,9a1,1,0,0,1-.29.75L17.41,16l6.3,6.29A1,1,0,0,1,24,23a1,1,0,0,1-.35.72l-7,6A1,1,0,0,1,16,30Zm1-11.59v8.42l4.53-3.89ZM17,5.17v8.42l4.53-4.53Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>