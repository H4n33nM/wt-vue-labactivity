<template>
    <!-- Footer -->
    <div class="footer">
        <p>&copy; 2024 Web Technology <strong>SECJ 3483</strong>. All rights reserved.</p>
    </div>
</template>


<script>
export default {
    name: "my-footer"
};
</script>

<style scoped>
.footer {
    width: 100%;
    background-color: rgba(0, 0, 0, 1);
    color: #fff;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}

.footer p {
    margin: 10px 0;
}
</style>