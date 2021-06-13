<script>
  /**
   * Specify the ARIA label for the button
   * @type {string}
   */
  export let ariaLabel = undefined;

  /** Set to `true` to toggle the open state */
  export let isOpen = false;

  /** Obtain a reference to the HTML button element */
  export let ref = null;

  import Close20 from "../../../icons/Close20/Close20.svelte";
  import Menu20 from "../../../icons/Menu20/Menu20.svelte";
  import Icon from "../../Icon/Icon.svelte";
</script>

<button
  bind:this="{ref}"
  type="button"
  title="Open menu"
  aria-label="{ariaLabel}"
  class:bx--header__action="{true}"
  class:bx--header__menu-trigger="{true}"
  class:bx--header__menu-toggle="{true}"
  {...$$restProps}
  on:click
  on:click="{() => (isOpen = !isOpen)}"
>
  <Icon
    title="{isOpen ? 'Close' : 'Open Menu'}"
    render="{isOpen ? Close20 : Menu20}"
  />
</button>
