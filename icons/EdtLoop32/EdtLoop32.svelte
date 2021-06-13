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
  data-carbon-icon="EdtLoop32"
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
  <path d="M23.625,22.5875a6.1287,6.1287,0,0,1-4.5-1.9l-3.1-3.2-3.1,3.2a6.4582,6.4582,0,0,1-9.1,0,7.028,7.028,0,0,1-1.8-4.7,6.6547,6.6547,0,0,1,1.9-4.7,6.3375,6.3375,0,0,1,9,0l3.1,3.2,3.1-3.2a6.3375,6.3375,0,0,1,9,0,6.8282,6.8282,0,0,1,0,9.4A6.5418,6.5418,0,0,1,23.625,22.5875Zm-6.2-6.6,3.1,3.3a4.4061,4.4061,0,0,0,6.2,0,4.9077,4.9077,0,0,0,0-6.6,4.4061,4.4061,0,0,0-6.2,0Zm-9-4.6a4.1582,4.1582,0,0,0-3.1,1.3,4.8385,4.8385,0,0,0,0,6.6,4.4061,4.4061,0,0,0,6.2,0l3.1-3.3-3.1-3.3A4.7706,4.7706,0,0,0,8.425,11.3875Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>