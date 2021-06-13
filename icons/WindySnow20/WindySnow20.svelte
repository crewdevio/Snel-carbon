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
  data-carbon-icon="WindySnow20"
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
  <path d="M25 28a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H6V18H25a5 5 0 010 10zM23 15H10V13H23a3 3 0 10-3-3H18a5 5 0 115 5z"></path><path d="M11 23H13V25H11zM13 25H15V27H13zM15 27H17V29H15zM15 23H17V25H15zM11 27H13V29H11zM6 4H8V6H6zM8 6H10V8H8zM10 8H12V10H10zM10 4H12V6H10zM6 8H8V10H6zM2 26H4V28H2zM4 28H6V30H4zM6 30H8V32H6zM6 26H8V28H6zM2 30H4V32H2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>