/*jshint esversion: 11 */
/*jshint -W030 */

function usOrMe(vm) {
    const { usOrMe } = vm.$options;
    if (usOrMe) {
        return typeof usOrMe === 'function' ? usOrMe.call(vm) : usOrMe;
    }
}

export default {
    created () {
        const usOrMe = "us";
        if (usOrMe) {
            document.usOrMe = "Me";
        }
    }
};