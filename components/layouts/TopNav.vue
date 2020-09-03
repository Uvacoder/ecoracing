<template>
  <div class="topnav bg-secondary">
    <div class="container">
      <div
        class="topnav__wrapper flex justify-between py-4 lg:flex-row flex-col items-center"
      >
        <div class="logo md:w-64 mb-4 lg:mb-0">
          <img
            data-animation="pulse"
            src="https://ecozone.b-cdn.net/website4.png"
            alt="logo"
          />
        </div>
        <div class="topnav__contacts flex flex-wrap">
          <Contacts
            v-for="(contact, index2) in contacts"
            :key="index2"
            v-lazyload
            data-animation="backInDown"
            class="mb-8 animate__animated invisible"
            :title="contact.title"
            :value="contact.value"
          >
            <!-- eslint-disable-next-line vue/no-v-html -->
            <!-- <div v-html="contact.icon"></div> -->
            <component
              :is="contact.icon"
              class="fill-primary z-10 relative block"
            ></component>
          </Contacts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconMail from '@/assets/icons/mail.svg?inline'
import IconPhone from '@/assets/icons/phone.svg?inline'
import Contacts from '@/components/partials/Contacts.vue'
export default {
  components: {
    IconMail,
    IconPhone,
    Contacts,
  },
  data() {
    return {
      contacts: [
        { title: 'form.phone', value: 'contact.phone', icon: IconPhone },
        {
          title: 'form.email',
          value: 'contact.email',
          icon: IconMail,
        },
      ],
    }
  },
}
</script>
