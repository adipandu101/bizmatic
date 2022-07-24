<template>
  <v-app>
    <v-banner
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
    <v-banner two-line :sticky="true" class="py-0 px-13 navbar-banner">
      <v-app-bar color="white" dense dark min-height="72" class="px-7 pt-2">
        <v-toolbar-title>
          <v-img :src="require('@/assets/images/logos/bizmatic_logo.svg')" max-height="32px" alt="logo" contain></v-img>
        </v-toolbar-title>
        <v-spacer v-if="$route.path == '/'"></v-spacer>
        <v-btn text @click="$router.push('/')" color="#687083" style="text-transform: none"> Home </v-btn>
        <v-btn text color="#687083" style="text-transform: none"> How It Works </v-btn>
        <v-btn text color="#687083" style="text-transform: none"> Marketplace </v-btn>
        <v-btn text color="#687083" style="text-transform: none"> Pricing </v-btn>
        <v-spacer v-if="$route.path !== '/'"></v-spacer>
        <v-btn text @click="$router.push('/dashboard')" color="#687083" style="text-transform: none"> Login </v-btn>
        <v-btn color="primary" class="text-white" style="text-transform: none; font-weight: 600"> Sign Up </v-btn>
      </v-app-bar>
    </v-banner>
    <v-main class="px-13" :style="'background: ' + ($route.path == '/' ? 'white' : '#F9FAFB')">
      <router-view></router-view>
    </v-main>
    <v-footer app absolute height="192" class="py-3 px-0">
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
window.addEventListener('scroll', e => {
  const nav = document.querySelector('.navbar-banner')
  const defaultStyle = 'top: 0px; position: sticky; z-index: 5;'
  console.log(defaultStyle)
  if (window.pageYOffset > 100) {
    nav.setAttribute('style', defaultStyle + '; box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 30px 0px !important')
  } else {
    nav.setAttribute('style', defaultStyle)
  }
})

import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'
import { mdiInstagram, mdiFacebook, mdiTwitter, mdiYoutube } from '@mdi/js'
export default {
  components: {
    VerticalNavMenu,
  },
  data() {
    return {
      icons: {
        mdiInstagram,
        mdiFacebook,
        mdiTwitter,
        mdiYoutube,
      },
    }
  },
}
</script>

<style>
.navbar-banner {
  background: white !important;
  color: #ccd3e2 !important;
  font-size: 14px;
  border-bottom: none;
}
</style>
