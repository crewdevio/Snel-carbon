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
  data-carbon-icon="Transgender20"
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
  <path d="M22,2V4h4.5859l-6.4016,6.4014a6.9474,6.9474,0,0,0-8.3686,0L10.4143,9,13,6.4141,11.5857,5,9,7.5859,5.4141,4H10V2H2v8H4V5.4141L7.5859,9,5,11.5854,6.4143,13,9,10.4141l1.4014,1.4013A6.9785,6.9785,0,0,0,15,22.92V25H11v2h4v3h2V27h4V25H17V22.92a6.9785,6.9785,0,0,0,4.5984-11.1045L28,5.4141V10h2V2ZM16,21a5,5,0,1,1,5-5A5.0059,5.0059,0,0,1,16,21Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>