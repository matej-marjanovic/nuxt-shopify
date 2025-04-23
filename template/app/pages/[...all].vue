<script setup lang="ts">
const route = useRoute()

if (route.path !== '/') {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found',
    })
}
</script>

<template>
    <div>
        <h1>404</h1>
    </div>
</template>
