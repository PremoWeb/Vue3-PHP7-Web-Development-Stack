<template>
    <div class="search-wrapper">
        <i id="filtersubmit" class="fa fa-search"></i>
        <input type="text" v-model="q" name="address" placeholder="Quick search" autocomplete="off" spellcheck="false" autocorrect="off" tabindex="1" />
        <ul>
            <li v-for="(record) in records" :key="record.id" @click="clear(record.permalink)">
              <router-link to="{ path: permalink }" replace>{{ record.address }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import router from './router';
import axios from "axios";

export default {

    data() {
      return {
          q: "",
          records: [],
          clear(permalink) {
              this.q = "";
              this.records = [];
              router.push(permalink);
          }
        }
    },

    watch: {
        q(value) {
            if (value.length > 2) {
                this.search(value);

                // TODO: Debounce the search
                // clearTimeout(this.timer);
                // this.timer = setTimeout(() => {
                //     this.search(value);
                // }, 300);
                
            }
        },
    },

    methods: {
        search(value) {
            axios.get("/api/v1/quick?q=" + value).then(response => {
                this.records = response.data;
            });
        },
    },
    
}
</script>

<style lang="scss">
    .search-wrapper {
        position: relative;

        i { // search icon
            position: absolute;
            right: 0px;
            padding: 10px;
            cursor: pointer;
        }

        ul { // suggestions
            position: absolute;
            left: 0;
            right: 0;
            background: #fff;
            border: 1px solid #ccc;
            border-top: none;
            list-style: none;
            padding: 0;
            margin: 0;
            z-index: 999;
            li { // suggestion
                padding: 10px;
                cursor: pointer;
                &:hover {
                    background: #ccc;
                }
            }
        }
        
    }
    .top-bar input {
        margin: 0;
        max-width: 100%;
        margin-right: 10rem; // TODO: Added because of issues with dropdown. This will get fixed.
        transition: margin-right 0.1s;
    }
    .top-bar input:focus {
        margin-right: 10rem;
        transition: margin-right 0.1s;
    }
    #filtersubmit {
	position: absolute;
	right: 0px;
    padding: 11px;	
	color: #7B7B7B;
	cursor: pointer;
}

</style>

