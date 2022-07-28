<template>
  <span>
    <!--section1-->
    <v-row class="px-16" style="padding-top: 80px; padding-bottom: 80px">
      <v-col cols="12" md="6" style="padding-top: 154px"
        ><div
          style="font-size: 60px; line-height: 72px; font-weight: 900; color: #1a3650; -webkit-text-stroke: 2px #1a3650"
        >
          One Stop Solution<br />For Your Bussiness.
        </div>
        <div class="font-secondary" style="max-width: 411px; margin-top: 33px">
          Massa praesent gravida volutpat ipsum aliquam eu. Fermentum parturient vulputate dictumst tellus.
        </div>
        <div style="margin-top: 55px">
          <v-btn color="primary" class="text-white" style="text-transform: none; font-weight: 600"> Learn More </v-btn>
          <v-btn text color="primary" style="text-transform: none; font-weight: 600; font-size: 18px">
            How It Works
            <v-icon color="primary" class="ms-2">
              {{ icons.mdiArrowRight }}
            </v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="pe-10" style="padding-top: 67px">
        <v-img class="pe-16" :src="require('@/assets/images/pages/home1.svg')" alt="logo" contain></v-img>
      </v-col>
    </v-row>

    <!--section2-->
    <v-row class="px-16" style="padding-top: 80px; padding-bottom: 80px">
      <v-col cols="12" class="text-center"><div class="section-title pb-8">Why Choose Us</div> </v-col>
      <v-col cols="12" md="6">
        <div class="text-center text-justify pa-6" style="background: #f9fafb">
          <v-img
            :src="require('@/assets/images/icons/badge-check.svg')"
            max-height="40px"
            max-width="40px"
            alt="logo"
            contain
          ></v-img>
          <div class="font-secondary pt-5">
            Bibendum at dui felis in leo odio. Elementum semper tristique sed eget. Massa tempus cursus euismod gravida
            nullam morbi. A, in faucibus blandit purus pellentesque faucibus cras donec.
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-center text-justify pa-6" style="background: #f9fafb">
          <v-img
            :src="require('@/assets/images/icons/lightning-bolt.svg')"
            max-height="40px"
            max-width="40px"
            alt="logo"
            contain
          ></v-img>
          <div class="font-secondary pt-5">
            Bibendum at dui felis in leo odio. Elementum semper tristique sed eget. Massa tempus cursus euismod gravida
            nullam morbi. A, in faucibus blandit purus pellentesque faucibus cras donec.
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-center text-justify pa-6" style="background: #f9fafb">
          <v-img
            :src="require('@/assets/images/icons/cash.svg')"
            max-height="40px"
            max-width="40px"
            alt="logo"
            contain
          ></v-img>
          <div class="font-secondary pt-5">
            Bibendum at dui felis in leo odio. Elementum semper tristique sed eget. Massa tempus cursus euismod gravida
            nullam morbi. A, in faucibus blandit purus pellentesque faucibus cras donec.
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-center text-justify pa-6" style="background: #f9fafb">
          <v-img
            style="border-radius: 20px"
            :src="require('@/assets/images/icons/cloud.svg')"
            max-height="40px"
            max-width="40px"
            alt="logo"
            contain
          ></v-img>
          <div class="font-secondary pt-5">
            Bibendum at dui felis in leo odio. Elementum semper tristique sed eget. Massa tempus cursus euismod gravida
            nullam morbi. A, in faucibus blandit purus pellentesque faucibus cras donec.
          </div>
        </div>
      </v-col>
    </v-row>

    <!--section3-->
    <v-row class="px-16" style="padding-top: 80px; padding-bottom: 80px">
      <v-col cols="12" md="6">
        <v-img :src="require('@/assets/images/pages/home2.svg')" alt="logo" contain></v-img>
      </v-col>

      <v-col cols="12" md="6"
        ><div class="section-title pb-8 ps-8" style="padding-top: 76px">100% Integrated Apps</div>
        <div class="font-secondary pt-4 ps-8">
          Ultrices eget ultricies adipiscing enim sit. Vitae, ultricies tellus fermentum sem. Iaculis senectus vitae
          faucibus scelerisque vestibulum varius enim tortor, elit. Sed vestibulum massa nulla.
        </div>
        <v-btn text color="primary" class="ps-8 pt-12" style="text-transform: none; font-weight: 600; font-size: 18px">
          Explore our products
          <v-icon color="primary" class="ms-2">
            {{ icons.mdiArrowRight }}
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <!--section4-->
    <v-row class="px-16" style="padding-top: 80px; padding-bottom: 80px">
      <v-col cols="12" class="text-center"><div class="section-title pb-8">Our Products</div> </v-col>
      <v-col cols="12">
        <v-tabs v-model="tab" centered style="z-index: 0; box-shadow: none" class="mb-10">
          <v-tab v-for="(item, idx) in items" :key="idx" style="text-transform: none">
            {{ item.tab }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="(item, idx) in items" :key="idx">
            <v-row>
              <v-col cols="12" md="6" v-for="(itm, ix) in items.filter(d => d.desc != '')" :key="ix">
                <div class="text-center text-justify pa-8" style="background: #f9fafb; border-radius: 6px">
                  <v-img
                    class="mb-8"
                    max-height="41"
                    style="border-radius: 20px"
                    :src="require('@/assets/images/icons/' + itm.icon)"
                    alt="logo"
                    contain
                  ></v-img>
                  <center>
                    <div style="background: #f0f2f5; border-radius: 6px; width: 353px; height: 353px"></div>
                    <div class="section-subtitle py-8">{{ itm.title }}</div>
                    <div class="font-secondary" style="font-size: 16px; line-height: 24px">
                      {{ itm.desc }}
                    </div>
                  </center>
                </div>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>

    <!--section5-->
    <v-row class="px-16" style="padding-top: 80px; padding-bottom: 80px">
      <v-col cols="12" md="6"
        ><div class="section-title pb-8">Contact Us</div>
        <div class="font-secondary pt-4">
          Ultrices eget ultricies adipiscing enim sit. Vitae, <br />ultricies tellus fermentum sem.
        </div>
        <div class="pt-4 pe-10">
          <v-form ref="form" v-model="valid">
            <v-text-field v-model="form.name" :rules="rules.nameRules" label="Name" required></v-text-field>

            <v-text-field v-model="form.email" :rules="rules.emailRules" label="Email" required></v-text-field>

            <v-textarea
              v-model="form.messages"
              :rules="rules.messagesRules"
              label="Messages"
              required
              clearable
              rows="4"
            ></v-textarea>

            <v-btn @click="validate" color="primary" class="mt-6" style="text-transform: none; font-weight: 600">
              Send
            </v-btn>
          </v-form>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-img :src="require('@/assets/images/pages/home3.svg')" alt="logo" contain></v-img>
      </v-col>
    </v-row>
  </span>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiArrowRight } from '@mdi/js'

