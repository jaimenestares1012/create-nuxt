<template>
  <div class="contenedor-princi">
    <form @submit.prevent="submitForm">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" />
      </div>
      <div>
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" v-model="apellido" />
      </div>
      <div>
        <label for="correo">Correo electrónico:</label>
        <input type="email" id="correo" v-model="correo" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      correo: '',
    }
  },
  methods: {
    async submitForm() {
      // Aquí puedes hacer lo que necesites con los valores de los campos
      const paylodad = {
        name: this.nombre,
        last_name: this.apellido,
        mail: this.correo,
      }
      await this.$store.dispatch('producto/sendDataUsuari', paylodad)
    },
  },
}
</script>
<style>
.contenedor-princi {
  width: 80%;
  margin: 100px auto;
}
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input[type='text'],
input[type='email'] {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
}

button[type='submit'] {
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
}

button[type='submit']:hover {
  background-color: #0069d9;
}
</style>
