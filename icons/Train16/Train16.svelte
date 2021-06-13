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
  data-carbon-icon="Train16"
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
  <path d="M21,3H11A5.0057,5.0057,0,0,0,6,8V20a4.99,4.99,0,0,0,3.582,4.77L7.7693,29H9.9451l1.7143-4h8.6812l1.7143,4h2.1758L22.418,24.77A4.99,4.99,0,0,0,26,20V8A5.0057,5.0057,0,0,0,21,3ZM11,5H21a2.9948,2.9948,0,0,1,2.8157,2H8.1843A2.9948,2.9948,0,0,1,11,5ZM24,19H21v2h2.8157A2.9948,2.9948,0,0,1,21,23H11a2.9948,2.9948,0,0,1-2.8157-2H11V19H8V17H24Zm0-4H8V9H24Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>