
<template>
  <div class="contenedor-upload">
    <div>TESTTTTTTTTTTTTTT33333333333333TTTTTTTTTTTTTT</div>
    <div>
      <div class="file-select" id="src-file1">
        <input
          type="file"
          id="file"
          accept="image/*;capture=camera"
          capture="camera"
          @change="setFiles($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  components: {},
  data() {
    return {
      loading: null,
    }
  },
  methods: {
    async setFiles(event) {
      console.log('evento recibido')
      const file = document.querySelector('input[type=file]').files[0]
      console.log('file', file)
      if (file && file.type.split('/')[1] == 'pdf') {
        const url = URL.createObjectURL(file)
        console.log('url', url)
        const base64 = await this.getBase64(file)
        console.log(base64)
        const paylodad = {
          name: file.name.split('.')[0],
          base64: base64,
        }
        await this.$store.dispatch('producto/uploadFile', paylodad)
      } else {
        console.log('error')
      }
    },

    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
    },
  },
  computed: {},
  async mounted() {},
}
</script>

<style>
.contenedor-upload {
  width: 100%;
  background: rgb(211, 196, 196);
}
</style>
