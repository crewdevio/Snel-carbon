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
  data-carbon-icon="WatsonHealthWindowBase24"
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
  <path d="M15 2H17V5H15zM25 13H28V15H25zM15 23H17V26H15zM4 13H7V15H4z"></path><path d="M7.55 5.03H9.55V8.030000000000001H7.55z" transform="rotate(-45 8.56 6.544)"></path><path d="M21.96 5.54H24.96V7.54H21.96z" transform="rotate(-45 23.469 6.539)"></path><path d="M22.46 19.94H24.46V22.94H22.46z" transform="rotate(-45 23.462 21.442)"></path><path d="M7.04 20.45H10.04V22.45H7.04z" transform="rotate(-45 8.554 21.447)"></path><path d="M4 28H28V30H4zM16 20a6 6 0 10-6-6A6 6 0 0016 20zm0-10v8a4 4 0 010-8z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>