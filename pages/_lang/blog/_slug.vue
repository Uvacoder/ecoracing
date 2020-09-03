<template>
  <div class="post py-110">
    <div class="container">
      <div class="post__wrapper">
        <div class="post-img flex justify-center">
          <lazyImage :source="post.image" :alt="post.name" class="w-2/3" />
        </div>
        <div
          class="post-content bg-secondarybg border-2 border-bordercolor p-4"
        >
          <div class="post-meta mb-4">{{ post.date }}</div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="post.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      post: {
        id: 1,
        name: 'Sed gravida nisi et risus scelerisque, eu tristique. ',
        content:
          '<div class="entry-content"><p>Donec molestie massa eu arcu maximus, id volutpat purus sagittis. Duis nulla odio, viverra vitae nulla ut, volutpat condiment lectus. Donec scelerisque justo sit amet eleifend eleifend. Nulla mollis sit amet enim sit amet euismod.<span id="more-9"></span></p><p>Bacon shoulder ham, leberkas bresaola shankle meatloaf capicola tongue rump ham hock alcatra pig salami andouille. Cupim prosciutto short loin pork belly meatloaf kielbasa. Turkey jowl picanha pork sausage salami landjaeger pork belly rump capicola hamburger prosciutto. Leberkas pork belly prosciutto doner alcatra filet mignon shankle picanha ham fatback bresaola short loin.</p><blockquote><p>Short loin cupim ham hock kevin beef ribs strip steak. Swine pork loin pastrami tail meatball filet mignon. Kielbasa salami corned beef, leberkas brisket chicken beef ribeye ground round kevin pork chop. Leberkas jerky shoulder shankle spare ribs burgdoggen p<cite></cite></p></blockquote><p>Kevin pork loin spare ribs tongue, doner meatball pork belly corned beef tenderloin tail drumstick turducken ham short ribs. Corned beef beef pork loin short loin picanha ham hock t-bone chicken frankfurter leberkas, pork chop tri-tip. Short loin ribeye salami strip steak.</p><ul class="list2 type2"><li>Tri-tip ground round drumstick t-bone</li><li>Capicola swine ham turducken beef</li><li>Turducken brisket sausage doner pros</li><li>Pork belly kielbasa shoulder prosciutto.</li></ul></div><p>&nbsp;</p>',
        date: '4 years ago',
        image:
          'http://webdesign-finder.com/carrepair/wp-content/uploads/2017/04/Depositphotos_7989309_original-775x517.jpg',
      },
    }
  },
}
</script>
