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
  data-carbon-icon="PartlyCloudy32"
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
  <path d="M27 15H31V17H27z"></path><path d="M23.086 5.794H27.329V7.794H23.086z" transform="rotate(-45 25.207 6.794)"></path><path d="M15 1H17V5H15z"></path><path d="M4.672 24.208H8.915V26.208H4.672z" transform="rotate(-45 6.793 25.208)"></path><path d="M5.793 4.672H7.793V8.915H5.793z" transform="rotate(-45 6.793 6.794)"></path><path d="M1 15H5V17H1zM26.7939 20.3418a6.9617 6.9617 0 00-1.8681-3.2671A8.485 8.485 0 0025 16a9 9 0 10-14.585 7.0332A4.9771 4.9771 0 0015 30H25a4.9947 4.9947 0 001.7939-9.6582zM9 16a6.9955 6.9955 0 0113.9849-.2969A6.8883 6.8883 0 0020 15a7.04 7.04 0 00-6.7944 5.3418A4.986 4.986 0 0011.5618 21.39 6.9675 6.9675 0 019 16zM25 28H15a2.9945 2.9945 0 01-.6963-5.9082l.6587-.1572.0986-.67a4.9923 4.9923 0 019.878 0l.0986.6695.6587.1572A2.9945 2.9945 0 0125 28z"></path>
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>