<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';

const props = defineProps({
    error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
    <NuxtLayout>
        <div class="py-14 text-center">
            <h1 class="text-8xl leading-xl tracking-wider">
                {{ props.error?.statusCode }}
            </h1>
    
            <h2 class="text-4xl leading-lg tracking-wide mt-2">
                {{ props.error?.statusMessage }}
            </h2>
    
            <button
                class="mt-12"
                @click="handleError"
            >
                Back to homepage
            </button>
        </div>
    </NuxtLayout>
</template>
