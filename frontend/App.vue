<template>
	<div class="off-canvas-wrapper">
		<div class="off-canvas position-left" id="off-canvas" data-off-canvas>
			<p>Off canvas content goes here</p>
		</div>
		<div id="canvas-content" class="off-canvas-content in-canvas-for-small" data-off-canvas-content>
			<header class="grid-y">
				<div class="cell shrink">
					<div class="grid-container header-content">
						<AppHeader></AppHeader>
					</div>
				</div>
				<div class="cell shrink">
					<div class="grid-container full">
						<div class="top-bar-container" data-sticky-container>
							<div class="sticky" data-sticky data-options="anchor: main; marginTop: 0;">
								<div class="title-bar" data-responsive-toggle="foundation-topbar-items" data-hide-for="medium">
									<button class="menu-icon" type="button" data-toggle="off-canvas"></button>
									<div class="title-bar-title">Menu</div>
								</div>
								<div class="top-bar grid-container">
									<div class="top-bar-left">
										<topnav></topnav>
									</div>
									<div class="top-bar-right">
										<search></search>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<main id="main" class="cell auto">
				<div class="grid-container collapse full content-area">
					<router-view></router-view>
				</div>
			</main>
			<footer class="cell shrink grid-container">
				<AppFooter></AppFooter>
			</footer>
		</div>
	</div>
</template>

<script>
import { ref, provide } from 'vue';

import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

import topnav from './AppHeaderTopNav.vue';
import search from './AppHeaderTopNavSearch.vue';


// Including font-awesome here means it's avaialble to all components
import 'font-awesome/css/font-awesome.css'; // TODO: Despite this being imported here, it's only going to be used sparingly.

const RETSQL = ref([]); // Prepare an object
const COUNTS = ref([]);

export default {
		
		setup() {
			provide('RETSQL', RETSQL) // Make object available to all components.
			provide('COUNTS', COUNTS)
		},
		components: {
			AppHeader,
			topnav, // TODO: Move this into AppHeader.vue
			search, // TODO: Move this into AppHeaderTopNav.vue
			AppFooter
		},
		mounted() {
			$("body").on( "swiperight", function(event){ $(".menu-icon").click(); });
			
			fetch('/api/v1/config.json')
				.then(response => response.json())
				.then(json_data =>{
					RETSQL.value = json_data.general_settings; // General Settings is provided by general_settings table and handled by backend/retsql/settings.php
					RETSQL.value.site_type = "agent"; // Override the general settings to see the changes instantly.
					RETSQL.value.usOrMe = ( RETSQL.site_type != ( "agent" || "broker" ) ) ? "Us" : "Me";
					RETSQL.value.ourOrMy = ( RETSQL.site_type != ( "broker" || "agent") ) ? "Our" : "My";
					RETSQL.site_re_lic =  RETSQL.lic ;

					let COUNTS = json_data.counts; // Counts are divided into TWO sets. Global and Entity, allowing for customizable and dynamic navigation, pagination, etc.
				});

			$(document).foundation();
		},
	
	}
</script>

<style lang="scss">
	body {
		width: 100%;
		// background-image: url('/assets/background.jpg');
		background-position: 0 0;
    	background-size: cover;
    	background-attachment: fixed;
    	background-repeat: no-repeat;
		
		.off-canvas-content {
			display: flex;
			min-height: 100vh;
			flex-direction: column;
		}
	}

	header {
		border-radius: 1em 1em 0 0;
		margin-top: 5px;
		
		.header-content {
			// background-image: url('/assets/header.png');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			min-height: 200px;
			border-radius: 1em 1em 0 0;
		}
		.title-bar {
			display: none;
		}
		.top-bar, .top-bar ul {
			background-color: transparent;
		}
		.whiteBG{
			background-color: rgba(255,255,255, 10);	
		}
		
	}
	main {
		background-color: rgba(255, 255, 255, 0.9);
		display: table; /* fixes the height of the main element */
		margin: 0 auto;
		max-width: 75rem;
	}

	footer {
		background-color: rgba(255, 255, 255, .95);
		border-radius: 0 0 1em 1em;
		margin-bottom: 5px;
	}

</style>