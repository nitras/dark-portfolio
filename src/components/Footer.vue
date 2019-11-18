<template>
  <footer class="footer">
    <div class="to-top" @click="scrollToTop">-></div>
    <section class="sticky-footer">
      <div class="grouped-footer">
        <nav class="footer-navigation">
          <ul>
            <li>
              <a href="/">Werk</a>
            </li>
            <li>
              <a href="/diensten">Diensten</a>
            </li>
            <li>
              <a href="/over">Over Mij</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <section class="social">
          <a
            class="channel"
            v-for="(social, index) in data.social"
            :key="index"
            :href="`https://${social.channel}.com/${social.handle}`"
          >{{ social.link_text }}</a>
        </section>
        <section class="year">{{data.footer_copyright_text}} &copy; {{ new Date().getFullYear() }}</section>
      </div>
    </section>
  </footer>
</template>

<script>
import data from "@/data/theme.json";

export default {
  data() {
    return {
      data
    };
  },
  methods: {
    scrollToTop() {
      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth"
      // });
      TweenMax.to(window, 1, {
        scrollTo: { y: 0, autoKill: false },
        ease: Power4.easeOut
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/nitras.scss";
.footer {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  flex-direction: row;
  p {
    font-size: 1rem;
  }
  // margin-bottom: 50px;
}

.footer-navigation {
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.5;
}

.footer-navigation ul {
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 30px;

  li {
    padding-bottom: 0.5rem;

    a  {
      transition: color 0.5s;
    }
    a:hover {
      // color: green;
    }
    // a:before {
    //   content: " ";
    // }
    // a:hover:before {
    //   content: "— ";
    // }
  }
}
.sticky-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: $footerHeight;
  width: 100%;
  // padding: 2rem 2rem;
  background: $dark;

  flex-direction: row;

  @include breakpoint(xs) {
    margin: 0 $siteMarginMobile;
  }
  margin: 0 $siteMargin;
}

.grouped-footer {
  display: block;
  justify-content: space-between;
  flex-direction: row;
}

.social {
  .channel {
    margin-right: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    &:last-of-type {
      margin: 0;
    }
  }
}

.year {
  flex-wrap: nowrap;
  right: 0;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: inherit;
  margin-top: 30px;
}

.to-top {
  // display: none;
  position: fixed;
  bottom: 0px;
  // left: 2rem;
  right: 0; //$siteMargin;
  transform: rotate(-90deg);
  user-select: none;
  cursor: pointer;
  border: $borderThickness solid transparent;
  text-align: center;
  font-weight: 700;
  line-height: 0 !important;
  padding: 1rem 0.5rem;
  z-index: 9999999;
  mix-blend-mode: difference;
  background: white;
  color: $dark;
  letter-spacing: 0;
  &:hover {
    border: $borderThickness solid white;
    background: none;
    color: white;
  }
}

// .footer {
//   position: fixed;
//   bottom: 2rem;
//   left: 0;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   padding: 0 2rem;
//   z-index: 100;
//   mix-blend-mode: difference;
// }
</style>