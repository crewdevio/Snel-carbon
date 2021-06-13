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
  data-carbon-icon="HumidityAlt16"
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
  <path d="M26 12a3.8978 3.8978 0 01-4-3.777 3.9017 3.9017 0 01.6533-2.0639L25.17 2.4141a1.0381 1.0381 0 011.6592 0L29.3154 6.11A3.9693 3.9693 0 0130 8.223 3.8978 3.8978 0 0126 12zm0-7.2368L24.3438 7.2257A1.89 1.89 0 0024 8.223a2.0139 2.0139 0 004 0 1.98 1.98 0 00-.375-1.0466zM23.5 30H8.5A6.4962 6.4962 0 017.2 17.1381a8.9938 8.9938 0 0117.6006 0A6.4964 6.4964 0 0123.5 30zM16 12a7 7 0 00-6.9414 6.1452l-.0991.8122-.8155.064A4.4962 4.4962 0 008.5 28h15a4.4962 4.4962 0 00.3564-8.9786l-.8154-.064-.0986-.8122A7.0022 7.0022 0 0016 12z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>