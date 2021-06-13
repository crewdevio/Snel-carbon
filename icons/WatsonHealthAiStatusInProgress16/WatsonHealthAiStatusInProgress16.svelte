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
  data-carbon-icon="WatsonHealthAiStatusInProgress16"
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
  <path d="M11 24H21V26H11zM13 28H19V30H13zM10.8145 18.1406A7.1851 7.1851 0 018 12a8.0092 8.0092 0 018-8V2A10.0111 10.0111 0 006 12a9.1793 9.1793 0 003.46 7.6162C10.4717 20.5508 11 21.0815 11 22h2C13 20.16 11.8892 19.1338 10.8145 18.1406zM21.1777 18.1426C20.1069 19.1348 19 20.1611 19 22h2c0-.9194.5264-1.45 1.5352-2.3857A9.193 9.193 0 0026 12H24A7.2032 7.2032 0 0121.1777 18.1426z"></path><circle cx="18.5" cy="7.5" r="1.5"></circle><circle cx="28.5" cy="7.5" r="1.5"></circle><circle cx="23.5" cy="7.5" r="1.5"></circle>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>