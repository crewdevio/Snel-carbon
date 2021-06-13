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
  data-carbon-icon="EarthSoutheastAsiaFilled24"
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
  <path d="M17 22H19V24H17zM17 18H19V20H17zM14 24H17V26H14z"></path><path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM4.7,20H6l4.1772,2.6a1,1,0,0,0,1.36-.2939l1.0078-1.5118a1,1,0,0,0-.125-1.2617L10,17.1118,11,14h5.323a1,1,0,0,0,.9285-.6284L18.8333,9.417a1,1,0,0,0-.034-.8189L16.5129,4.0259A11.9652,11.9652,0,0,1,26.3762,22H23a1,1,0,0,0-1,1v3.3765A11.9578,11.9578,0,0,1,4.7,20Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>