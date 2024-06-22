<template>
    <div class="contact-list">
        <my-add-contact-form @add-contact="addContact"></my-add-contact-form>
        <div class="cards-container">
            <my-card v-for="contact in contacts" :key="contact.id" :contact="contact"
                @delete-contact="deleteContact"></my-card>
        </div>
    </div>
</template>

<script>
import MyContactAddForm from './MyContactAddForm.vue';
import MyCard from './MyCard.vue';

export default {
    name: 'MyContactList',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        MyContactAddForm,
        MyCard
    },
    data() {
        return {
            contacts: [
                { id: 1, name: 'Ali', phone: '011-56580604', email: 'ali@gmail.com' },
                { id: 2, name: 'John Doe', phone: '012-3456789', email: 'john@example.com' }
            ]
        };
    },
    methods: {
        addContact(contact) {
            const newContact = { ...contact, id: Date.now() };
            this.contacts.push(newContact);
        },
        deleteContact(id) {
            this.contacts = this.contacts.filter(contact => contact.id !== id);
        }
    }
};
</script>

<style scoped>
.contact-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 20px;
}

.cards-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 600px;
}
</style>