<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
    data: () => {
        return {
            message: 'test'
        }
    }
}
</script>

<style scoped>
p {
    color: green;
}
</style>
