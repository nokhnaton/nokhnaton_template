<script setup lang="ts">
import isMobile from 'ismobilejs'
const isPhone = isMobile().phone
</script>

<template>
  <div>
    <div>
      <RouterLink :class="$style.linkText" to="/">Home</RouterLink>
    </div>
  </div>
</template>

<style module lang="scss"></style>
