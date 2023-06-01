
const users = [
    { username: "client", password: "client1" },
    { username: "admin", password: "admin" },
    { username: "banker", password: "banker" }
  ];
  
  function handleLogin() {
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    
    const user = users.find(user => user.username === username && user.password === password);
  
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.replace(window.location.pathname, '');
    let newRoute;
    
    if (user) {
      alert(`Welcome, ${user.username}!`);
    
      if (user.username === "client") {
        window.location.href= "../views/client.html";
       
      } else if (user.username === "banker" ) {
        window.location.href= "../views/banker.html";
      }
      else if (user.username === "admin" ){
        window.location.href= "../views/admin.html";
      }
       else {
        newRoute = "/dashboard";
      }
    } else {
      alert("Invalid username or password. Please try again.");
    }
    
window.history.pushState({}, '', baseUrl + newRoute);

  }
  
 
  const form = document.getElementById("login-form");
  form.addEventListener("submit", event => {
    event.preventDefault(); 
    handleLogin();
  })