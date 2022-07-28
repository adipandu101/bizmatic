<template>
  <div>
    <v-row>
      <v-col>
        <div
          class="mx-auto"
          :style="
            'background-image: url(' +
            require('@/assets/images/pages/app-layer.png') +
            ');background-size: cover;border-radius:12px;'
          "
        >
          <div
            style="
              padding-left: 60px;
              padding-top: 100px;
              font-weight: 700;
              font-size: 48px;
              line-height: 60px;
              color: #ffffff;
            "
          >
            Creative App Builder
          </div>
          <div
            style="
              width: 438px;
              padding-left: 60px;
              padding-top: 24px;
              font-weight: 400;
              font-size: 12px;
              line-height: 18px;

              color: #9aa2b1;
            "
          >
            At semper viverra mi at gravida arcu praesent tortor, proin. Urna sagittis id nunc mi dolor, diam sed eu.
            Porttitor aenean viverra sed odio at sit suspendisse nisl scelerisque.
          </div>
          <v-btn
            class="text-white"
            style="
              margin-left: 60px;
              margin-top: 24px;
              margin-bottom: 88px;
              color: white;
              background: rgba(255, 255, 255, 0.1);
              text-transform: none;
              font-weight: 600;
            "
          >
            See Details
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-img style="border-radius: 6px" :src="require('@/assets/images/pages/app1.png')"></v-img>
      </v-col>
      <v-col cols="4">
        <v-img style="border-radius: 6px" :src="require('@/assets/images/pages/app2.png')"></v-img>
      </v-col>
      <v-col cols="4">
        <v-img style="border-radius: 6px" :src="require('@/assets/images/pages/app3.png')"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="section-subsubtitle">Productivity Apps</div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="text-end" style="color: #2f86ff"> See All </v-col>
    </v-row>
    <horizontal-scroll style="display: flex; width: 100%" class="mb-8">
      <v-card class="mx-5 my-12" max-width="209px" v-for="i in 10" :key="i">
        <v-img class="ma-4" height="133" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

        <div class="content-text ma-4">Cafe Badilico</div>

        <v-card-text>
          <div class="py-2">
            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
          </div>
          <v-row align="center" class="my-4 mx-2">
            <v-rating :value="5" color="#FFC266" dense half-increments readonly size="18"></v-rating>
          </v-row>
        </v-card-text>
      </v-card>
    </horizontal-scroll>
    <v-row>
      <v-col>
        <div class="section-subsubtitle">Popular Apps</div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="text-end" style="color: #2f86ff"> See All </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" v-for="i in 10" :key="i" class="pa-3 mt-5">
        <v-card>
          <v-row>
            <v-col cols="6" class="ps-8 py-4">
              <v-img style="border-radius: 3px" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            </v-col>
            <v-col cols="6" class="pa-0">
              <div class="content-text mt-6 ps-1 pb-2">Cafe Badilico</div>

              <v-card-text class="ps-1 pe-3">
                <div>Malesuada a sed nunc tellus tempus blandit viverra.</div>
                <v-row align="center" class="my-0 mx-0">
                  <v-rating :value="5" color="#FFC266" dense half-increments readonly size="18"></v-rating>
                </v-row>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiPlus, mdiMapMarker, mdiEmail } from '@mdi/js'
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'

export default {
  components: {
    HorizontalScroll,
  },
  data() {
    return {
      profile: {
        completion: '60',
        details: {
          full_name: 'Hanafi Satriyo Utomo Setiawan',
          photo: 'https://www.w3schools.com/w3images/avatar2.png',
          mobile_phone: '081 357 739 823',
          whatstapp: '081 357 739 823',
          country: 'Indonesia',
          city: 'Jombang',
          province: 'Jawa Timur',
          address: 'Jl. Adityawarman No. 92',
          email: 'satriyo.stwn@gmail.com',
        },
        settings: {},
        security: {},
      },
      icons: {
        mdiPlus,
        mdiMapMarker,
        mdiEmail,
      },
    }
  },
}
</script>
