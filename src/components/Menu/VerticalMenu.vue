<template>
  <div id="Vmenu">
    <ul class="menulist">
      <HeadMenu Headertitle="Groups Owned" />
      <li class="HeaderMenu">
        <ul class="header">History</ul>
      </li>

      <!--      <HeadMenu Headertitle = "group 01" :Numtitle="['Chapter1','Chapter2']" />
        <HeadMenu Headertitle = "CourseWeb" :Numtitle="['Chapter1','Chapter2','Chapter3','Chapter4']" />
        <HeadMenu Headertitle = "CoureseBackEnd" :Numtitle="['Chapter1','Chapter2','Chapter3','Chapter4','Chapter5']" />
        <HeadMenu Headertitle = "CourseBackEnd" :Numtitle="['Chapter1','Chapter2','Chapter3','Chapter4']" />
        
        <li class="HeaderMenu"><ul class="header">Group Owned</ul></li>
          <HeadMenu Headertitle = "group 01" :Numtitle="['Chapter1','Chapter2']" />
        <HeadMenu Headertitle = "CourseWeb" :Numtitle="['Chapter1','Chapter2','Chapter3','Chapter4']" />
        <HeadMenu Headertitle = "CoureseBackEnd" :Numtitle="['Chapter1','Chapter2','Chapter3','Chapter4','Chapter5']" />
        <HeadMenu Headertitle = "CourseBackEnd" :Numtitle="['bChapter1','Chapter2','Chapter3','Chapter4']" />
      <li class="HeaderMenu">Help</li>-->

      <div></div>
    </ul>
  </div>
</template>

<script>
import HeadMenu from "@/components/Menu/HeadMenu.vue";

export default {
  beforeCreate() {},
  mounted() {},
  data() {
    return {
      showC1: false,
      displayC1: "none",
    };
  },
  computed: {
    changeDisplay() {
      return this.displayC1;
    }
  },
  methods: {
    isShow() {
      this.showC1 = !this.showC1;
      if (this.showC1 == false) {
        console.log(this.showC1);
        this.displayC1 = "none";
      } else {
        console.log(this.showC1);
        this.displayC1 = "block";
      }
    }
  },
  components: {
    HeadMenu
  }
};
</script>
<style scoped>
.home {
  padding: 0;
  margin: 0px;
  height: 100%;
}
.menulist {
  padding: 10px;
  margin-top: 87px;
  list-style-type: none;
  background-color: white;
  border-right: 1px solid black;
  width: 350px;
  height: 1000px;
  float: left;
  font-size: 15px;
  font-family: "Courier New", Courier, monospace;
  position: fixed;
}
.menulist li {
  text-decoration: none;
  overflow: auto;
}

.Chapter {
  transition: 0.5s;
}

.off {
  padding: 0px;
  padding-top: 2px;
  margin-left: 2px;
  height: 10px;
  width: 10px;
  transition: all 0.1s ease-in-out;
}
.on {
  padding: 0px;
  padding-top: 2px;
  margin-left: 2px;
  height: 10px;
  width: 10px;
  transform: rotate(90deg);
  transition: all 0.1s ease-in-out;
}
.header {
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
}
</style>