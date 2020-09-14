<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col-sm-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>Add a contact</h3>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <input class="form-control" placeholder="Given names" v-model="contact.given_names">
            </div>
            <div class="form-group">
              <input class="form-control" placeholder="Surname"  v-model="contact.surname">
            </div>
            <div class="form-group">
              <input type="number" class="form-control" placeholder="Cellphone" v-model="contact.cellphone">
            </div>
            <button class="btn btn-primary" v-on:click="addContact">Submit</button>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>Address book</h3>
          </div>
          <table id="phoneBookItems" class="informationTable">
            <thead>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Telefone</th>
              <th></th>
            </thead>
            <tbody>
              <tr v-for="(contact, index) in contacts">
                <td>{{ contact.given_names }}</td>
                <td>{{ contact.surname }}</td>
                <td>{{ contact.cellphone }}</td>
                <td><button class="btn btn-xs btn-danger" v-on:click="deleteContact(index)">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> -->
<script>
  export default {
    name: "app",
    data() {
      return {
        contact: { 
          surname: 'Coder', 
          given_names:'Byte', 
          cellphone:'8885559999' 
        },
        contacts: [],
      }
    },
    methods: {
      addContact: function() {
        if (this.contact.surname) {
          this.contacts.push(this.contact);
          this.contact = { surname: '', given_names: '', cellphone: '' };
        }
      },
      deleteContact: function(index) {
        if (confirm("Are you sure you want to delete this contact?")) {
          this.contacts.splice(index, 1);
        }
      }
    }
  };
</script>