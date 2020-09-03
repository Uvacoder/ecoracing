<template>
  <div class="orders py-110">
    <div class="container">
      <div class="orders__wrapper w-full xl:w-2/3">
        <h1 class="mb-6 font-bold text-white">
          {{ $t('orders.billing_details') }}
        </h1>
        <form action="">
          <div class="input mb-12 flex items-center required">
            <label for="name" class="mr-4 w-1/3 text-right">{{
              $t('form.name')
            }}</label>
            <input
              id="name"
              type="text"
              :placeholder="$t('form.placeholders.name')"
            />
          </div>
          <div class="input mb-12 flex items-center required">
            <label for="name" class="mr-4 w-1/3 text-right">{{
              $t('form.name')
            }}</label>
            <input
              id="name"
              type="text"
              :placeholder="$t('form.placeholders.name')"
            />
          </div>
          <div class="input mb-12 flex items-center required">
            <label for="email" class="mr-4 w-1/3 text-right">
              {{ $t('form.email') }}</label
            >
            <input
              id="email"
              type="email"
              :placeholder="$t('form.placeholders.email')"
            />
          </div>
          <div class="input mb-12 flex items-center required">
            <label for="phone" class="mr-4 w-1/3 text-right">{{
              $t('form.phone')
            }}</label>
            <input
              id="phone"
              type="text"
              :placeholder="$t('form.placeholders.phone')"
            />
          </div>
          <div class="input mb-12 flex items-center required">
            <label for="address1" class="mr-4 w-1/3 text-right">
              {{ $t('form.address1') }}</label
            >
            <input
              id="address1"
              type="text"
              :placeholder="$t('form.placeholders.address1')"
            />
          </div>
          <div class="input mb-12 flex items-center">
            <label for="address2" class="mr-4 w-1/3 text-right">{{
              $t('form.address2')
            }}</label>
            <input
              id="address2"
              type="text"
              :placeholder="$t('form.placeholders.address2')"
            />
          </div>
          <div class="input flex items-center justify-between">
            <div></div>
            <a href="" class="btn-default w-48 mt-4 text-right">{{
              $t('btns.submit')
            }}</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>
<style lang="scss" scoped>
.input {
  label {
    @media (max-width: 500px) {
      display: none;
    }
    &.required {
      &::after {
        content: '*';
        color: var(--color-primary);
        margin-left: 5px;
        font-size: 22px;
      }
    }
  }
}
</style>
