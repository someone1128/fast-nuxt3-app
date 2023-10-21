<template>
  <div>
    <!--
  https://nuxt.com.cn/docs/api/components/nuxt-page
  https://nuxt.com.cn/docs/guide/directory-structure/app
  记住那个 app.vue 作为Nuxt应用程序的主要组件。你添加的任何东西(JS和CSS)都是全局的，包含在每个页面中。
  -->
        <!--最大缓存 10 级页面，提升用户体验-->
        <NuxtPage :keepalive="{ max: 10 }"/>
  </div>
</template>

<script lang="ts" setup>

// SEO 优化
useSeoMeta({
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili官方',
  description:
      '哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。',
  keywords: 'B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影',
  // 绕开 B 站图片防盗链
  referrer: 'no-referrer',
})

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
