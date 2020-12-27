<template>
    <div>
        Settings view
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
        <div
            @click="handleClick"
            style="background-color: blue; color: white; width: 300px; height:60px;"
        >
            button for back
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
    components: {
        draggable,
    },
    computed: {
        locations: {
            get() {
                return this.$store.getters.locations;
            },
            set(value) {
                this.$store.commit("updateLocationsOrder", value);
            },
        },
    },
    methods: {
        handleClick() {
            this.$router.push({ name: "Weather" });
        },
        handleRemoveLocation(item) {
            this.$store.commit("removeLocation", item);
        }
    },
};
</script>
