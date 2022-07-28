<template>
  <div class="auth-wrapper auth-v1 pb-16">
    <div class="auth-inner pb-8">
      <v-img
        class="mb-10"
        :src="require('@/assets/images/logos/bizmatic_logo.svg')"
        max-height="52px"
        alt="logo"
        contain
      ></v-img>
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center pt-8 pb-2">
          <router-link to="/" class="d-flex align-center">
            <div class="section-subtitle">Create an Account</div>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text class="text-center">
          <p class="mb-2" style="color: #687083; font-size: 14px; line-height: 20px">
            Already have an account?
            <span style="font-weight: 600; color: #2f86ff"
              ><router-link :to="{ name: 'pages-login' }"> Sign in here </router-link></span
            >
          </p>
        </v-card-text>
        <!-- social links -->
        <v-card-actions v-for="link in socialLink.filter(link => link.name == 'Google')" :key="link.icon">
          <v-btn block color="#F9FAFB" class="mt-0" style="text-transform: none">
            <center>
              <v-row style="color: #687083; font-weight: 600; line-height: 20px">
                <v-col cols="2" class="pe-0">
                  <v-img
                    class="d-flex align-end"
                    style="display: inline-block"
                    max-height="20"
                    :src="require('@/assets/images/icons/' + link.icon)"
                    alt="logo"
                    contain
                  ></v-img>
                </v-col>
                <v-col cols="10" class="ps-0">
                  <span class="ps-2">{{ 'Sign in with ' + link.name }}</span>
                </v-col>
              </v-row>
            </center>
          </v-btn>
        </v-card-actions>
        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">OR</span>
          <v-divider></v-divider>
        </v-card-text>
        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              dense
              v-model="form.email"
              outlined
              label="Email"
              placeholder=""
              hide-details
              class="mt-3 mb-6"
            ></v-text-field>
            <v-text-field
              dense
              v-model="form.username"
              outlined
              label="Username"
              placeholder=""
              hide-details
              class="mt-0 mb-6"
            ></v-text-field>
            <v-text-field
              dense
              v-model="form.password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              placeholder=""
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
              class="mt-0 mb-6"
            ></v-text-field>
            <v-text-field
              dense
              v-model="form.confirmpassword"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Confirm Password"
              placeholder=""
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
              class="mt-0 mb-6"
            ></v-text-field>
            <v-text-field
              dense
              v-model="form.mobilephone"
              outlined
              label="Mobile Phone"
              placeholder=""
              hide-details
              class="mt-0 mb-6"
            ></v-text-field>
            <v-text-field
              dense
              v-model="form.whatsapp"
              outlined
              label="Whatsapp"
              placeholder=""
              hide-details
              class="mt-0 mb-6"
            ></v-text-field>
            <v-text-field
              dense
              v-model="form.country"
              outlined
              label="Country"
              placeholder=""
              hide-details
              class="mt-0 mb-6"
            ></v-text-field>
            <v-text-field
              dense
              v-model="form.city"
              outlined
              label="City"
              placeholder=""
              hide-details
              class="mt-0 mb-6"
            ></v-text-field>
            <v-text-field
              dense
              v-model="form.address"
              outlined
              label="Address"
              placeholder=""
              hide-details
              class="mt-0 mb-6"
            ></v-text-field>

            <v-btn block color="primary" class="mt-6"> Submit </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
// import { ref } from '@vue/composition-api'

export default {
  data() {
    return {
      clientId: '500337753631-d60msku0fke38oii3ths0iohgc0a62ar.apps.googleusercontent.com',
      isPasswordVisible: false,
      form: {
        email: '',
        username: '',
        password: '',
        confirmpassword: '',
        mobilephone: '',
        whatsapp: '',
        country: '',
        city: '',
        address: '',
      },
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
      socialLink: [
        {
          icon: 'google.svg',
          name: 'Google',
          color: '#db4437',
          colorInDark: '#db4437',
        },
        {
          icon: 'facebook.svg',
          name: 'Facebook',
          color: '#4267b2',
          colorInDark: '#4267b2',
        },
        {
          icon: 'apple.svg',
          name: 'Apple',
          color: '#1da1f2',
          colorInDark: '#1da1f2',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>