<template>
    <div>
        <draggable v-model="locations" handle=".handleDnD">
            <div v-for="item in locations" :key="item" style="display:flex;">
                <div
                    class="handleDnD"
                    style="width:30px;height:30px; background-color:red;"
                ></div>
                <span>{{ item }}</span>
                <div
                    @click="handleRemoveLocation(item)"
                    style="width:30px;height:30px; background-color:red;"
                ></div>
            </div>
        </draggable>
        <span
            @click="handleClick"
            class="mdi mdi-close fab-button"
        >
        </span>
        <input-location @submit="handleSubmitNewLocation"/>
    </div>
</template>

<script>
import draggable from "vuedraggable";

import InputLocation from "@/components/Settings/InputLocation"

export default {
    components: {
        draggable,
        InputLocation,
    },
    computed: {
        locations: {
            get() {
                return this.$store.getters.locations;
            },
            set(value) {
                this.$store.dispatch("updateLocations", {
                    type: "updateLocationsOrder",
                    payload: value,
                });
            },
        },
    },
    methods: {
        handleClick() {
            this.$router.push({ name: "Weather" });
        },
        handleRemoveLocation(item) {
            this.$store.dispatch("updateLocations", {
                type: "removeLocation",
                payload: this.locations.indexOf(item),
            });
        },
        handleSubmitNewLocation(new_location) {
            this.$store.dispatch("updateLocations", {
                type: "addLocation",
                payload: new_location,
            });
        },
    },
};
</script>
