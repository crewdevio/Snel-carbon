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
  data-carbon-icon="LogoSlack16"
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
  <path d="M9.0423 19.1661A2.5212 2.5212 0 116.5212 16.645H9.0423zM10.3127 19.1661a2.5212 2.5212 0 015.0423 0v6.3127a2.5212 2.5212 0 11-5.0423 0zM12.8339 9.0423A2.5212 2.5212 0 1115.355 6.5212V9.0423zM12.8339 10.3127a2.5212 2.5212 0 010 5.0423H6.5212a2.5212 2.5212 0 110-5.0423zM22.9577 12.8339a2.5212 2.5212 0 112.5211 2.5211H22.9577zM21.6873 12.8339a2.5212 2.5212 0 01-5.0423 0V6.5212a2.5212 2.5212 0 115.0423 0zM19.1661 22.9577a2.5212 2.5212 0 11-2.5211 2.5211V22.9577zM19.1661 21.6873a2.5212 2.5212 0 010-5.0423h6.3127a2.5212 2.5212 0 110 5.0423z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>