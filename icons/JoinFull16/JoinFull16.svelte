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
  data-carbon-icon="JoinFull16"
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
  <path fill="none" d="M16,9.0752a7.9941,7.9941,0,0,1,0,13.85,7.9941,7.9941,0,0,1,0-13.85m0-2.2373a9.9953,9.9953,0,0,0,0,18.3242A9.9953,9.9953,0,0,0,16,6.8379Z" data-icon-path="inner-path"></path><path d="M10,16a9.9976,9.9976,0,0,1,6-9.1621,10,10,0,1,0,0,18.3242A9.9976,9.9976,0,0,1,10,16Z"></path><path d="M16,9.0752a7.9941,7.9941,0,0,0,0,13.85,7.9941,7.9941,0,0,0,0-13.85Z"></path><path d="M20,6a9.9539,9.9539,0,0,0-4,.8379,9.9953,9.9953,0,0,1,0,18.3242A9.9988,9.9988,0,1,0,20,6Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>