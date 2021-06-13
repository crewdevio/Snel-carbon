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
  data-carbon-icon="CropHealth24"
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
  <path d="M2 28H10V30H2zM17 29a1 1 0 01-.7808-.3752L12.52 24H2V22H13a1 1 0 01.7808.3752l3.146 3.9322 5.2412-7.8621A1 1 0 0123.8 18.4L26.5 22H30v2H26a.9991.9991 0 01-.8-.4l-2.1523-2.8694-5.2159 7.824a.9986.9986 0 01-.7885.4443zM11 16V11h1a4.0045 4.0045 0 004-4V4H13a3.9779 3.9779 0 00-2.7468 1.1067A6.0034 6.0034 0 005 2H2V5a6.0066 6.0066 0 006 6H9v5H2v2H16V16zM13 6h1V7a2.002 2.002 0 01-2 2H11V8A2.002 2.002 0 0113 6zM8 9A4.0045 4.0045 0 014 5V4H5A4.0045 4.0045 0 019 8V9z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>