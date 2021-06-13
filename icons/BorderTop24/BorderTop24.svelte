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
  data-carbon-icon="BorderTop24"
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
  <path d="M3 3H29V5H3zM3 7H5V9H3zM3 11H5V13H3zM3 15H5V17H3zM3 19H5V21H3zM3 23H5V25H3zM3 27H5V29H3zM7 27H9V29H7zM11 27H13V29H11zM15 27H17V29H15zM23 27H25V29H23zM19 27H21V29H19zM27 7H29V9H27zM27 11H29V13H27zM27 15H29V17H27zM27 19H29V21H27zM27 23H29V25H27zM27 27H29V29H27zM8 10H18V12H8zM8 15H14V17H8z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>