<template>
  <div class="about">
   <v-text-field :rules="rules" label="Enter Email"></v-text-field>
   <v-text-field
      label="Main input"
      :rules="rules1"
      hide-details="auto"
    ></v-text-field>
    <v-text-field label="Another input"></v-text-field>

    <v-btn
  color="secondary"
  elevation="8"
  large
  loading
  small
></v-btn>
    
 
  </div>
</template>

<script>
  export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
       rules1: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
  }
</script>
