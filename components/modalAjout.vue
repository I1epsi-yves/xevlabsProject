<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing variant="outline-primary">Ajouter</b-button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Ajout livre"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="titre"
          label-for="titre-input"
          invalid-feedback="titre is required"
          :state="titreState"
        >
          <b-form-input
            id="titre-input"
            v-model="titre"
            :state="titreState"
            placeholder="ex:Les misérables"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="date"
          label-for="date-input"
          invalid-feedback="date is required"
          :state="dateState"
        >
          <b-form-input
            id="date-input"
            v-model="date"
            :state="dateState"
            placeholder="jj/mm/aa"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="auteur"
          label-for="auteur-input"
          invalid-feedback="auteur is required"
          :state="auteurState"
        >
          <b-form-input
            id="auteur-input"
            v-model="auteur"
            :state="auteurState"
            placeholder="ex:Victor Hugo"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="commentaire"
          label-for="commentaire-input"
          invalid-feedback="commentaire is required"
          :state="commentaireState"
        >
          <b-form-textarea
            id="commentaire-input"
            v-model="commentaire"
            :state="commentaireState"
            placeholder="Donnez votre avis"
            required
          ></b-form-textarea>
        </b-form-group>

      </form>
    </b-modal>
  </div>
</template>

<script>
  export default {
    name: "modalAjout",
    data() {
      return {
        titre: '',
        date: '',
        auteur:'',
        commentaire: '',
        titreState: null,
        dateState: null,
        auteurState: null,
        commentaireState: null,
        livre: {titre:"",date:"",auteur:"",commentaire:""}
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        if(this.titre==""){this.titreState = valid}
        this.dateState = valid
        this.auteurState = valid
        this.commentaireState = valid
        return valid
      },
      resetModal() {
        this.titre = ''
        this.titreState = null
        this.date = ''
        this.dateState = null
        this.auteur = ''
        this.auteurState = null
        this.commentaire = ''
        this.commentaireState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the titre to submitted titres
        this.livre.titre=this.titre
        this.livre.date=this.date
        this.livre.auteur=this.auteur
        this.livre.commentaire=this.commentaire
        console.log(this.livre.titre,"-----",this.livre.date,"-------",this.livre.auteur,"----------",this.livre.commentaire)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
        this.$emit('ajout',this.livre.titre,this.livre.date,this.livre.auteur,this.livre.commentaire)
      }
    }
  }
</script>
