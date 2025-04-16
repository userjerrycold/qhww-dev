<template>
  <div class="min-h-screen relative">
    <div class="fixed inset-0 -z-10 w-full h-full bg-pink-50/30">
      <SnowfallBg 
        color="#FFB6C1"
        :quantity="150"
        :speed="1.5"
        :maxRadius="4"
        :minRadius="1"
        class="w-full h-full"
      />
    </div>
    
    <!-- Navigation Bar -->
    <nav class="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <span class="text-xl font-bold text-black dark:text-white font-serif">弯宝笔记</span>
          </div>
          
          <!-- Mobile menu button -->
          <div class="flex items-center md:hidden">
            <button
              @click="isMenuOpen = !isMenuOpen"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none"
            >
              <span class="sr-only">打开主菜单</span>
              <svg
                class="h-6 w-6"
                :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                class="h-6 w-6"
                :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Desktop menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-serif">备忘录</a>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-serif">孕期记录</a>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-serif">坦克薯条</a>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-serif">回忆篇</a>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-serif">工具箱</a>
            <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-serif">菜谱</a>
          </div>
        </div>

        <!-- Mobile menu -->
        <div
          class="md:hidden"
          :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
        >
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-serif">备忘录</a>
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-serif">孕期记录</a>
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-serif">坦克薯条</a>
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-serif">回忆篇</a>
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-serif">工具箱</a>
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-serif">菜谱</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="relative pt-20 px-4">
      <div class="max-w-7xl mx-auto py-8">
        <h1 class="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200 font-serif">欢迎来到弯宝的小小世界</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- 备忘录卡片 -->
          <ClientOnly>
            <CardContainer>
              <CardBody
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-white/80 backdrop-blur-sm p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black/80 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
              >
                <CardItem
                  :translate-z="50"
                  class="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  备忘录
                </CardItem>
                <CardItem
                  as="p"
                  translate-z="60"
                  class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                  记录生活中的重要事项，让每一天都井井有条
                </CardItem>
                <CardItem
                  :translate-z="100"
                  :rotate-x="20"
                  :rotate-z="-10"
                  class="mt-4 w-full"
                >
                  <img
                    src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="备忘录"
                  />
                </CardItem>
                <div class="mt-20 flex items-center justify-between">
                  <CardItem
                    :translate-z="20"
                    :translate-x="-40"
                    as="a"
                    href="#"
                    class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                  >
                    查看详情 →
                  </CardItem>
                  <CardItem
                    :translate-z="20"
                    :translate-x="40"
                    as="button"
                    class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                  >
                    开始记录
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </ClientOnly>

          <!-- 孕期记录卡片 -->
          <ClientOnly>
            <CardContainer>
              <CardBody
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-white/80 backdrop-blur-sm p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black/80 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
              >
                <CardItem
                  :translate-z="50"
                  class="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  孕期记录
                </CardItem>
                <CardItem
                  as="p"
                  translate-z="60"
                  class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                  记录孕期点滴，珍藏这段特殊的时光
                </CardItem>
                <CardItem
                  :translate-z="100"
                  :rotate-x="20"
                  :rotate-z="-10"
                  class="mt-4 w-full"
                >
                  <img
                    src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="孕期记录"
                  />
                </CardItem>
                <div class="mt-20 flex items-center justify-between">
                  <CardItem
                    :translate-z="20"
                    :translate-x="-40"
                    as="a"
                    href="#"
                    class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                  >
                    查看详情 →
                  </CardItem>
                  <CardItem
                    :translate-z="20"
                    :translate-x="40"
                    as="button"
                    class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                  >
                    开始记录
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </ClientOnly>

          <!-- 坦克薯条卡片 -->
          <ClientOnly>
            <CardContainer>
              <CardBody
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-white/80 backdrop-blur-sm p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black/80 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
              >
                <CardItem
                  :translate-z="50"
                  class="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  坦克薯条
                </CardItem>
                <CardItem
                  as="p"
                  translate-z="60"
                  class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                  记录坦克薯条的成长点滴，见证每一个重要时刻
                </CardItem>
                <CardItem
                  :translate-z="100"
                  :rotate-x="20"
                  :rotate-z="-10"
                  class="mt-4 w-full"
                >
                  <img
                    src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="坦克薯条"
                  />
                </CardItem>
                <div class="mt-20 flex items-center justify-between">
                  <CardItem
                    :translate-z="20"
                    :translate-x="-40"
                    as="a"
                    href="#"
                    class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                  >
                    查看详情 →
                  </CardItem>
                  <CardItem
                    :translate-z="20"
                    :translate-x="40"
                    as="button"
                    class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                  >
                    开始记录
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </ClientOnly>

          <!-- 回忆篇卡片 -->
          <ClientOnly>
            <CardContainer>
              <CardBody
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-white/80 backdrop-blur-sm p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black/80 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
              >
                <CardItem
                  :translate-z="50"
                  class="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  回忆篇
                </CardItem>
                <CardItem
                  as="p"
                  translate-z="60"
                  class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                  珍藏美好回忆，记录生活中的点点滴滴
                </CardItem>
                <CardItem
                  :translate-z="100"
                  :rotate-x="20"
                  :rotate-z="-10"
                  class="mt-4 w-full"
                >
                  <img
                    src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="回忆篇"
                  />
                </CardItem>
                <div class="mt-20 flex items-center justify-between">
                  <CardItem
                    :translate-z="20"
                    :translate-x="-40"
                    as="a"
                    href="#"
                    class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                  >
                    查看详情 →
                  </CardItem>
                  <CardItem
                    :translate-z="20"
                    :translate-x="40"
                    as="button"
                    class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                  >
                    开始记录
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </ClientOnly>

          <!-- 工具箱卡片 -->
          <ClientOnly>
            <CardContainer>
              <CardBody
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-white/80 backdrop-blur-sm p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black/80 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
              >
                <CardItem
                  :translate-z="50"
                  class="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  工具箱
                </CardItem>
                <CardItem
                  as="p"
                  translate-z="60"
                  class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                  实用工具集合，让生活更便捷
                </CardItem>
                <CardItem
                  :translate-z="100"
                  :rotate-x="20"
                  :rotate-z="-10"
                  class="mt-4 w-full"
                >
                  <img
                    src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="工具箱"
                  />
                </CardItem>
                <div class="mt-20 flex items-center justify-between">
                  <CardItem
                    :translate-z="20"
                    :translate-x="-40"
                    as="a"
                    href="#"
                    class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                  >
                    查看详情 →
                  </CardItem>
                  <CardItem
                    :translate-z="20"
                    :translate-x="40"
                    as="button"
                    class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                  >
                    开始使用
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </ClientOnly>

          <!-- 菜谱卡片 -->
          <ClientOnly>
            <CardContainer>
              <CardBody
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-white/80 backdrop-blur-sm p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black/80 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
              >
                <CardItem
                  :translate-z="50"
                  class="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  菜谱
                </CardItem>
                <CardItem
                  as="p"
                  translate-z="60"
                  class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                  记录美食食谱，分享烹饪心得
                </CardItem>
                <CardItem
                  :translate-z="100"
                  :rotate-x="20"
                  :rotate-z="-10"
                  class="mt-4 w-full"
                >
                  <img
                    src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="菜谱"
                  />
                </CardItem>
                <div class="mt-20 flex items-center justify-between">
                  <CardItem
                    :translate-z="20"
                    :translate-x="-40"
                    as="a"
                    href="#"
                    class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                  >
                    查看详情 →
                  </CardItem>
                  <CardItem
                    :translate-z="20"
                    :translate-x="40"
                    as="button"
                    class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                  >
                    开始记录
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </ClientOnly>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import CardContainer from '@/components/ui/card-3d/CardContainer.vue'
import CardBody from '@/components/ui/card-3d/CardBody.vue'
import CardItem from '@/components/ui/card-3d/CardItem.vue'
import SnowfallBg from '@/components/SnowfallBg.vue'
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script> 