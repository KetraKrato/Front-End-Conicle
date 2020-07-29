<template>
  <nav :style="{ background: background || '#333' }" v-if="show">
    <ul :style="{ background: background || '#333' }" ref="nav">
      <figure class="fa fa-bars" @click="toggleNav">
        <b-button class="btn" v-b-toggle.sidebar-1
          ><img class="imagebar" src="../img/open-menu.png" alt="" srcset=""
        /></b-button>
        <b-sidebar id="sidebar-1">
          <a href="/groupmanage">Group Management</a>
          <a href="/coursemanage">Course Management</a>
          <a href="/assignmanage">Assignment Management</a>
        </b-sidebar>
      </figure>

      <a href="/groupmanage">SOP</a>

      <div class="user ">
        <button
          class="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{ account.username }}
        </button>
        <div class="dropdown-menu " aria-labelledby="dropdownMenu2">
          <a class="dropdown-item" href="/">Sign out</a>
        </div>
      </div>
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        @mouseenter="
          $event.currentTarget.style.background = hoverBackground || '#999'
        "
        @mouseleave="
          $event.currentTarget.style.background = background || '#333'
        "
      >
        <router-link :to="link.path" :style="{ color: linkColor || '#DDD' }">
          {{ link.text }}
          <i :class="link.icon" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "navbar",

  props: [
    "navLinks",
    "background",
    "linkColor",
    "hoverBackground",
    "imagePath",
  ],
  data() {
    return {
      show: true,
      account: [
        {
          username: "",
          password: "",
        },
      ],
    };
  },
  mounted() {
    try {
      // return  axios.get("http://127.0.0.1:8000/sop/course/" , this.files, {headers: {Authorization : `token ${localStorage.getItem("token")}`,}});
      axios
        .get("http://127.0.0.1:8000/auth/users/me/", {
          headers: { Authorization: `token ${localStorage.getItem("token")}` },
        })
        .then((resp) => {
          console.log(resp.data.username);
          this.account = resp.data;
          console.log(JSON.stringify(this.account));
        });
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  height: 40px;
  width: 100%;
  ul {
    display: flex;
    height: 140%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    border: 1px solid #4f4f4f;
    figure {
      cursor: pointer;
      margin-right: 10px;
    }
    a {
      text-decoration: none;
      display: flex;
      // flex-direction: row-reverse;
      align-items: center;
    }
    i {
      margin-right: 10px;
      font-size: 22px;
    }
    li {
      list-style-type: none;
      padding: 10px 20px;
    }
  }
}
@media screen and (max-width: 759px) {
  nav {
    ul {
      position: absolute;
      width: 300px;
      flex-direction: column;
      left: -240px;
      transition: 300ms ease all;
      top: 60px;
      &.active {
        left: 0px;
      }
      figure {
        position: fixed;
        z-index: 1;
        top: 10px;
        left: 2px;
      }
      li {
        width: 100%;
        padding-left: center;
        padding-right: 0;
      }
      a {
        flex-direction: row;
        margin-left: 20px;
        justify-content: space-between;
        margin-right: 13px;
        color: black;
      }
    }
  }
}
.btn {
  background-color: #ffffff;
  border: none;
  color: #d9d9bf;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
}

.link {
  color: #565e6d;
}
#sidebar {
  top: 100px;
}

.tab {
  float: left;
  border: none;
  background-color: #f1f1f1;
  width: 100%;
  height: 100px;
}

.tab button {
  display: block;
  background-color: inherit;
  color: black;
  padding: 22px 16px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
}

.tab button:hover {
  background-color: #ddd;
}

.tab button.active {
  background-color: #ccc;
}

.tabcontent {
  float: left;
  padding: 0px 12px;
  border: 1px solid #ccc;
  width: 70%;
  border-left: none;
  height: 300px;
}
a {
  color: rgb(167, 166, 166);
  position: relative;
  font-size: normal;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.user {
  float: right;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-left: 80%;
}
a .dropdown-item {
  position: absolute;
  left: 0%;
}
#sidebar-1 a {
  padding: 10px 20px 10px 30px;
  text-decoration: none;
  color: #000;
  display: block;
}

#sidebar-1 a:hover {
  font-weight: bold;
  background-color: #f2f2f2;
}
.imagebar {
  width: 20px;
  height: 20px;
}
</style>
