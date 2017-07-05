function alfa() {
  document.querySelector(".box_ipt_btn").onclick = function() {
    var donated = document.querySelector(".box_ipt_wndw").value;
    var donated = donated * 0.45;
    if (donated <= 0) {
      document.querySelector(".scorebox_p").innerHTML = "Szkoda, nie oddawałaś/oddawałeś jeszcze krwi. Być może nie wiesz jeszcze, dlaczego warto to robić?";
      document.querySelector(".textbox_p2").innerHTML = "Krwiodawcy, oprócz otrzymania 8 czekolad po każdej donacji, mogą uzyskać różne przywileje. Więcej na ten temat możesz przeczytać na tej stronie:";
    } else if (donated >= 5 && donated < 6) {
      document.querySelector(".scorebox_p").innerHTML = "Nieźle, oddałaś/oddałeś już " + donated + " l. krwi! Jeśli jesteś kobietą, przysługuje Ci już tytuł zasłużonego dawcy krwi III stopnia - mężczyzni muszą oddać 6 litrów.";
      document.querySelector(".textbox_p2").innerHTML = "Jeśli jesteś kobietą, oprócz przywilejów każdego honorowego krwiodawcy, przysługują Ci również zniżki na niektóre leki oraz możliwość korzystania ze świadczeń opieki zdrowotnej bez kolejki! " + " Jeśli natomiast jesteś mężczyzną, przysługują Ci tylko przywileje honorowego krwiodawcy (patrz poniżej).";
    } else if (donated >= 6 && donated < 10) {
      document.querySelector(".scorebox_p").innerHTML = "Dobra robota, oddałaś/oddałeś już " + donated + " l. krwi! Czy wiesz, że przysługuje Ci już tytuł zasłużonego dawcy krwi III stopnia?";
      document.querySelector(".textbox_p2").innerHTML = "Oprócz przywilejów każdego honorowego krwiodawcy, przysługują Ci także zniżki na niektóre leki oraz możliwość korzystania ze świadczeń opieki zdrowotnej bez kolejki!";
    } else if (donated >= 10 && donated < 12) {
      document.querySelector(".scorebox_p").innerHTML = "Nieźle, oddałaś/oddałeś już " + donated + " l. krwi! Jeśli jesteś kobietą, przysługuje Ci już tytuł zasłużonego dawcy krwi II stopnia - mężczyzni muszą oddać 6 litrów.";
      document.querySelector(".textbox_p2").innerHTML = "Jeśli jesteś kobietą, oprócz przywilejów każdego honorowego krwiodawcy, przysługują Ci również zniżki na niektóre leki oraz możliwość korzystania ze świadczeń opieki zdrowotnej bez kolejki! " + " Jeśli natomiast jesteś mężczyzną, przysługują Ci tylko przywileje honorowego krwiodawcy (patrz poniżej).";
    } else if (donated >= 12 && donated < 15) {
      document.querySelector(".scorebox_p").innerHTML = "Dobra robota, oddałaś/oddałeś już " + donated + " l. krwi! Czy wiesz, że przysługuje Ci już tytuł zasłużonego dawcy krwi II stopnia?";
      document.querySelector(".textbox_p2").innerHTML = "Oprócz przywilejów każdego honorowego krwiodawcy, przysługują Ci także zniżki na niektóre leki oraz możliwość korzystania ze świadczeń opieki zdrowotnej bez kolejki!";
    } else if (donated >= 15 && donated < 18) {
      document.querySelector(".scorebox_p").innerHTML = "Wspaniale, oddałaś/oddałeś już " + donated + " l. krwi! Jeśli jesteś kobietą, przysługuje Ci już tytuł zasłużonego dawcy krwi I stopnia - mężczyzni muszą oddać 18 litrów.";
      document.querySelector(".textbox_p2").innerHTML = "Jeśli jesteś kobietą, to oprócz przywilejów każdego honorowego krwiodawcy, przysługują Ci również zniżki na niektóre leki, możliwość korzystania ze świadczeń opieki zdrowotnej bez kolejki oraz darmowe przejazdy komunikacją miejską. Jeśli natomiast jesteś mężczyzną, przysługują Ci zniżki na niektóre leki oraz możliwość korzystania ze świadczeń opieki zdrowotnej bez kolejki!";
    } else if (donated >= 18) {
      document.querySelector(".scorebox_p").innerHTML = "Znakomicie! Oddałaś/oddałeś już " + donated + " l. krwi! Jestem dumny z Twoich osiągnięć! Wiedz, że przysługuje Ci tytuł zasłużonego dawcy krwi I stopnia i różne przywileje z tego tytułu.";
      document.querySelector(".textbox_p2").innerHTML = "Oprócz przywilejów każdego honorowego krwiodawcy, przysługują Ci również zniżki na niektóre leki, możliwość korzystania ze świadczeń opieki zdrowotnej bez kolejki oraz darmowe przejazdy komunikacją miejską!";
    } else {
      document.querySelector(".scorebox_p").innerHTML = "Oddałaś/oddałeś już " + donated + " l. krwi!";
      document.querySelector(".textbox_p2").innerHTML = "Jeśli jesteś kobietą, przysługują Ci następujące przywileje: Jeśli natomiast jesteś mężczyzną, przysługują Ci podstawowe przywileje honorowego krwiodawcy.";
    }
    document.querySelector(".scorebox").style.display = "inherit";
    document.querySelector(".textbox").style.display = "inherit";
    console.log(donated);
  }
};

alfa();
