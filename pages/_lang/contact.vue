<template>
  <div class="contact pt-110">
    <div class="container">
      <div class="contact__wrapper grid gap-16 grid-cols-1 lg:grid-cols-2">
        <div class="contact__contacts">
          <h4 class="second-header text-white font-bold">
            {{ $t('contact.contact_information') }}
          </h4>
          <p class="mt-12">
            Ut placerat orci tortor, et tincidunt sapien semper vel. Duis a
            mollis augue. Donec in rhoncus ligula. Praesent a sapien nibh.
            Phasellus hendrerit varius felis quis fringilla. Nunc elit sem,
            commodo.
          </p>
          <div class="mb-12 mt-16">
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
        <div class="contact__form">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-12">
            <div class="input flex items-center required mr-4">
              <input
                id="name"
                type="text"
                :placeholder="$t('form.placeholders.name')"
              />
            </div>
            <div class="input flex items-center required">
              <input
                id="email"
                type="email"
                :placeholder="$t('form.placeholders.email')"
              />
            </div>
          </div>
          <div class="input mb-12 flex items-center required">
            <input
              id="subject"
              type="text"
              :placeholder="$t('form.placeholders.subject')"
            />
          </div>
          <div class="input mb-12 flex items-center required">
            <textarea
              id=""
              name="msg"
              cols="30"
              rows="2"
              :placeholder="$t('form.placeholders.message')"
              class="w-full input"
            ></textarea>
          </div>
          <div class="input mb-12 flex items-center required">
            <a href="" class="btn-default w-48 mt-4">{{ $t('btns.send') }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-450">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.250541611988!2d31.202620250769513!3d30.05835212478131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458413cc84c61f9%3A0x1ce408039f6a5e15!2sNadi%20Al%20Zmalek%2C%20Gazirat%20Mit%20Oqbah%2C%20Agouza%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1598787178432!5m2!1sen!2seg"
        width="100%"
        height="100%"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
import IconMail from '@/assets/icons/mail.svg?inline'
import IconPhone from '@/assets/icons/phone.svg?inline'
import IconAddress from '@/assets/icons/address.svg?inline'
import Contacts from '@/components/partials/Contacts.vue'
export default {
  layout: 'default',
  components: {
    Contacts,
  },
  data() {
    return {
      contacts: [
        { title: this.$t('form.phone'), value: '01022052546', icon: IconPhone },
        {
          title: this.$t('form.email'),
          value: 'info@ecoracing.com.eg',
          icon: IconMail,
        },
        {
          title: this.$t('form.address'),
          value: 'Sgaey mall , azhar street , cairo',
          icon: IconAddress,
        },
      ],
    }
  },
}
</script>
