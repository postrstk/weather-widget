<template>
    <div class="location-list-item">
        <div class="location-list-item__drag-icon">
            <span>
                <mdicon name="menu" />
            </span>
        </div>
        <div class="location-list-item__text">
            {{ LocationName }}
        </div>
        <div class="location-list-item__remove-icon" @click="handleClick">
            <span>
                <mdicon name="delete" />
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        LocationName: {
            type: String,
            default: "",
        },
    },
    methods: {
        handleClick() {
            this.$emit("remove");
        }
    }
};
</script>
