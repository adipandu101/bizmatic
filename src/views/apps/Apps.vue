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
      <v-col
        cols="4"
        v-for="(app, index) in apps"
        :key="index"
        v-wow="{ 'animation-name': 'fadeInUp', 'animation-duration': '1s' }"
      >
        <v-card class="pa-8 pb-0">
          <v-row>
            <v-col cols="3">
              <v-img size="50px" :src="app.icon" style="border-radius: 3px"> </v-img>
            </v-col>
            <v-col cols="7" class="text-right">
              <v-btn
                small
                :class="'py-0 ' + (app.status == 'Maintenance' ? 'danger-surface' : 'green-surface')"
                style="text-transform: none; font-weight: 600; box-shadow: none !important"
              >
                {{ app.status }}
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="py-0">
              <div class="content-text">
                {{ app.title }}
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="content-muted-text">
                {{ app.short_desc }}
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-avatar
                v-for="(av, ix) in app.avatar"
                :key="ix"
                class="ms-n2"
                size="33px"
                style="border: 2px solid white !important"
              >
                <v-img size="30px" :src="av.ava" alt="a"></v-img>
              </v-avatar>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiPlus } from '@mdi/js'

export default {
  components: {},
  data() {
    return {
      apps: [
        {
          icon: 'https://picsum.photos/50/50',
          status: 'Ready',
          title: 'Creative Apps',
          short_desc: 'Malesuada a sed nunc tellus tempus blandit viverra commodo. ',
          avatar: [
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
          ],
        },
        {
          icon: 'https://picsum.photos/50/50',
          status: 'Maintenance',
          title: 'Creative Apps',
          short_desc: 'Malesuada a sed nunc tellus tempus blandit viverra commodo. ',
          avatar: [
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
          ],
        },
        {
          icon: 'https://picsum.photos/50/50',
          status: 'Ready',
          title: 'Creative Apps',
          short_desc: 'Malesuada a sed nunc tellus tempus blandit viverra commodo. ',
          avatar: [
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
          ],
        },
        {
          icon: 'https://picsum.photos/50/50',
          status: 'Ready',
          title: 'Creative Apps',
          short_desc: 'Malesuada a sed nunc tellus tempus blandit viverra commodo. ',
          avatar: [
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
          ],
        },
        {
          icon: 'https://picsum.photos/50/50',
          status: 'Ready',
          title: 'Creative Apps',
          short_desc: 'Malesuada a sed nunc tellus tempus blandit viverra commodo. ',
          avatar: [
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
          ],
        },
        {
          icon: 'https://picsum.photos/50/50',
          status: 'Ready',
          title: 'Creative Apps',
          short_desc: 'Malesuada a sed nunc tellus tempus blandit viverra commodo. ',
          avatar: [
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
          ],
        },
        {
          icon: 'https://picsum.photos/50/50',
          status: 'Ready',
          title: 'Creative Apps',
          short_desc: 'Malesuada a sed nunc tellus tempus blandit viverra commodo. ',
          avatar: [
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
          ],
        },
        {
          icon: 'https://picsum.photos/50/50',
          status: 'Ready',
          title: 'Creative Apps',
          short_desc: 'Malesuada a sed nunc tellus tempus blandit viverra commodo. ',
          avatar: [
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
          ],
        },
        {
          icon: 'https://picsum.photos/50/50',
          status: 'Ready',
          title: 'Creative Apps',
          short_desc: 'Malesuada a sed nunc tellus tempus blandit viverra commodo. ',
          avatar: [
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
            {
              ava: 'https://i.pravatar.cc/30',
            },
          ],
        },
      ],
      icons: {
        mdiPlus,
      },
    }
  },
}
</script>
