<template>
  <header class="header">
    <g-link to="/" tag="h1" class="name" :class="{ first: data.first_letter_only }">
      <g-link :to="{ name: 'home' }" class="home-link">
        <img
          svg-inline
          src="../../static/uploads/logo-uw-grafisch-ontwerper.svg"
          class="logo"
          :alt="data.site_name"
          :title="data.site_name"
        />
      </g-link>
      <span class="word first-line">
        <span class="first-letter">U</span>
        <span class="letter">w</span>
      </span>
      <span class="word">
        <span class="first-letter">G</span>
        <span class="letter">rafisch</span>
      </span>
      <span class="word">
        <span class="first-letter">O</span>
        <span class="letter">ntwerper</span>
      </span>
    </g-link>
    <div class="contact">
      <g-link class="link" :href="`mailto:${data.email}`">Contact</g-link>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/Logo";
import data from "@/data/theme.json";

export default {
  components: {
    Logo
  },
  name: "Header",
  data() {
    return {
      data
    };
  },
  computed: {
    siteName() {
      return data.header_title.split(" ");
    },
    multiLine() {
      return this.siteName.length >= 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 4rem 2rem 5rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 100;
  opacity: 1;
  mix-blend-mode: difference;
  transition: opacity 0.35s ease;
  &.hidden {
    opacity: 0;
  }
}

a.home-link {
  border-bottom: none !important;
}

.name {
  font-size: 1rem;
  font-weight: 500;
  user-select: none;
  margin: 0;
  width: 300px;
  cursor: pointer;
  .logo {
    height: 3rem;

    float: left;
    margin-right: 1rem;
    transition: all 0.15s ease-out;

 .inner-seven {
   fill:white;
    transition: all 0.15s ease-out;
 }
     .outer-seven {
      fill: white;
       transition: all 0.35s ease-out;
       transition-delay: .2s;
    }
  }

  .word {
    margin-right: 0.5rem;
    &.first-line {
      display: block;
      margin-bottom: 0.5rem;
    }
    &:last-of-type {
      margin: 0;
    }
  }
  &.first {
    .letter {
      transition: opacity 0.35s ease;
      padding: 0;
      margin: 0;
      opacity: 0;
    }
    .first-letter {
      opacity: 1;
    }
    &:hover {
      .letter {
        opacity: 1;
      }
      .inner-seven {
      fill: rgb(244, 131, 114);
        transition: all 0.35s ease-out;
        transition-delay: .1s;
      }
      .outer-seven {
        fill: rgb(244, 131, 114);
        top: 10px;
        transition: all 0.35s ease-out;
        
     
      }
    }
  }
}
</style>