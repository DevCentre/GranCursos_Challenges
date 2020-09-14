<template>
  <div class="container" id="app">
    <div class="row">
      <h2 class="text-center">Contatos Gran Cursos Online</h2>
      <br>
      <div class="col-sm-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>Novo Contato</h3>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <input class="form-control" placeholder="Nome" v-model="contact.given_names">
            </div>
            <div class="form-group">
              <input class="form-control" placeholder="Sobrenome" v-model="contact.surname">
            </div>
            <div class="form-group">
              <input
                type="number"
                class="form-control"
                placeholder="Telefone"
                v-model="contact.cellphone"
              >
            </div>
            <button class="btn btn-primary" v-on:click="addContact">Adicionar</button>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>Lista de Contatos</h3>
          </div>
          <table id="phoneBookItems" class="informationTable table table-strip">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Telefone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(contact, index) in contacts">
                <td>{{ contact.given_names }}</td>
                <td>{{ contact.surname }}</td>
                <td>{{ contact.cellphone }}</td>
                <td>
                  <button class="btn btn-xs btn-danger" v-on:click="deleteContact(index)">Remover</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      contact: {
        surname: "Coder",
        given_names: "Byte",
        cellphone: "8885559999"
      },
      contacts: []
    };
  },
  methods: {
    addContact: function() {
      if (this.contact.surname) {
        this.contacts.push(this.contact);
        this.contact = { surname: "", given_names: "", cellphone: "" };
      }
    },
    deleteContact: function(index) {
      Swal.fire({
        title: "Deseja remover este contato?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Sim`,
        denyButtonText: `Não`
      }).then(result => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.contacts.splice(index, 1);
          Swal.fire("Excluido!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Nenhuma mudança realizada", "", "info");
        }
      });
    }
  }
};
</script>
