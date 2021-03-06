// Definindo referências para elementos da página
var authForm = document.getElementById('authForm')
var authFormTitle = document.getElementById('authFormTitle')
var register = document.getElementById('register')
var access = document.getElementById('access')
var loading = document.getElementById('loading')
var auth = document.getElementById('auth')
var userContent = document.getElementById('userContent')
var userEmail = document.getElementById('userEmail')

// Alterar o formulário de autenticação para o cadastro de novas contas
function toggleToRegister() {
  authForm.submitAuthForm.innerHTML = 'Cadastrar conta'
  authFormTitle.innerHTML = 'Insira seus dados para se cadastrar'
  hideItem(register)
  showItem(access)
}

// Alterar o formulário de autenticação para acesso de contas já existentes
function toggleToAccess() {
  authForm.submitAuthForm.innerHTML = 'Acessar conta'
  authFormTitle.innerHTML = 'Acesse a sua conta para continuar'
  hideItem(access)
  showItem(register)
}

// Simplifica a exibição de elementos da página
function showItem(element){
  element.style.display = 'block'
}

// Simplifica a remoção de elementos da página
function hideItem(element){
  element.style.display = 'none'
}

// Mostrar conteudo para usuários autenticados
function showUserContent(user) {
  userEmail.innerHTML = user.email
  hideItem(auth)
  showItem(userContent)
}

// Mostrar conteudo para usuários não autenticados
function showAuth() {
  authForm.email.value = ''
  authForm.password.value = ''
  hideItem(userContent)
  showItem(auth)
}