<template>
    <div>
        <h1>Galeria</h1>
        <router-link :to="{ name: 'PhotosId', params: {id: photo} }" 
            v-for="(photo, index) of photos" :key="index">
            <button>
                {{photo}}
            </button>
        </router-link>
        <Photo/>
        <button @click="previous">Anterios</button>
        <button @click="home">Home</button>
        <button @click="next">Next</button>
    </div>
</template>

<script>
import Photo from '@/components/Photo.vue';
export default {
    components:{
        Photo,
    },
    data(){
        return {
            photos: [1,2,3,4],
        }
    },
    methods: {
        home(){
            this.$router.push('/');
        },
        previous(){
            this.$router.go(-1);
        },
        next(){
            this.$router.go(1);
        }
    }
}
</script>