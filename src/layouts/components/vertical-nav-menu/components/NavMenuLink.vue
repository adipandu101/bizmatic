<template>
  <v-list-item
    :class="isDrawerOpen ? 'vertical-nav-menu-link mt-5 mx-5' : 'vertical-nav-menu-link mt-5 mx-5 expand'"
    v-bind="$attrs"
    :active-class="isDrawerOpen ? 'bg-gradient-primary font-primary' : 'bg-gradient-secondary font-white'"
    style="
      border-top-right-radius: 0px !important;
      border-bottom-right-radius: 0px !important;
      border-radius: 6px !important;
    "
  >
    <v-list-item-icon>
      <v-icon
        :class="{ 'alternate-icon-small': !icon }"
        class="mx-auto"
        :style="title == 'Sign Out' ? 'color: #eb344d;' : ''"
      >
        {{ icon || alternateIcon }}
      </v-icon>
    </v-list-item-icon>

    <v-list-item-title
      :active-class="isDrawerOpen ? 'font-primary' : 'font-white'"
      :style="title == 'Sign Out' ? 'color: #eb344d;' : ''"
    >
      {{ title }}
    </v-list-item-title>
  </v-list-item>
</template>

<script>
import { mdiCheckboxBlankCircleOutline } from '@mdi/js'
import { ref, computed } from '@vue/composition-api'
import store from '@/store/index'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: undefined,
    },
  },
  setup() {
    return {
      isDrawerOpen: computed(() => store.state.stateDrawerOpen),
      alternateIcon: mdiCheckboxBlankCircleOutline,
    }
  },
}
</script>

<style lang="scss" scoped>
// @import '~vuetify/src/styles/styles.sass';

.alternate-icon-small {
  font-size: 14px;
  height: 14px;
  width: 14px;
}

.vertical-nav-menu-link {
  &.v-list-item--active {
    box-shadow: 0 5px 10px -4px rgba(94, 86, 105, 0.42);
    @include elevationTransition();
  }
}

.v-list .v-list-item .v-icon {
  color: #d1d5dc;
}

.v-list .v-list-item--active.bg-gradient-primary .v-icon {
  color: #2f86ff;
}

.v-list .v-list-item.expand .v-icon {
  color: #1a3650;
}

.v-list .v-list-item--active.bg-gradient-secondary .v-icon {
  color: white;
}
</style>
