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
  data-carbon-icon="DistributeHorizontalCenter24"
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
  <path d="M24 10H23V2H21v8H20a2.0023 2.0023 0 00-2 2v8a2.0023 2.0023 0 002 2h1v8h2V22h1a2.0023 2.0023 0 002-2V12A2.0023 2.0023 0 0024 10zm0 10H20V12h4zM12 6H11V2H9V6H8A2.0023 2.0023 0 006 8V24a2.0023 2.0023 0 002 2H9v4h2V26h1a2.0023 2.0023 0 002-2V8A2.0023 2.0023 0 0012 6zm0 18H8V8h4z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>