<template>
    <div class="weather-card weather-card--empty" @click="handleClick">
        <div class="weather-card__description">
            No locations selected
        </div>
        <div class="weather-card__description">
            <span>
                <mdicon name="trayPlus" :size="60" />
            </span>
            <p>Allow geolocation or enter manually</p>
        </div>
        <div class="weather-card__description weather-card__description--error">
            {{errorMessage}}
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        errorMessage() {
            return this.$store.getters.geolocationErrorHandler.errorMessage();
        }
    },
    methods: {
        handleClick() {
            this.$emit("addLocation");
        },
    },
};
</script>
