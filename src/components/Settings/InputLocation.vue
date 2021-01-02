<template>
    <div class="input-location">
        <div class="input-location__title">
            Add location:
        </div>
        <input
            v-model="new_location"
            class="input-location__input"
            @keydown.enter="handleSubmit"
        />
        <span class="input-location__icon" @click="handleSubmit">
            <mdicon name="subdirectoryArrowLeft" />
        </span>
        <div class="input-location__title input-location__title--error">
            {{ errorMessage }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            new_location: "",
        };
    },
    computed: {
        errorMessage() {
            return this.$store.getters.inputLocationsErrorHandler.errorMessage();
        },
    },
    methods: {
        handleSubmit() {
            this.$emit("submit", this.new_location);
            this.new_location = "";
        },
    },
};
</script>
