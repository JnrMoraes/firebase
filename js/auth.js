// Trata a submissão do formulário de autenticação
authForm.onsubmit = function(event) {
  showItem(loading)
  event.preventDefault()
  if (authForm.submitAuthForm.innerHTML == 'Acessar') {
    firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value)
    .catch(function (error) {
      console.log('Falha no acesso')
      console.log(error)
    })
  } else {
    firebase.auth().createUserWithEmailAndPassword(authForm.email.value, authForm.password.value)
    .catch(function (error) {
      console.log('Falha no cadastro')
      console.log(error)
    })
  }
}

// Gerenciamaneto de estado - centraliza e trata a autenticação

firebase.auth().onAuthStateChanged(function (user){
  hideItem(loading)
  if(user){
    showUserContent(user)
    // console.log('Usuário autenticado')
    // console.log(user) // contém conteudo delicado para ser exibido ao usuário - não usar em prod
  } else {
    showAuth()
    // console.log('Usuário não autenticado')
  }
})

//Função que permite o usuário sair da contas
function signOut(params) {
  firebase.auth().signOut().catch(function (error) {
    console.log('Falha ao sair da conta')
    console.log(error)
  })
}