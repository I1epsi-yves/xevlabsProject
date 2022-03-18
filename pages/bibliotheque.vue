<template>
  <div class="container">
    <b-card bg-variant="primary" text-variant="white" title="Bibliotheque">
  <b-card-text>
    Enrichissez vous et enrichissez nous
  </b-card-text>
</b-card>
<div style="margin-top: 7%">
  
  <b-alert v-if="livres.length==0" show variant="info">Pas de livre disponible</b-alert>

  <modalAjout v-on:ajout="ajouter"/>
  <div v-if="livres.length!==0">
    <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab  v-for="livre in livres" :key="livre.id" v-bind:title="livre.titre" active><b-card-text>
        <b-table-simple small caption-top stacked >
          <b-tbody>
            <b-tr>
              <b-th rowspan="3" stacked-heading="Titre">{{livre.titre}}</b-th>
              <b-td stacked-heading="Date">{{livre.date}}</b-td>
              <b-td stacked-heading="Auteur">{{livre.auteur}}</b-td>
              <b-td stacked-heading="Commentaire">{{livre.commentaire}}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
        <b-button variant="danger" @click="supprimer(livre)">supprimer</b-button>
        </b-card-text></b-tab>
    </b-tabs>
  </b-card>
  </div>
  </div>
  </div>
</template>

<script>
import modalAjout from "~/components/modalAjout.vue"
export default{
  name:"bibliotheque",
  components:{ modalAjout},
  data(){
    return {
      livre: {titre:'',date:'',auteur:'',commentaire:''},
      livres: []
    }

  },
    created(){
        this.$fire.firestore.collection('/bibliotheque').get().then(querySnapshot => {

          querySnapshot.forEach(doc=> {
            const data ={
              'id':doc.id,
              'titre':doc.data().titre,
              'date':doc.data().date,
              'auteur':doc.data().auteur,
              'commentaire':doc.data().commentaire
            }
            this.livres.push(data)
          })
        })
    },
  methods:{
    ajouter(titre,date,auteur,commentaire){

      this.$fire.firestore.collection('/bibliotheque').add({
            titre: titre,
            date: date,
            auteur: auteur,
            commentaire: commentaire
          }).then(docRef => {
            console.log('Client added: ', docRef.id)
            this.livres.push({"titre":titre,"date":date,"auteur":auteur,"commentaire":commentaire})
          }).catch(error => {
            console.error('Error adding employee: ', error)
          })
          },
    supprimer(livre){
      this.$fire.firestore.collection('/bibliotheque').where('titre', '==',livre.titre).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
      doc.ref.delete();
      this.$router.push('/')
          })
          })
      var index=this.livres.indexOf(livre)
      this.livres.splice(index,1)
    }

  }
}
</script>

<style>
</style>
