<template>
  <div class="min-h-screen bg-white dark:bg-black">
    <AuroraBackground>
      <Motion
        as="div"
        :initial="{ opacity: 0, y: 40, filter: 'blur(10px)' }"
        :in-view="{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        }"
        :transition="{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }"
        class="relative flex flex-col items-center justify-center gap-4 px-4 min-h-screen"
      >
        <div class="text-center text-4xl font-bold md:text-8xl dark:text-white font-serif tracking-wide" 
             style="text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">
          弯宝的小小世界
        </div>
        <div class="py-4 text-lg font-light md:text-5xl dark:text-neutral-200 font-serif italic tracking-wider" 
             style="text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
          记录生活点滴，珍藏每一份美好
        </div>
        <button
          @click="navigateToHome"
          class="w-fit rounded-full bg-black px-6 py-3 text-white dark:bg-white dark:text-black text-lg font-medium hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
        >
          开启旅程
        </button>
      </Motion>
    </AuroraBackground>
  </div>
</template>

<script setup>
import AuroraBackground from '../components/AuroraBackground.vue';
import { Motion } from "motion-v";
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToHome = () => {
  router.push('/home');
};
</script> 