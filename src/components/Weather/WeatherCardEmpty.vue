<template>
    <div class="weather-card weather-card--empty" @click="handleClick">
        <div class="weather-card__description">
            No locations selected
        </div>
        <div class="weather-card__description">
            <span>
                <mdicon name="trayPlus" :size="60"/>
            </span>
            <p> Allow geolocation or enter manually</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick() {
            this.$emit("addLocation");
        }
    }
};
</script>
