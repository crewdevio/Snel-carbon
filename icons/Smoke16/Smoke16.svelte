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
  data-carbon-icon="Smoke16"
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
  <path d="M27.001 28a.998.998 0 01-.8008-.4l-.8145-1.086a8.9976 8.9976 0 01-1.6005-7.2856l1.4736-6.8762a6.9956 6.9956 0 00-1.2446-5.6668L23.2 5.6a1 1 0 111.6-1.2l.8145 1.0857a8.9976 8.9976 0 011.6005 7.2856l-1.4736 6.8762a6.9956 6.9956 0 001.2446 5.6668L27.8 26.4A1 1 0 0127.001 28zM22.001 28a.998.998 0 01-.8008-.4l-.8145-1.086a8.9976 8.9976 0 01-1.6005-7.2856l1.4736-6.8762a6.9956 6.9956 0 00-1.2446-5.6668L18.2 5.6a1 1 0 111.6-1.2l.8145 1.0857a8.9976 8.9976 0 011.6005 7.2856l-1.4736 6.8762a6.9956 6.9956 0 001.2446 5.6668L22.8 26.4A1 1 0 0122.001 28zM17.001 28a.998.998 0 01-.8008-.4l-.8145-1.086a8.9976 8.9976 0 01-1.6005-7.2856l1.4736-6.8762a6.9956 6.9956 0 00-1.2446-5.6668L13.2 5.6a1 1 0 111.6-1.2l.8145 1.0857a8.9976 8.9976 0 011.6005 7.2856l-1.4736 6.8762a6.9956 6.9956 0 001.2446 5.6668L17.8 26.4A1 1 0 0117.001 28zM12.001 28a.998.998 0 01-.8008-.4l-.8145-1.086a8.9976 8.9976 0 01-1.6005-7.2856l1.4736-6.8762A6.9956 6.9956 0 009.0142 6.6855L8.2 5.6A1 1 0 119.8 4.4l.8145 1.0857a8.9976 8.9976 0 011.6005 7.2856l-1.4736 6.8762a6.9956 6.9956 0 001.2446 5.6668L12.8 26.4A1 1 0 0112.001 28zM7.001 28A.998.998 0 016.2 27.6l-.8145-1.086a8.9976 8.9976 0 01-1.6-7.2856l1.4736-6.8762A6.9956 6.9956 0 004.0142 6.6855L3.2 5.6A1 1 0 114.8 4.4l.8145 1.0857a8.9976 8.9976 0 011.6005 7.2856L5.7412 19.6474a6.9956 6.9956 0 001.2446 5.6668L7.8 26.4A1 1 0 017.001 28z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>