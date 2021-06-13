<script>
  /** @extends {"../OverflowMenu/OverflowMenuItem"} OverflowMenuItemProps */

  import OverflowMenuItem from "../OverflowMenu/OverflowMenu.svelte";
</script>

<OverflowMenuItem {...$$restProps} on:click on:keydown>
  <slot />
</OverflowMenuItem>
