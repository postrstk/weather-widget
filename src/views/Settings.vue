<template>
    <div class="settings-card">
        <span class="settings-card__title"> Settings </span>
        <transition name="slide-fade" mode="out-in">
            <draggable
                v-if="locations.length"
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
            <empty-locations-list v-else />
        </transition>
        <input-location @submit="handleSubmitNewLocation" />
    </div>
</template>

<script>
import draggable from "vuedraggable";

import InputLocation from "@/components/Settings/InputLocation";
import LocationListItem from "@/components/Settings/LocationListItem";
import EmptyLocationsList from "@/components/Settings/EmptyLocationsList";

import { SYNC_UPDATE_LOCATIONS } from "@/store/actionsType";
import {
    ADD_LOCATION,
    REMOVE_LOCATION,
    UPDATE_LOCATIONS_ORDER,
} from "@/store/mutationsType";

export default {
    components: {
        draggable,
        InputLocation,
        LocationListItem,
        EmptyLocationsList,
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
                this.$store.dispatch(SYNC_UPDATE_LOCATIONS, {
                    type: UPDATE_LOCATIONS_ORDER,
                    payload: value,
                });
            },
        },
    },
    methods: {
        handleRemoveLocation(item) {
            this.$store.dispatch(SYNC_UPDATE_LOCATIONS, {
                type: REMOVE_LOCATION,
                payload: this.locations.indexOf(item),
            });
        },
        handleSubmitNewLocation(new_location) {
            this.$store.dispatch(SYNC_UPDATE_LOCATIONS, {
                type: ADD_LOCATION,
                payload: new_location,
            });
        },
    },
};
</script>
