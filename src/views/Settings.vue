<template>
    <div class="settings-card">
        <span class="settings-card__title"> Settings </span>
        <draggable
            v-model="locations"
            handle=".location-list-item__drag-icon"
            class="settings-card__title"
        >
            <location-list-item
                v-for="item in locations"
                :key="item"
                :location-name="item"
                @remove="handleRemoveLocation(item)"
            />
        </draggable>
        <input-location @submit="handleSubmitNewLocation" />
    </div>
</template>

<script>
import draggable from "vuedraggable";

import InputLocation from "@/components/Settings/InputLocation";
import LocationListItem from "@/components/Settings/LocationListItem";

export default {
    components: {
        draggable,
        InputLocation,
        LocationListItem,
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
