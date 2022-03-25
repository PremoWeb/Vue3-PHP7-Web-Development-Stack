<script>
import { inject } from 'vue';

export default {
  setup() {
    const RETSQL = inject('RETSQL'); // Pull the RETSQL object provided in App.vue
    const COUNTS = inject('COUNTS');
    // v-if='RETSQL.counts.commercial > 0'
    return {
      RETSQL,
      COUNTS
    }
  }
}

</script>

<template>
  <ul class="dropdown menu" data-dropdown-menu="" data-hover-delay="100">
    <li class="menu-text">
      <router-link to="/">Home</router-link>
    </li>
    <li class="has-submenu">
      <router-link to="/search">Search</router-link>
      <ul class="dropdown menu" data-dropdown-menu="" data-hover-delay="100">
        <li>
          <router-link to="/search/address.html">By Address Or MLSID</router-link>
        </li>
        <li>
          <router-link to="/search/residential.html">Residential Search</router-link>
        </li>
        <li>
          <router-link to="/search/land.html">Land Search</router-link>
        </li>
        <li>
          <router-link to="/search/commercial.html">Commercial Search</router-link>
        </li>
        <li>
          <router-link to="/search/multi-family.html">Multi-family Search</router-link>
        </li>
      </ul>
    </li>
    <li class="has-submenu">
      <router-link to="/listings/">{{ RETSQL.ourOrMy }} Listings</router-link>
      <ul class="dropdown menu" data-dropdown-menu="" data-hover-delay="300">
        <li v-if='COUNTS.land > 0'>
          <router-link to="/listings/land.html">Browse Land</router-link>
        </li>
        <li>
          <router-link to="/listings/residential.html">Browse Residential</router-link>
        </li>
        <li>
          <router-link to="/listings/commercial.html">Browse Commercial</router-link>
        </li>
        <li>
          <router-link to="/listings/multi-family.html">Browse Multi-family</router-link>
        </li>
        <li>
          <router-link to="/listings/manufactured-on-land.html">Manufactured on Land</router-link>
        </li>
      </ul>
    </li>
    <li v-if='RETSQL.rentals > 0'>
      <router-link to="/rentals/">Rentals &amp; Property Management</router-link>
    </li>
    <li v-if='RETSQL.usOrMe == "Us"'>
      <router-link to="/agents/">Our Team</router-link>
    </li>
    <li v-else>
      <router-link to="/about_me.html">About Me</router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  li.menu-text a {
    padding: 0;
    margin: 0;
  }
  .top-bar {
    position:relative;
    z-index: 99999;
  }
  .top-bar, .top-bar ul {
	text-transform:capitalize;
	font-size:14px;
}
.top-bar a{
	color:#fff;
}
.dropdown.menu .is-active>a{
	color:#fff;
}
.top-bar {
	border-bottom: 0px;
	z-index:9999;
	background-color:transparent;
    color:#fff;
    box-shadow: 0 5px 5px -2px #b2b2b269;
}
.top-bar input {
	max-width: unset;
	margin: 0px;
	margin-right: 6rem;
	transition: margin-right 0.2s;
}
.top-bar input:focus {
    margin-right: 10rem;
	transition: margin-right 0.2s;
}

.top-bar ul.dropdown {background-color:transparent;color:#fff;}
.top-bar-section ul { background-color:rgba(11,38,27,.10);color:#000; }
.top-bar-section li a:not(.button) { color:#000; }
.top-bar-section li a:not(.button):hover {  color:#000; }
.top-bar .name h1 a{color:#000;}
ul.dropdown .menu{
background-color:rgba(11,38,27,.70);
margin-top: 7px;
color:#000;
border-top:1px solid transparent;
}
.title-bar {
	border: 1px solid #b2b2b2;
	border-bottom: 0px;
    background-color:rgba(11,38,27,.10);color:#fff; 
}
.title-bar-title {
color: #fff;
}

.has-submenu li a {
    margin:2px;
    background-color:rgba(11,38,27,.30);
}
.has-submenu li a:hover{
    margin:2px;
    background-color:rgba(11,38,27,.50);
}
</style>
