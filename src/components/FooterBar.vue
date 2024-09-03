<script setup>
import { containerMaxW } from '@/config'
import BaseLevel from '@/components/BaseLevel.vue'
import DinhThiLogo from '@/components/DinhThiLogo.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-2 px-6" :class="containerMaxW">
    <BaseLevel>
      <div class="text-center md:text-left">
        <b>&copy;{{ year }}, <a href="https://thithordev.github.io/Dashboard-E-Commerce-Demo/" target="_blank">DinhThi.Nguyen</a>.</b>
        <slot />
      </div>
      <div class="md:py-2">
        <a href="https://thithordev.github.io/Dashboard-E-Commerce-Demo/">
          <DinhThiLogo class="w-auto h-8 md:h-6" />
        </a>
      </div>
    </BaseLevel>
  </footer>
</template>