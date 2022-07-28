<template>
  <div>
    <v-row>
      <v-col>
        <div class="section-subtitle">Your Apps</div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="text-end">
        <v-btn color="primary" class="text-white" style="text-transform: none; font-weight: 600">
          <v-icon color="white" class="me-2">
            {{ icons.mdiPlus }}
          </v-icon>
          Create New Apps
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-8 pb-0">
          <v-row>
            <v-col cols="3"> <v-img :src="profile.details.photo"> </v-img></v-col>
            <v-col cols="9">
              <div class="section-subtitle">{{ profile.details.full_name }}</div>
              <div class="content-muted-text pt-2">
                <v-icon>
                  {{ icons.mdiMapMarker }}
                </v-icon>
                {{ profile.details.city }}, {{ profile.details.province }}
                <v-icon class="ms-2">
                  {{ icons.mdiEmail }}
                </v-icon>
                {{ profile.details.email }}

                <div class="me-16 pe-16">
                  <v-row class="mt-6 pb-1">
                    <v-col>
                      <div>Profile Completion</div>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="text-end font-weight-bold"> 60% </v-col>
                  </v-row>

                  <v-progress-linear :value="profile.completion" :color="'primary'"></v-progress-linear>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="pb-0">
              <v-tabs v-model="tab" style="z-index: 0; box-shadow: none !important; color: #9aa2b1" class="mb-0">
                <v-tab style="text-transform: none"
                  ><span style="font-weight: 600; font-size: 14px; letter-spacing: 0px"> Overview </span></v-tab
                >
                <v-tab style="text-transform: none"
                  ><span style="font-weight: 600; font-size: 14px; letter-spacing: 0px"> Settings </span></v-tab
                >
                <v-tab style="text-transform: none"
                  ><span style="font-weight: 600; font-size: 14px; letter-spacing: 0px"> Security </span></v-tab
                >
              </v-tabs>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="pa-8 pb-0">
          <v-card-title>
            <v-row>
              <v-col>
                <div class="section-subsubtitle">Profile Details</div>
              </v-col>
              <v-spacer></v-spacer>
              <v-col class="text-end">
                <v-btn color="primary" class="text-white" style="text-transform: none; font-weight: 600">
                  <v-icon color="white" class="me-2">
                    {{ icons.mdiPlus }}
                  </v-icon>
                  Edit Profile
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="3" class="content-muted-text"> Full Name </v-col>
              <v-col cols="9" class="content-text">
                {{ profile.details.full_name }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="content-muted-text"> Mobile Phone </v-col>
              <v-col cols="9" class="content-text">
                {{ profile.details.mobile_phone }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="content-muted-text"> Whatsapp </v-col>
              <v-col cols="9" class="content-text">
                {{ profile.details.whatstapp }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="content-muted-text"> Country </v-col>
              <v-col cols="9" class="content-text">
                {{ profile.details.country }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="content-muted-text">City </v-col>
              <v-col cols="9" class="content-text">
                {{ profile.details.city }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="content-muted-text"> Address </v-col>
              <v-col cols="9" class="content-text">
                {{ profile.details.address }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiPlus, mdiMapMarker, mdiEmail } from '@mdi/js'

export default {
  components: {},
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
