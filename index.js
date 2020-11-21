function checkUser() {
  let isLogin = JSON.parse(window.localStorage.getItem('isLogin'))
  let moneyStat = JSON.parse(window.localStorage.getItem('money'))
  if (moneyStat = null){
    alert("Your account detail is incorect, please signup again")
  }
  if (!isLogin) {
    alert("You are not signned in")
    window.location.href = "./signup.html";
  }
}

checkUser()