'use strict';

var routes = [
  // Index page

  {
    path: '/',
    componentUrl:'./views/home.html',
    name:'home'
  },


  {
    path: '/check_profil/',

        async({ resolve, reject }) {


          var  profil=getProfil();

          if (profil==="client") {
            resolve({ componentUrl: './views/profile.html' });
          }
          else if(profil==="commercant"){
            resolve({ componentUrl: './views/account.html' });
          }
          else{
            resolve({ componentUrl: './views/check_user.html' });
          }
    },

  },
  { 
    path:'/notification',
    componentUrl: './views/notification.html'
  },

  
  { 
    path:'/client_login/',
    componentUrl: './views/login.html'
  },
  
  { 
    path:'/commercant_login/',
    componentUrl: './views/commercant_login.html'
  },
  
  {
    path:'/comments/:id/:date/',
    componentUrl: './views/comment.html'
  },
  
  
  {
    path: '/register_client',
    componentUrl: './views/register_client.html',
  },
  
  {
    path: '/register_comm',
    componentUrl: './views/register_comm.html',
  },

    
  {
    path: '/profil',
    componentUrl:'./views/profile.html'
  },
    
  {
    path: '/profil/edit',
    componentUrl:'./views/profile_edit.html'
  },
  
      
  {
    path: '/account',
    componentUrl:'./views/account.html'
  },
        
  {
    path: '/post/:id_boutique/',
    componentUrl:'./views/post.html'
  },   
  {
    path: '/modif_post/:id_post/:img/:media/',
    componentUrl:'./views/modif_post.html'
  },
    
  {
    path: '/boutique/:id/:name/:id_commercant/:localisation/:maps/:musique/:description/:heure_ouvert/:on_off/:pcouverture/',
    componentUrl:'./views/boutique.html'
  },

  {
    path: '/all_boutiques',
    componentUrl:'./views/all_boutiques.html'
  },

  
  {
    path:'/produit_detail/:id_produit/:statut/:id_boutique/:nom/:prix/:photo/:type/:id_commercant/',
    componentUrl:'./views/produit_detail.html'
  },
  {
    path:'/add_produit/:id/:id_boutique/',
    componentUrl:'./views/add_produit.html'
  },

  {
    path:'/boutik',
    componentUrl:'./views/boutik.html'
  },

  {
    path:'/mesboutiques/',
    componentUrl:'./views/mes_boutique.html'
  },

  {
    path:'/mespublications/:id_boutique/',
    componentUrl:'./views/mes_publications.html'
  },

  {
    path:'/activity_boutique/:id_boutique/',
    componentUrl:'./views/activity_boutique.html'
  },


  {
    path:'/busi',
    componentUrl:'./views/profil_busi.html'
  },

  {
    path:'/graphisme',
    componentUrl:'./views/graphisme.html'
  },

  {
    path:'/graphisme_detail/:nom',
    componentUrl:'./views/graphisme_detail.html'
  },

// Graphisme Détail Personnalisé

  {
    path:'/graphisme_courtoisie_submit/:url',
    componentUrl:'./views/graphisme/courtoisie.html'
  },

  {
    path:'/graphisme_jeu_submit/:url',
    componentUrl:'./views/graphisme/jeu_concours.html'
  },

  {
    path:'/graphisme_promo_submit/:url',
    componentUrl:'./views/graphisme/promo.html'
  },


  {
    path:'/graphisme_publicite_submit/:url',
    componentUrl:'./views/graphisme/publicite.html'
  },

  {
    path:'/graphisme_fidelisation_submit/:url',
    componentUrl:'./views/graphisme/publicite.html'
  },


  {
    path:'/submit_graphisme/:url/',
    componentUrl:'./views/submit_graphisme.html'
  },


  {
    path:'/getCategorie/:nom/',
    componentUrl:'./views/get_categorie.html'

  },


  {
    path:'/edit_categorie/:id_boutique/:title_cat/:photo/',
    componentUrl:'./views/edit_categorie.html'

  },

  

  {
    path:'/search/:nom',
    componentUrl:'./views/result_search.html'

  },

  // /search_detail/${produit.boutique_id}/${produit.prix}/${produit.boutique.nom_boutique}/${produit.nom}/${produit.photo}/${produit.description}/${produit.boutique.localisation}/${produit.statut}/${produit.boutique.commercant_id}/${produit.musique}/${produit.heure_ouvert}/${produit.pcouverture}/
  {
    path:'/search_detail/:id_boutique/:prix_produit/:nom_boutique/:produit/:photo/:description/:localisation/:maps/:statut/:id_commercant/:musique/:heure_ouvert/:pcouverture/:on_off/:description_boutik/',
    componentUrl:'./views/search_detail.html'

  },


  {
    path:'/new_categorie/:id/',
    componentUrl:'./views/new_categorie.html',
    ignoreCache:true
  },

  {
    path:'/produit_by_categorie_boutique/:id/:name/:id_boutique/:id_commercant/:image/',
    componentUrl:'./views/produit_by_categorie_boutique.html'

  },


// Créer une nouvelle Boutique
{
  path:'/new_boutique',
  componentUrl:'./views/new_boutique.html',
  ignoreCache:true
},

// Statistique
{
  path:'/statistiques',
  componentUrl:'./views/statistiques.html'
},

  //Détail sur les Statistiques d'une Boutique
{
  path:'/stat_detail/:id_boutique',
  componentUrl:'./views/stat_detail_boutique.html'
},



// Modifier infos de la Boutique
{
  path:'/edit_boutique/:id_boutique/:nom_boutique/:localisation/:heure_ouvert/:musique/',
  componentUrl:'./views/edit_boutique.html'
},

// Modifier Photo de Couverture
{
  path:'/edit_photo/:id_boutique/',
  componentUrl:'./views/modif_photo.html'
},

//Editer la Musique

{
  path:'/edit_musik/:id_boutique/',
  componentUrl:'./views/modif_musik.html'
},

{
  path:'/edit_gps/:id_boutique/',
  componentUrl:'./views/modif_gps.html'
},

{
  path:'/download_local/',
  componentUrl:'./views/download_on_local.html'
},



];
