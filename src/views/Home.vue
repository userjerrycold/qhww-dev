<template>
  <div class="min-h-screen relative">
    <AuroraBackground class="fixed inset-0 -z-10 w-full h-full" />
    
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
          <div class="hidden md:flex items-center space-x-1">
            <a href="/home" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-serif">主页</a>
            
            <!-- 工作 Dropdown -->
            <div class="relative group">
              <button class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-serif flex items-center">
                工作
                <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <div class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out z-20">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 font-serif" role="menuitem">待做事项</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 font-serif" role="menuitem">随笔记录</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 font-serif" role="menuitem">工具箱</a>
                </div>
              </div>
            </div>

            <!-- 生活 Dropdown -->
            <div class="relative group">
              <button class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-serif flex items-center">
                生活
                <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <div class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out z-20">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 font-serif" role="menuitem">账单</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 font-serif" role="menuitem">菜谱</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 font-serif" role="menuitem">计划</a>
                </div>
              </div>
            </div>
            
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-serif">游戏</a>
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-serif">AI</a>
          </div>
        </div>

        <!-- Mobile menu -->
        <div
          class="md:hidden"
          :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
        >
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/home" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-serif">主页</a>
            
            <!-- 工作 Mobile Dropdown -->
            <div>
              <button @click="toggleMobileDropdown('work')" class="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-serif">
                工作
                <svg class="ml-1 h-5 w-5 transform transition-transform duration-200" :class="{'rotate-180': mobileDropdownOpen === 'work'}" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <div v-if="mobileDropdownOpen === 'work'" class="mt-1 pl-4 space-y-1">
                <a href="#" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-serif">待做事项</a>
                <a href="#" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-serif">随笔记录</a>
                <a href="#" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-serif">工具箱</a>
              </div>
            </div>

            <!-- 生活 Mobile Dropdown -->
            <div>
              <button @click="toggleMobileDropdown('life')" class="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-serif">
                生活
                <svg class="ml-1 h-5 w-5 transform transition-transform duration-200" :class="{'rotate-180': mobileDropdownOpen === 'life'}" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <div v-if="mobileDropdownOpen === 'life'" class="mt-1 pl-4 space-y-1">
                <a href="#" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-serif">账单</a>
                <a href="#" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-serif">菜谱</a>
                <a href="#" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-serif">计划</a>
              </div>
            </div>

            <a href="#" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-serif">游戏</a>
            <a href="#" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-serif">AI</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="relative pt-20 px-4">
      <div class="max-w-7xl mx-auto py-8">
        <h1 class="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200 font-serif">高效工作，精致生活</h1>
        <p class="text-1xl md:text-1xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200 font-serif">一站式管理您的工作任务与生活计划，让每一天都井井有条</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-80 gap-y-5">
          <!-- 备忘录卡片 -->
          <ClientOnly>
            <CardContainer>
              <CardBody
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[24rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
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
                  class="mt-4 w-full"
                >
                  <div class="space-y-4">
                    <!-- 状态统计 -->
                    <div class="grid grid-cols-2 gap-3">
                      <div class="flex items-center space-x-2 p-2 rounded-lg bg-red-50 dark:bg-red-900/20">
                        <div class="w-2 h-2 rounded-full bg-red-500"></div>
                        <div class="flex flex-col">
                          <span class="text-sm font-medium text-red-600 dark:text-red-400">紧急</span>
                          <span class="text-xs text-red-500 dark:text-red-300">2 项待处理</span>
                        </div>
                      </div>
                      <div class="flex items-center space-x-2 p-2 rounded-lg bg-green-50 dark:bg-green-900/20">
                        <div class="w-2 h-2 rounded-full bg-green-500"></div>
                        <div class="flex flex-col">
                          <span class="text-sm font-medium text-green-600 dark:text-green-400">已完成</span>
                          <span class="text-xs text-green-500 dark:text-green-300">12 项</span>
                        </div>
                      </div>
                    </div>

                    <!-- 最近备忘录 -->
                    <div class="space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="text-sm font-medium text-gray-600 dark:text-gray-300">最近备忘录</span>
                        <CardItem
                    :translate-z="20"
                    as="router-link"
                    to="/memo" class="text-xs text-gray-500 dark:text-gray-400">查看全部</CardItem>
                      </div>
                      <div class="space-y-2">
                        <div class="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                          <div class="flex items-start justify-between">
                            <span class="text-sm text-gray-800 dark:text-gray-200 line-clamp-1">项目会议纪要</span>
                            <span class="text-xs text-red-500">紧急</span>
                          </div>
                          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">讨论了Q3产品路线图，需要在下周三前完成原型设计...</p>
                        </div>
                        <div class="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                          <div class="flex items-start justify-between">
                            <span class="text-sm text-gray-800 dark:text-gray-200 line-clamp-1">周末购物清单</span>
                            <span class="text-xs text-gray-500">普通</span>
                          </div>
                          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">1. 有机蔬菜 2. 橄榄油 3. 全麦面包...</p>
                        </div>
                      </div>
                    </div>

                    <!-- 标签统计 -->
                    <div class="flex flex-wrap gap-2">
                      <span class="px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs">工作</span>
                      <span class="px-2 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs">生活</span>
                      <span class="px-2 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs">学习</span>
                    </div>
                  </div>
                </CardItem>
                <div class="mt-6 flex items-center justify-between">
                  <CardItem
                    :translate-z="20"
                    as="router-link"
                    to="/memo"
                    class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                  >
                    查看详情 →
                  </CardItem>
                  <CardItem
                    :translate-z="20"
                    as="router-link"
                    to="/memo"
                    class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                  >
                    查看备忘录
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </ClientOnly>

          <!-- 工具箱卡片 -->
          <ClientOnly>
            <CardContainer>
              <CardBody
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[24rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
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
                  class="mt-4 w-full"
                >
                  <div class="space-y-4">
                    <!-- 工具分类统计 -->
                    <div class="grid grid-cols-2 gap-3">
                      <div class="flex items-center space-x-2 p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                        <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div class="flex flex-col">
                          <span class="text-sm font-medium text-blue-600 dark:text-blue-400">开发工具</span>
                          <span class="text-xs text-blue-500 dark:text-blue-300">5 个工具</span>
                        </div>
                      </div>
                      <div class="flex items-center space-x-2 p-2 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                        <div class="w-2 h-2 rounded-full bg-purple-500"></div>
                        <div class="flex flex-col">
                          <span class="text-sm font-medium text-purple-600 dark:text-purple-400">效率工具</span>
                          <span class="text-xs text-purple-500 dark:text-purple-300">4 个工具</span>
                        </div>
                      </div>
                    </div>

                    <!-- 最近使用工具 -->
                    <div class="space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="text-sm font-medium text-gray-600 dark:text-gray-300">最近使用</span>
                        <CardItem
                          :translate-z="20"
                          as="router-link"
                          to="/tools"
                          class="text-xs text-gray-500 dark:text-gray-400"
                        >
                          查看全部
                        </CardItem>
                      </div>
                      <div class="space-y-2">
                        <div class="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                          <div class="flex items-start justify-between">
                            <span class="text-sm text-gray-800 dark:text-gray-200 line-clamp-1">JSON格式化</span>
                            <span class="text-xs text-blue-500">开发工具</span>
                          </div>
                          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">快速格式化JSON数据，支持压缩和美化...</p>
                        </div>
                        <div class="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                          <div class="flex items-start justify-between">
                            <span class="text-sm text-gray-800 dark:text-gray-200 line-clamp-1">Git命令生成器</span>
                            <span class="text-xs text-purple-500">效率工具</span>
                          </div>
                          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">常用Git命令可视化生成，提高开发效率...</p>
                        </div>
                      </div>
                    </div>

                    <!-- 工具分类标签 -->
                    <div class="flex flex-wrap gap-2">
                      <span class="px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs">开发工具</span>
                      <span class="px-2 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs">效率工具</span>
                      <span class="px-2 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs">设计工具</span>
                    </div>
                  </div>
                </CardItem>
                <div class="mt-6 flex items-center justify-between">
                  <CardItem
                    :translate-z="20"
                    as="router-link"
                    to="/tools"
                    class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                  >
                    查看详情 →
                  </CardItem>
                  <CardItem
                    :translate-z="20"
                    as="router-link"
                    to="/tools"
                    class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                  >
                    使用工具
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </ClientOnly>

          <!-- 菜谱卡片 -->
          <ClientOnly>
            <CardContainer>
              <CardBody
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[24rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
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
                  精选美食菜谱，让烹饪更简单
                </CardItem>
                <CardItem
                  :translate-z="100"
                  class="mt-4 w-full"
                >
                  <div class="space-y-4">
                    <!-- 菜系统计 -->
                    <div class="grid grid-cols-2 gap-3">
                      <div class="flex items-center space-x-2 p-2 rounded-lg bg-red-50 dark:bg-red-900/20">
                        <div class="w-2 h-2 rounded-full bg-red-500"></div>
                        <div class="flex flex-col">
                          <span class="text-sm font-medium text-red-600 dark:text-red-400">中餐</span>
                          <span class="text-xs text-red-500 dark:text-red-300">36 道菜品</span>
                        </div>
                      </div>
                      <div class="flex items-center space-x-2 p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
                        <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div class="flex flex-col">
                          <span class="text-sm font-medium text-yellow-600 dark:text-yellow-400">西餐</span>
                          <span class="text-xs text-yellow-500 dark:text-yellow-300">24 道菜品</span>
                        </div>
                      </div>
                    </div>

                    <!-- 最近菜品 -->
                    <div class="space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="text-sm font-medium text-gray-600 dark:text-gray-300">最近菜品</span>
                        <CardItem
                          :translate-z="20"
                          as="router-link"
                          to="/recipes"
                          class="text-xs text-gray-500 dark:text-gray-400"
                        >
                          查看全部
                        </CardItem>
                      </div>
                      <div class="space-y-2">
                        <div class="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                          <div class="flex items-start justify-between">
                            <span class="text-sm text-gray-800 dark:text-gray-200 line-clamp-1">红烧排骨</span>
                            <span class="text-xs text-red-500">中餐</span>
                          </div>
                          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">经典家常菜，肉质鲜嫩，口感丰富...</p>
                        </div>
                        <div class="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                          <div class="flex items-start justify-between">
                            <span class="text-sm text-gray-800 dark:text-gray-200 line-clamp-1">意大利面</span>
                            <span class="text-xs text-yellow-500">西餐</span>
                          </div>
                          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">简单易做的西式料理，营养美味...</p>
                        </div>
                      </div>
                    </div>

                    <!-- 菜系标签 -->
                    <div class="flex flex-wrap gap-2">
                      <span class="px-2 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs">中餐</span>
                      <span class="px-2 py-1 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 text-xs">西餐</span>
                      <span class="px-2 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs">甜点</span>
                    </div>
                  </div>
                </CardItem>
                <div class="mt-6 flex items-center justify-between">
                  <CardItem
                    :translate-z="20"
                    as="router-link"
                    to="/recipes"
                    class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                  >
                    查看详情 →
                  </CardItem>
                  <CardItem
                    :translate-z="20"
                    as="router-link"
                    to="/recipes"
                    class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                  >
                    浏览菜谱
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </ClientOnly>

          <!-- 坦克薯条卡片 -->
          <ClientOnly>
            <CardContainer>
              <CardBody
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[24rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
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
                  class="mt-4 w-full"
                >
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600 dark:text-gray-300">年龄</span>
                      <span class="text-sm font-medium text-gray-800 dark:text-gray-200">2岁3个月</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600 dark:text-gray-300">体重</span>
                      <span class="text-sm font-medium text-gray-800 dark:text-gray-200">12.5kg</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600 dark:text-gray-300">成长记录</span>
                      <span class="text-sm font-medium text-gray-800 dark:text-gray-200">28篇</span>
                    </div>
                  </div>
                </CardItem>
                <div class="mt-20 flex items-center justify-between">
                  <CardItem
                    :translate-z="20"
                    as="a"
                    href="#"
                    class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                  >
                    查看详情 →
                  </CardItem>
                  <CardItem
                    :translate-z="20"
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
                class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[24rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
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
                  class="mt-4 w-full"
                >
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600 dark:text-gray-300">本月回忆</span>
                      <span class="text-sm font-medium text-gray-800 dark:text-gray-200">8篇</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600 dark:text-gray-300">照片数量</span>
                      <span class="text-sm font-medium text-gray-800 dark:text-gray-200">156张</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600 dark:text-gray-300">视频数量</span>
                      <span class="text-sm font-medium text-gray-800 dark:text-gray-200">23个</span>
                    </div>
                  </div>
                </CardItem>
                <div class="mt-20 flex items-center justify-between">
                  <CardItem
                    :translate-z="20"
                    as="router-link"
                    to="/memories"
                    class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                  >
                    查看详情 →
                  </CardItem>
                  <CardItem
                    :translate-z="20"
                    as="router-link"
                    to="/memories"
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
import AuroraBackground from '@/components/AuroraBackground.vue'
import { ref } from 'vue'

const isMenuOpen = ref(false)
const mobileDropdownOpen = ref(null) // Stores which mobile dropdown is open: 'work', 'life', or null

const toggleMobileDropdown = (dropdownName) => {
  if (mobileDropdownOpen.value === dropdownName) {
    mobileDropdownOpen.value = null; // Close if already open
  } else {
    mobileDropdownOpen.value = dropdownName; // Open the clicked one
  }
}
</script> 