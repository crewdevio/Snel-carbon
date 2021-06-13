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
  data-carbon-icon="MicrophoneOff32"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="32" height="32"
  class={className}
  preserveAspectRatio="xMidYMid meet"
  {style}
  {id}
  {...attributes}>
  <path d="M9.18 18.57A7.41 7.41 0 019 17V14H7v3a8.84 8.84 0 00.58 3.18zM13 15V7a3 3 0 016 0V8.75l2-2A5 5 0 0011 7v8zM23 17a7 7 0 01-11.73 5.14l1.42-1.41A5 5 0 0021 17V12.42l9-9L28.59 2 2 28.59 3.41 30l6.44-6.44A8.91 8.91 0 0015 25.94V28H11v2H21V28H17V25.94A9 9 0 0025 17V14H23zm-4 0a3 3 0 01-4.9 2.31L19 14.42z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>