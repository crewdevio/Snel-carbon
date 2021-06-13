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
  data-carbon-icon="ShrinkScreen24"
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
  <path d="M28 28H17a2.0023 2.0023 0 01-2-2V20a2.0023 2.0023 0 012-2H28a2.0027 2.0027 0 012 2v6A2.0027 2.0027 0 0128 28zM17 20v6H28.002L28 20zM12 10L12 13.586 7.707 9.293 6.293 10.707 10.586 15 7 15 7 17 14 17 14 10 12 10z"></path><path d="M13,22H4a2.0023,2.0023,0,0,1-2-2V7A2.002,2.002,0,0,1,4,5H26a2.0023,2.0023,0,0,1,2,2v9H26V7H4V20h9Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>