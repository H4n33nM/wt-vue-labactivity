<template>
    <div class="card">
        <h1>{{ contact.name }}</h1>
        <button @click="toggleDetails">{{ showDetails ? 'Hide Details' : 'Show Details' }}</button>
        <div v-if="showDetails">
            <h4>{{ contact.phone }}</h4>
            <h4>{{ contact.email }}</h4>
        </div>
        <button @click="$emit('delete-contact', contact.id)">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'MyCard',
    props: {
        contact: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            showDetails: true
        };
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
        }
    }
};
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: darkblue;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: navy;
}
</style>