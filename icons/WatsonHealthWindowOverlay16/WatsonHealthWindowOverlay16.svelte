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
  data-carbon-icon="WatsonHealthWindowOverlay16"
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
  <path d="M15 6H17V9H15zM25 17H28V19H25zM15 27H17V30H15zM4 17H7V19H4z"></path><path d="M7.55 9.03H9.55V12.03H7.55z" transform="rotate(-45 8.558 10.545)"></path><path d="M21.96 9.54H24.96V11.54H21.96z" transform="rotate(-45 23.466 10.54)"></path><path d="M22.46 23.94H24.46V26.94H22.46z" transform="rotate(-45 23.459 25.443)"></path><path d="M7.04 24.45H10.04V26.45H7.04z" transform="rotate(-45 8.55 25.448)"></path><path d="M4 2H28V4H4zM16 24a6 6 0 10-6-6A6 6 0 0016 24zm0-10v8a4 4 0 010-8z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>