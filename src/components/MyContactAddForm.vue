<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="name" placeholder="Enter contact name">
        <input v-model="phone" placeholder="Phone">
        <input v-model="email" placeholder="Email">
        <button type="submit">Add To Contact List</button>
    </form>
</template>

<script>
export default {
    name: 'MyContactAddForm',
    data() {
        return {
            name: '',
            phone: '',
            email: ''
        };
    },
    methods: {
        handleSubmit() {
            if (this.name && this.phone && this.email) {
                this.$emit('add-contact', { name: this.name, phone: this.phone, email: this.email });
                this.name = '';
                this.phone = '';
                this.email = '';
            }
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: blueviolet;
    padding: 20px;
}

input,
button {
    padding: 10px;
    border: none;
    border-radius: 5px;
}

button {
    background-color: darkblue;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: navy;
}
</style>