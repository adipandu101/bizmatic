<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="isDrawerOpen"
      mini-variant-width="100"
      :app="isDrawerOpen"
      class="app-navigation-menu"
      width="100%"
      :right="$vuetify.rtl"
      floating
    >
      <v-list-item class="px-2 mt-5 mx-2">
        <v-list-item-avatar style="cursor: pointer">
          <v-img
            @click="toggleDrawer"
            :src="require('@/assets/images/logos/bizmatic_logo_2.svg')"
            max-height="50px"
            alt="logo"
            contain
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-title></v-list-item-title>
        <v-btn icon @click="toggleDrawer">
          <v-icon>{{ icons.mdiChevronLeft }}</v-icon>
        </v-btn>
      </v-list-item>

      <v-list expand shaped class="vertical-nav-menu-items pr-0">
        <nav-menu-link title="Dashboard" :to="{ name: 'dashboard' }" :icon="icons.mdiViewGrid"></nav-menu-link>
        <nav-menu-link title="Apps" :to="{ name: 'apps' }" :icon="icons.mdiSemanticWeb"></nav-menu-link>
        <nav-menu-link title="Market" :to="{ name: 'market' }" :icon="icons.mdiStore"></nav-menu-link>
        <nav-menu-link title="Pricing" :to="{ name: 'pricing' }" :icon="icons.mdiTag"></nav-menu-link>
        <nav-menu-link title="Profile" :to="{ name: 'profile' }" :icon="icons.mdiAccount"></nav-menu-link>
        <nav-menu-link
          title="FAQ & Support"
          :to="{ name: 'faq' }"
          :icon="icons.mdiHelpCircle"
          class="mb-6"
        ></nav-menu-link>
        <v-divider></v-divider>
        <div @click="logout()" style="cursor: pointer">
          <nav-menu-link title="Sign Out" :icon="icons.mdiLogout"></nav-menu-link>
        </div>
        <!--nav-menu-link
          title="Account Settings"
          :to="{ name: 'pages-account-settings' }"
          :icon="icons.mdiAccountCogOutline"
        ></nav-menu-link>
        <nav-menu-group title="Pages" :icon="icons.mdiFileOutline">
          <nav-menu-link title="Login" :to="{ name: 'pages-login' }" target="_blank"></nav-menu-link>
          <nav-menu-link title="Register" :to="{ name: 'pages-register' }" target="_blank"></nav-menu-link>
          <nav-menu-link title="Error" :to="{ name: 'error-404' }" target="_blank"></nav-menu-link>
        </nav-menu-group>
        <nav-menu-section-title title="USER INTERFACE"></nav-menu-section-title>
        <nav-menu-link
          title="Typography"
          :to="{ name: 'typography' }"
          :icon="icons.mdiAlphaTBoxOutline"
        ></nav-menu-link>
        <nav-menu-link title="Icons" :to="{ name: 'icons' }" :icon="icons.mdiEyeOutline"></nav-menu-link>
        <nav-menu-link title="Cards" :to="{ name: 'cards' }" :icon="icons.mdiCreditCardOutline"></nav-menu-link>
        <nav-menu-link title="Tables" :to="{ name: 'simple-table' }" :icon="icons.mdiTable"></nav-menu-link>
        <nav-menu-link title="Form Layouts" :to="{ name: 'form-layouts' }" :icon="icons.mdiFormSelect"></nav-menu-link-->
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiLogout,
  mdiStore,
  mdiTag,
  mdiAccount,
  mdiHelpCircle,
  mdiViewGrid,
  mdiSemanticWeb,
  mdiAlphaTBoxOutline,
  mdiEyeOutline,
  mdiCreditCardOutline,
  mdiTable,
  mdiFileOutline,
  mdiFormSelect,
  mdiAccountCogOutline,
  mdiChevronLeft,
} from '@mdi/js'
import NavMenuSectionTitle from './components/NavMenuSectionTitle.vue'
import NavMenuGroup from './components/NavMenuGroup.vue'
import NavMenuLink from './components/NavMenuLink.vue'
import { ref, computed } from '@vue/composition-api'
import store from '@/store/index'

export default {
  components: {
    NavMenuSectionTitle,
    NavMenuGroup,
    NavMenuLink,
  },
  setup() {
    const drawer = ref(true)
    const mini = ref(true)
    return {
      logout: () => {
        console.log('logging out')
        store.dispatch('logout').then(() => {
          window.location.href = '/pages/login'
        })
      },
      isDrawerOpen: computed(() => store.state.stateDrawerOpen),
      toggleDrawer: () => store.dispatch('toggleDrawer'),
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      drawer,
      mini,
      icons: {
        mdiLogout,
        mdiStore,
        mdiTag,
        mdiAccount,
        mdiHelpCircle,
        mdiViewGrid,
        mdiSemanticWeb,
        mdiAlphaTBoxOutline,
        mdiEyeOutline,
        mdiCreditCardOutline,
        mdiTable,
        mdiFileOutline,
        mdiFormSelect,
        mdiAccountCogOutline,
        mdiChevronLeft,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}

@include theme(app-navigation-menu) using ($material) {
  background-color: #ffffff;
}

.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