export default {
  data() {
    return {
      tab: null,
      items: [
        { tab: 'Semua', title: '', icon: '', desc: '' },
        {
          tab: 'CRM Ticket',
          title: 'Ticketing System for Whatsapps',
          icon: 'ticket.svg',
          desc: 'Bibendum at dui felis in leo odio. Elementum semper tristique sed eget. Massa tempus cursus euismod gravida nullam morbi.',
        },
        {
          tab: 'CRM Blast',
          title: 'Blast System for Whatsapps',
          icon: 'blast.svg',
          desc: 'Bibendum at dui felis in leo odio. Elementum semper tristique sed eget. Massa tempus cursus euismod gravida nullam morbi.',
        },
        {
          tab: 'Accounting',
          title: 'Accounting System for Any Products',
          icon: 'accounting.svg',
          desc: 'Bibendum at dui felis in leo odio. Elementum semper tristique sed eget. Massa tempus cursus euismod gravida nullam morbi.',
        },
        {
          tab: 'Marketing',
          title: 'Marketing System for Any Products',
          icon: 'marketing.svg',
          desc: 'Bibendum at dui felis in leo odio. Elementum semper tristique sed eget. Massa tempus cursus euismod gravida nullam morbi.',
        },
      ],
      valid: true,
      form: {
        name: '',
        email: '',
        messages: '',
      },
      rules: {
        nameRules: [v => !!v || 'Name is required'],
        emailRules: [v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
        messagesRules: [v => !!v || 'text is required'],
      },
      icons: {
        mdiArrowRight,
      },
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>

<style scoped>
</style>
