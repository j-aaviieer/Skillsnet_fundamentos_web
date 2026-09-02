function verPerfil() {
    alert(`¡Bienvenido al Perfil!`)
}

var likeRei = 0;
var likeAsuka = 0;
var likeShinji = 0;

var textoLikesRei = document.getElementById("reiLikes");
var botonLikeRei = document.getElementById("btnRei");

botonLikeRei.onclick = function () {
    likeRei = likeRei + 1;
    textoLikesRei.innerText = likeRei + " like(s)";
};

var textoLikesAsuka = document.getElementById("asukaLikes");
var botonLikeAsuka = document.getElementById("btnAsuka");

botonLikeAsuka.onclick = function () {
    likeAsuka = likeAsuka + 1;
    textoLikesAsuka.innerText = likeAsuka + " like(s)";
};

var textoLikesShinji = document.getElementById("shinjiLikes");
var botonLikeShinji = document.getElementById("btnShinji");

botonLikeShinji.onclick = function () {
    likeShinji = likeShinji + 1;
    textoLikesShinji.innerText = likeShinji + " like(s)";
};