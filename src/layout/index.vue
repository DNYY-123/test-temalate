<template>
  <div class="app-main">
    <head-er />
    <side-bar />
    <app-main />
  </div>
</template>

<script>
import AppMain from './Main'
import HeadEr from './Header'
import SideBar from '@/layout/SideBar'
export default {
  components: {
    AppMain,
    HeadEr,
    SideBar
  }
}
</script>

<style>
</style>
