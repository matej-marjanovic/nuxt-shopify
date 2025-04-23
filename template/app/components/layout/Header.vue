<script setup lang="ts">
const localePath = useLocalePath()
const { isOpen } = useMenu()
const { t } = useI18n()
</script>

<template>
    <header class="bg-black py-3 lg:py-4 mb-8">
        <div class="flex items-center justify-between px-4 lg:px-8">
            <NuxtLink
                :to="localePath('/')"
                class="flex items-center gap-4"
            >
                <NuxtImg
                    src="/images/logo.png"
                    alt="Nuxt Shopify"
                    class="w-24"
                    height="42"
                    width="96"
                />

                <p class="text-white text-xl font-light">
                    {{ t('header.name') }}
                </p>
            </NuxtLink>

            <button
                class="text-white h-6"
                @click="isOpen = !isOpen"
            >
                <Icon
                    :name="`hugeicons:${isOpen ? 'cancel-01' : 'menu-11'}`"
                    :aria-label="t('header.menu')"
                    class="w-6 h-6"
                />
            </button>
        </div>
    </header>
</template>
