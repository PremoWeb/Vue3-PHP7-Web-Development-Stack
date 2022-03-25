<template>
<div class="grid-container full whiteBG">
    <div class="grid-x">
        <div class="large-2 small-2 cell center">
            <a href="/"><img :src="'https://' + cfg.boardNARID  + '.realtywebsites.net/Photos/Agents/' + cfg.retsqlID + '/Logos/mt-logo.png'" title="" class="responsive" alt="logo"></a>
        </div>
        <div class="large-8 small-8 cell center">
            <a href="/"><img :src="'https://' + cfg.boardNARID  + '.realtywebsites.net/Photos/Agents/' + cfg.retsqlID + '/Logos/dz.png'" title="" class="responsive" alt="logo"></a>
        </div>
        <div class="large-2 small-2 cell center">
            <a href="/"><img :src="'https://' + cfg.boardNARID  + '.realtywebsites.net/Photos/Agents/' + cfg.retsqlID + '/Logos/logo.png'" title="" class="responsive" alt="logo"></a>
        </div>
    </div>
</div>
</template>
<script>
import { inject } from 'vue'

export default {
  setup() {
    const cfg = inject("RETSQL")
    return {
        cfg: cfg,
    }
  }
}
</script>    