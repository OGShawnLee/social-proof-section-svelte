<script lang="ts" context="module">
  function range(amount: number) {
    return [...Array(amount).keys()];
  }
</script>

<script>
  import { iconStar } from '../assets/index';

  export let amount = 5;
  export let transform = '';

  $: transformClass = `transform ${transform}`.trim();
</script>

<div class="w-full ml-auto | bg-magenta-100 rounded-lg {transformClass} | lg:max-w-[fit-content]">
  <div
    class="p-4 | flex flex-col items-center gap-3 | lg:w-96 xl:(w-108 flex-row justify-center gap-12)">
    <div class="flex gap-3">
      {#each range(amount) as index (index)}
        <img src={iconStar} alt="" width="18" height="18" />
      {/each}
    </div>
    <strong class="text-base text-magenta-700 font-semibold">
      <slot />
    </strong>
  </div>
</div>
