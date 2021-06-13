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
  data-carbon-icon="MailAll24"
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
  <path d="M16.59 20.41L20.17 24 20.17 24 16.58 27.59 18 29 23 24 18 19 16.59 20.41zM23.59 20.41L27.17 24 27.17 24 23.58 27.59 25 29 30 24 25 19 23.59 20.41z"></path><path d="M14,23H4V7.91l11.43,7.91a1,1,0,0,0,1.14,0L28,7.91V17h2V7a2,2,0,0,0-2-2H4A2,2,0,0,0,2,7V23a2,2,0,0,0,2,2H14ZM25.8,7,16,13.78,6.2,7Z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>