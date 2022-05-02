<script lang="ts">
  export let fullName: string;
  export let src: string;
  export let alt = fullName + ' Profile';
  export let title = 'Verified Buyer';
  export let transform = '';

  $: transformClass = `transform ${transform}`.trim();
</script>

<article class="p-6 | flex flex-col gap-6 | bg-magenta-700 rounded-lg {transformClass}">
  <header class="flex items-center gap-6">
    <img class="h-16 w-16 min-w-16 | rounded-full" {src} {alt} width="64" height="64" />
    <div class="grid gap-1">
      <h3 class="text-lg text-white font-semibold">{fullName}</h3>
      <span class="text-pink font-semibold"> {title}</span>
    </div>
  </header>
  <blockquote>
    <p class="text-white leading-relaxed">
      <slot />
    </p>
  </blockquote>
</article>
