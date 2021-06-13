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
  data-carbon-icon="Bar20"
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
  <path d="M25,11H15a1,1,0,0,0-1,1v4a6.0046,6.0046,0,0,0,5,5.91V28H16v2h8V28H21V21.91A6.0046,6.0046,0,0,0,26,16V12A1,1,0,0,0,25,11Zm-1,5a4,4,0,0,1-8,0V13h8Z"></path><path d="M15,1H10A1,1,0,0,0,9,2V9.3706A6.09,6.09,0,0,0,6,15V29a1,1,0,0,0,1,1h5V28H8V15c0-3.1875,2.231-4.02,2.3164-4.0513L11,10.7207V3h3V8h2V2A1,1,0,0,0,15,1Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>