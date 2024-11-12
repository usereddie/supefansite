function ronaldohighlight() {
  document.getElementById("ronaldocolumn").classList.remove("gold");
  document.getElementById("ronaldocolumn").classList.add("dark-red");
  document.getElementById("presentronaldo").src = "images/08ronaldo.png";
  document.getElementById("worldcup").src = "images/compressedronaldovid.gif";
  document.getElementById("ronaldojersey").classList.remove("translucent");
  document.getElementById("messijersey").classList.remove("translucent");
  document.getElementById("CR7highlightaudio").play();
  document.getElementById("LM10highlightaudio").pause();
  document.getElementById("SUI").pause();
  document.getElementById("messi!").pause();
  document.getElementById("ronnystatsaudio").pause();
  document.getElementById("messistatsaudio").pause();
  document.getElementById("CR7highlightaudio").currentTime = 0;
  video.pause();
  video.currentTime = 0;
  audio.currentTime = 0;
}

function ronaldologo() {
  document.getElementById("worldcup").src = "images/ronaldostats.jpg";
  document.getElementById("ronaldojersey").classList.remove("translucent");
  document.getElementById("messijersey").classList.remove("translucent");
  document.getElementById("ronnystatsaudio").play();
  document.getElementById("LM10highlightaudio").pause();
  document.getElementById("CR7highlightaudio").pause();
  document.getElementById("SUI").pause();
  document.getElementById("messi!").pause();
  document.getElementById("messistatsaudio").pause();
  document.getElementById("ronnystatsaudio").currentTime = 0;
  video.currentTime = 0;
  audio.currentTime = 0;
}
function madridjerseychant() {
  document.getElementById("worldcup").src = "images/bottomleftronaldo.png";
  document.getElementById("ronaldojersey").src = "images/ronaldojersey.png";
  document.getElementById("ronaldojersey").classList.add("translucent");
  document.getElementById("messijersey").classList.remove("translucent");
  document.getElementById("SUI").play();
  document.getElementById("LM10highlightaudio").pause();
  document.getElementById("CR7highlightaudio").pause();
  document.getElementById("messi!").pause();
  document.getElementById("ronnystatsaudio").pause();
  document.getElementById("messistatsaudio").pause();
  document.getElementById("SUI").currentTime = 0;
  audio.currentTime = 0;
}
function messihighlight() {
  document.getElementById("messicolumn").classList.remove("pink");
  document.getElementById("messicolumn").classList.add("dark-blue");
  document.getElementById("presentmessi").src = "images/primemessi.png";
  document.getElementById("worldcup").src = "images/compressedmessivid.gif";
  document.getElementById("ronaldojersey").classList.remove("translucent");
  document.getElementById("messijersey").classList.remove("translucent");
  document.getElementById("LM10highlightaudio").play();
  document.getElementById("CR7highlightaudio").pause();
  document.getElementById("SUI").pause();
  document.getElementById("messi!").pause();
  document.getElementById("ronnystatsaudio").pause();
  document.getElementById("messistatsaudio").pause();
  document.getElementById("LM10highlightaudio").currentTime = 0;
  video.pause();
  video.currentTime = 0;
  audio.currentTime = 0;
}
function messilogo() {
  document.getElementById("worldcup").src = "images/messistats.jpg";
  document.getElementById("ronaldojersey").classList.remove("translucent");
  document.getElementById("messijersey").classList.remove("translucent");
  document.getElementById("messistatsaudio").play();
  document.getElementById("LM10highlightaudio").pause();
  document.getElementById("CR7highlightaudio").pause();
  document.getElementById("SUI").pause();
  document.getElementById("messi!").pause();
  document.getElementById("ronnystatsaudio").pause();
  document.getElementById("messistatsaudio").currentTime = 0;
}
function barcelonajerseychant() {
  document.getElementById("worldcup").src = "images/bottomrightmessi.png";
  document.getElementById("messijersey").src = "images/messijersey.png";
  document.getElementById("messijersey").classList.add("translucent");
  document.getElementById("ronaldojersey").classList.remove("translucent");
  document.getElementById("messi!").play();
  document.getElementById("LM10highlightaudio").pause();
  document.getElementById("CR7highlightaudio").pause();
  document.getElementById("SUI").pause();
  document.getElementById("ronnystatsaudio").pause();
  document.getElementById("messistatsaudio").pause();
  document.getElementById("messi!").currentTime = 0;
  audio.currentTime = 0;
}
function playSound() {
  document.getElementById("my-click").play();
}
function resetAll() {
  document.getElementById("worldcup").src = "images/worldcup.png ";
  document.getElementById("presentronaldo").src = "images/saudironaldo.png";
  document.getElementById("presentmessi").src = "images/miamimessi.png";
  document.getElementById("ronaldojersey").classList.remove("translucent");
  document.getElementById("messijersey").classList.remove("translucent");
  document.getElementById("ronaldocolumn").classList.add("gold");
  document.getElementById("ronaldocolumn").classList.remove("dark-red");
  document.getElementById("messicolumn").classList.add("pink");
  document.getElementById("messicolumn").classList.remove("dark-blue");
  document.getElementById("LM10highlightaudio").pause();
  document.getElementById("CR7highlightaudio").pause();
  document.getElementById("SUI").pause();
  document.getElementById("messi!").pause();
  document.getElementById("ronnystatsaudio").pause();
  document.getElementById("messistatsaudio").pause();
  document.getElementById("LM10highlightaudio").currentTime = 0;
  document.getElementById("CR7highlightaudio").currentTime = 0;
  document.getElementById("SUI").currentTime = 0;
  document.getElementById("messi!").currentTime = 0;
  video.currentTime = 0;
  audio.currentTime = 0;
}
