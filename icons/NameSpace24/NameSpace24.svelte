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
  data-carbon-icon="NameSpace24"
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
  <path d="M7 12H4a2.0023 2.0023 0 01-2-2V6A2.0023 2.0023 0 014 4H7V6H4v4H7zM9 10H15V12H9zM17 10H23V12H17zM28 12H25V10h3V6H25V4h3a2.0023 2.0023 0 012 2v4A2.0023 2.0023 0 0128 12zM17 4H23V6H17zM9 4H15V6H9zM28 28H4a2.0023 2.0023 0 01-2-2V22a2.0023 2.0023 0 012-2H28a2.0023 2.0023 0 012 2v4A2.0023 2.0023 0 0128 28zM4 22v4H28V22zM2 15H30V17H2z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>