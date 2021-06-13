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
  data-carbon-icon="WatsonHealthWindowPreset32"
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
  <path d="M15 6H17V8H15zM24 15H26V17H24zM15 24H17V26H15zM6 15H8V17H6z"></path><path d="M8.586 8.586H10.586V10.586H8.586z" transform="rotate(-45 9.586 9.586)"></path><path d="M21.414 8.586H23.414V10.586H21.414z" transform="rotate(-45 22.414 9.586)"></path><path d="M21.414 21.414H23.414V23.414H21.414z" transform="rotate(-45 22.414 22.414)"></path><path d="M8.586 21.414H10.586V23.414H8.586z" transform="rotate(-45 9.586 22.414)"></path><path d="M16,22a6,6,0,1,0-6-6A6,6,0,0,0,16,22Zm0-10v8a4,4,0,0,1,0-8Z"></path><path d="M28,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H28a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,28,30ZM4,4V28H28V4Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>