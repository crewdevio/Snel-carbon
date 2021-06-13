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
  data-carbon-icon="StorageRequest16"
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
  <path d="M4 21H2v3a2.0059 2.0059 0 002 2H7V24H4zM4 8H7V6H4A2.0059 2.0059 0 002 8v3H4zM17 6H23V8H17zM9 6H15V8H9zM17 24H23V26H17zM28 15L4 15 4 13 2 13 2 19 4 19 4 17 28 17 28 19 30 19 30 13 28 13 28 15zM28 24H25v2h3a2.0059 2.0059 0 002-2V21H28zM28 6H25V8h3v3h2V8A2.0059 2.0059 0 0028 6zM9 24H15V26H9z"></path><circle cx="7" cy="12" r="1"></circle><circle cx="7" cy="20" r="1"></circle>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>