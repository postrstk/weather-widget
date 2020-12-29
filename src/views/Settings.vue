<template>
    <div class="settings-card">
        <span class="settings-card__title"> Settings </span>
        <draggable
            v-model="locations"
            handle=".location-list-item__drag-icon"
            class="settings-card__title"
            :name="!drag ? 'flip-list' : null"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
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
    data() {
        return {
            drag: false,
        };
    },
    computed: {
        dragOptions() {
            return {
                animation: 200,
                disabled: false,
                ghostClass: "ghost",
            };
        },
        locations: {
            get() {
                return this.$store.getters.locations;
            },
            set(value) {
                this.$store.dispatch("syncUpdateLocations", {
                    type: "updateLocationsOrder",
                    payload: value,
                });
            },
        },
    },
    methods: {
        handleRemoveLocation(item) {
            this.$store.dispatch("syncUpdateLocations", {
                type: "removeLocation",
                payload: this.locations.indexOf(item),
            });
        },
        handleSubmitNewLocation(new_location) {
            this.$store.dispatch("syncUpdateLocations", {
                type: "addLocation",
                payload: new_location,
            });
        },
    },
};
</script>
