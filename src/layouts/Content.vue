<template>
  <v-app>
    <v-banner
      :value="!isDrawerOpen"
      single-line
      :sticky="false"
      max-height="40"
      :hidden="$vuetify.breakpoint.mobile"
      class="py-0 px-13"
      style="background: #000d2c; color: #ccd3e2 !important; font-size: 14px"
    >
      <span class="ps-12"> Bizmatic Et in netus velit tincidunt. Maecenas molestie vitae at. </span>

      <template v-slot:actions>
        <span class="pe-12">
          <v-btn text color="#ccd3e2" style="text-transform: none"> Get Support </v-btn>
          <v-btn text color="#ccd3e2" style="text-transform: none"> Docs </v-btn>
          <v-btn text color="#ccd3e2" style="text-transform: none"> Sales </v-btn>
          <v-btn text color="#ccd3e2" style="text-transform: none"> Jobs </v-btn>
        </span>
      </template>
    </v-banner>
    <v-banner :value="!isDrawerOpen" two-line :sticky="true" class="py-0 px-13 navbar-banner">
      <v-app-bar color="white" dense dark min-height="72" class="ps-11 pt-2">
        <v-toolbar-title>
          <v-img :src="require('@/assets/images/logos/bizmatic_logo.svg')" max-height="32px" alt="logo" contain></v-img>
        </v-toolbar-title>
        <v-btn text @click="$router.push('/')" color="#687083" style="text-transform: none"> Home </v-btn>
        <v-btn text color="#687083" style="text-transform: none"> How It Works </v-btn>
        <v-btn text color="#687083" style="text-transform: none"> Marketplace </v-btn>
        <v-btn text color="#687083" style="text-transform: none"> Pricing </v-btn>
        <v-spacer></v-spacer>
        <!--a
          href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free"
          target="_blank"
          rel="nofollow"
        >
          <v-icon class="ms-6 me-4">
            {{ icons.mdiGithub }}
          </v-icon>
        </a>
        <v-btn icon small class="ms-3">
          <v-icon>
            {{ icons.mdiBellOutline }}
          </v-icon>
        </v-btn>
        <app-bar-user-menu></app-bar-user-menu-->
      </v-app-bar>
    </v-banner>

    <v-main>
      <div class="app-content-container px-13 pt-6 pb-16">
        <v-row class="px-16">
          <v-col :cols="isDrawerOpen ? '1' : '3'">
            <vertical-nav-menu :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu>
          </v-col>
          <v-col :cols="isDrawerOpen ? '12' : '9'">
            <slot></slot>
          </v-col>
        </v-row>
      </div>
    </v-main>

    <v-footer v-if="!isDrawerOpen" app absolute height="192" class="py-3 px-0">
      <v-row style="background: #2f86ff; height: 192px; padding-left: 100px; padding-right: 100px">
        <v-col cols="10">
          <div class="pt-11" style="font-size: 30px; font-weight: 700; line-height: 36px; color: white">
            Ready to join with us?
          </div>
          <div class="pt-4 pb-11" style="font-size: 18px; color: white">
            Ultrices eget ultricies adipiscing enim sit. Vitae, ultricies tellus fermentum sem.
          </div>
        </v-col>
        <v-col cols="2">
          <v-btn color="white" style="text-transform: none; font-weight: 600; color: #2f86ff; margin-top: 73px">
            Whatsapp Now
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="py-14" style="background: #092540; height: 440px; padding-left: 100px; padding-right: 100px">
        <v-col cols="4">
          <div style="max-width: 149px">
            <v-img
              :src="require('@/assets/images/logos/bizmatic_logo_white.svg')"
              max-height="35px"
              alt="logo"
              contain
            ></v-img>
          </div>
          <div class="pt-4 pb-11" style="font-size: 14px; color: #9aa2b1">
            4517 Washington Ave. Manchester, Kentucky 39495<br />
            (217) 555-0113
          </div>
        </v-col>
        <v-col cols="3"
          ><div class="mb-4" style="font-weight: 600; font-size: 16px; line-height: 24px; color: #ffffff">Company</div>
          <div style="font-size: 14px; line-height: 28px; color: #9aa2b1">
            Home<br />
            How it works<br />
            Pricing<br />
            Blog<br />
            About<br /></div
        ></v-col>
        <v-col cols="3"
          ><div class="mb-4" style="font-weight: 600; font-size: 16px; line-height: 24px; color: #ffffff">Products</div>
          <div style="font-size: 14px; line-height: 28px; color: #9aa2b1">
            Aplikasi 1<br />
            Aplikasi 1<br />
            Aplikasi 1<br />
            Aplikasi 1<br />
            Aplikasi 1<br />
            Aplikasi 1<br />
          </div>
        </v-col>
        <v-col cols="2"
          ><div class="mb-4" style="font-weight: 600; font-size: 16px; line-height: 24px; color: #ffffff">Contact</div>
          <div style="font-size: 14px; line-height: 28px; color: #9aa2b1">
            Support<br />
            Sales<br />
            Report<br />
            Share your ideas<br /></div
        ></v-col>
        <v-col cols="12" class="mx-3" style="border-bottom: 1px solid #f0f2f5"> </v-col>
        <div class="boxed-container w-full">
          <div class="mx-3 d-flex justify-space-between">
            <span cols="12" class="pt-6" style="font-size: 12px; color: white">
              2022 Bizmatic, All rights reserved.</span
            >
            <span class="pt-6 d-sm-inline d-none">
              <v-icon color="white" class="ms-2">
                {{ icons.mdiInstagram }}
              </v-icon>
              <v-icon color="white" class="ms-2">
                {{ icons.mdiFacebook }}
              </v-icon>
              <v-icon color="white" class="ms-2">
                {{ icons.mdiTwitter }}
              </v-icon>
              <v-icon color="white" class="ms-2">
                {{ icons.mdiYoutube }}
              </v-icon>
            </span>
          </div>
        </div>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
import { mdiMagnify, mdiBellOutline, mdiGithub } from '@mdi/js'
import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import AppBarUserMenu from './components/AppBarUserMenu.vue'
import store from '../store/index'

export default {
  components: {
    VerticalNavMenu,
    ThemeSwitcher,
    AppBarUserMenu,
  },
  setup() {
    return {
      isDrawerOpen: computed(() => store.state.stateDrawerOpen),
      // Icons
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
</style>
