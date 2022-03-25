<template>
    <div class="grid-container">
    	<div class="grid-x grid-margin-x">
        	<div class="auto cell">
            	<b>{{ RETSQL.office_name }} BRE: {{ RETSQL.lic }}</b>
            </div>
        </div>
    </div>
	<div class="float-left">
		<p><span style="font-size: 12px;">This website uses RETSQL technology that detects and applies changes within five minutes of publication.</span><br />
		Website by <a href="https://premoweb.com" target="_blank">PremoWeb Internet Services</a>. Powered by <a href="https://abuty.com/" target="_blank">Abuty CMS</a> &amp; <a href="https://retsql.com" target="_blank">RETSQL</a>.
		</p>
	</div>
	<div class="float-right">
		<p class="text-right"> &copy;Copyright [year] <a href="/" target="_blank">{{ RETSQL.office_name }}</a>. All Rights Reserved.</p>
	</div>
</template>

<script>

import { inject } from 'vue';

export default {
  setup() {
    const RETSQL = inject('RETSQL')
    return { RETSQL }
  }
}
    
</script>