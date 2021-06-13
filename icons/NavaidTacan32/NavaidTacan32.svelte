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
  data-carbon-icon="NavaidTacan32"
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
  <circle cx="16" cy="14" r="2"></circle><path d="M20,28H12a1,1,0,0,1-1-1V21.2656L7.2612,14.7231,2.4854,11.8574a1,1,0,0,1-.3536-1.3535l4-7a1,1,0,0,1,1.3828-.3613L12.2769,6h7.4462l4.7623-2.8574a1,1,0,0,1,1.3828.3613l4,7a1,1,0,0,1-.3536,1.3535l-4.7758,2.8657L21,21.2656V27A1,1,0,0,1,20,28Zm-7-2h6V20.7346l4.2616-7.4578,4.3844-2.6306L24.6387,5.3831,20.277,8H11.723L7.3613,5.3831,4.354,10.6462l4.3844,2.6306L13,20.7346Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>