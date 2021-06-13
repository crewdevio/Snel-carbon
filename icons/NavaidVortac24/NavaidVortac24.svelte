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
  data-carbon-icon="NavaidVortac24"
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
  <circle cx="16" cy="14" r="2"></circle><path d="M29.8682,10.5039l-4-7a.9992.9992,0,0,0-1.3828-.3613L19.7231,6H12.2769L7.5146,3.1426a.9992.9992,0,0,0-1.3828.3613l-4,7a1,1,0,0,0,.3536,1.3535l4.7758,2.8657L11,21.2656V27a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V21.2656l3.7388-6.5425,4.7758-2.8657A1,1,0,0,0,29.8682,10.5039ZM18.8484,21H13.1516L8.5757,12.9922,11.4287,8h9.1426l2.853,4.9922Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>