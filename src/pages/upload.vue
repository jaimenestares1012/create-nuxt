
<template>
  <div class="contenedor-upload">
    <div v-if="condicion">
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
    <div
      v-else
      style="
        font-size: 50px;
        border-radius: 30px;
        background: #ffffff;
        text-align: center;
      "
      @click="refrescar"
    >
      refrescar
    </div>

    <div style="margin-top: 100px">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Tax filing</th>
            <th>Wages</th>
            <th>Total deductions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="width: 200px">{{ registros.id }}</td>
            <td>{{ registros.nombre }}</td>
            <td>{{ registros.apellido }}</td>
            <td>{{ registros.correo }}</td>
            <td>{{ registros.tax_filing }}</td>
            <td>{{ registros.wages }}</td>
            <td>{{ registros.total_deductions }}</td>
          </tr>
        </tbody>
      </table>
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
      this.$showSpinner(true)
      console.log('evento recibido')
      const file = document.querySelector('input[type=file]').files[0]
      console.log('file', file)
      if (file && file.type.split('/')[1] == 'pdf') {
        const url = URL.createObjectURL(file)
        console.log('url', url)
        const base64 = await this.getBase64(file)
        const base64WithoutHeaders = base64.substring(base64.indexOf(',') + 1)
        console.log('base64WithoutHeaders', base64WithoutHeaders)
        const paylodad = {
          name: file.name.split('.')[0],
          base64: base64WithoutHeaders,
          identificador: this.identificador,
        }
        await this.$store.dispatch('producto/uploadFile', paylodad)
        this.$showSpinner(false)
      } else {
        this.$showSpinner(false)
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
    refrescar() {
      this.$router.push('/registro')
      this.$store.commit('producto/DELETE')
    },
  },
  computed: {
    ...mapGetters('producto', ['identificador', 'registros']),
    condicion() {
      return Object.keys(this.registros).length == 0 ? true : false
    },
  },
  async mounted() {
    if (!this.identificador) {
      this.$router.push('/registro')
    }
  },
}
</script>

<style>
.contenedor-upload {
  width: 70%;
  margin: 200px auto;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 8px;
}

th {
  background-color: #4caf50;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
