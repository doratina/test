  let money = JSON.parse(window.localStorage.getItem('money'))
  let moneyCont = document.getElementById("moneyCont")
  const thank = "Thanks for buying!"
  moneyCont.innerHTML = "$" + money
  let moneyOrg = money
  let moneyUsed = 0
  let count = 0
  var P250 = "img/pistol/P250.png"
  let Deagle = "img/pistol/Deagle_eagle.png"
  let TEC9 = "img/pistol/Tec-nine.png"
  let G18 = "img/pistol/Glock178.png"
  let M911 = "img/pistol/M1911.png"
  let Gold = "img/pistol/New_golden_gun.png"
  let Hipower = "img/pistol/Hi_power.png"
  let G17 = "img/pistol/NewGlockSkin.png"
  let Makarov = "img/pistol/Makarov.png"
  let HushPuppy = "img/pistol/Shush_puppy.png"
  let Windicator = "img/pistol/Winddoor.png"
  let GoldCreagle = "img/pistol/Golden_creagle_real.png"
  let Creagle = "img/pistol/Creagle.png"
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  let = 
  function buy(price, link) {
    if (confirm(`Are you sure to checkout? You used ${price}$`)){
    moneyLeft = money - price 
    window.localStorage.setItem("money", JSON.stringify(moneyLeft))
    money = JSON.parse(window.localStorage.getItem('money'))
    moneyCont.innerHTML = "$" + money
    window.location.href(link)
    }
  }