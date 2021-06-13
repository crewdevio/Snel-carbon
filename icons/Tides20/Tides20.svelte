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
  data-carbon-icon="Tides20"
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
  <path d="M14 7L9 2 4 7 5.413 8.416 8 5.833 8 14 10 14 10 5.833 12.586 8.414 14 7zM26.586 7.586L24 10.167 24 2 22 2 22 10.167 19.413 7.584 18 9 23 14 28 9 26.586 7.586zM20 20a3.4376 3.4376 0 01-3.0513-2.3164A1.007 1.007 0 0016 17a.9894.9894 0 00-.9468.6787A3.44 3.44 0 0112 20a3.4376 3.4376 0 01-3.0513-2.3164A1.007 1.007 0 008 17a.971.971 0 00-.9468.6787A3.44 3.44 0 014 20H2v2H4a4.9316 4.9316 0 004-1.9873 5.0192 5.0192 0 008 0A4.9316 4.9316 0 0020 22H30V20zM28 28a3.4376 3.4376 0 01-3.0513-2.3164A1.007 1.007 0 0024 25a.9894.9894 0 00-.9468.6787A3.44 3.44 0 0120 28a3.4376 3.4376 0 01-3.0513-2.3164A1.007 1.007 0 0016 25a.971.971 0 00-.9468.6787A3.44 3.44 0 0112 28H2v2H12a4.9316 4.9316 0 004-1.9873 5.0192 5.0192 0 008 0A4.9316 4.9316 0 0028 30h2V28z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>