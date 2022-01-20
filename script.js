var acc= document.getElementsByClassName('accordian')
var i;
var len = acc.length;
for(i =0; i < len; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active'); 
        var panel=this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
            panel.style.padding= "0";
        } else{
            panel.style.maxHeight = 1000 + 'px';
            panel.style.paddingTop= " 1.5rem";
            panel.style.paddingBottom= " 1.5rem";
        }
    })
}






  function hidemovies() { //series button
    var movies = document.querySelectorAll("#movie");
    var toggle = document.getElementsByClassName(toggle)
    var i;
    for (i = 0; i < movies.length; i++){
    if (movies[i].style.display !== "none") {
      movies[i].style.display = "none";
      showseries();//show series
    } else {
      movies[i].style.display = " block";
    }
}
  }

function showseries(){
    var series = document.querySelectorAll("#serie");
    var i;
    for (i = 0; i < series.length; i++){
        series[i].style.display = " block";
    }
}


  function hideseries() { //Movies button
    var series = document.querySelectorAll("#serie");
    var i;
    for (i = 0; i < series.length; i++){
    if (series[i].style.display !== "none") {
      series[i].style.display = "none";
      showmovies()//show movies
    } else {
      series[i].style.display = " block";
    }
}
  }

  function showmovies(){
    var movies = document.querySelectorAll("#movie");
    var i;
    for (i = 0; i < movies.length; i++){
        movies[i].style.display = " block";
    }
}

function show(){
  showmovies();
  showseries();
}


// var countMovie = 1;
// function setMovieColor(btn) {
//     hideseries();
//     var property = document.getElementById(btn);
//     if (countMovie == 0) {
//         property.style.backgroundColor = "#000000"
//         countMovie = 1;        
//     }
//     else {
//         property.style.backgroundColor = "#7FFF00"
//         countMovie = 0;
//     }
// }

// var countSerie = 1;
// function setSerieColor(btn) {
//     hidemovies();
//     var property = document.getElementById(btn);
//     if (countSerie == 0) {
//         property.style.backgroundColor = "#000000"
//         countSerie = 1;        
//     }
//     else {
//         property.style.backgroundColor = "#7FFF00"
//         countSerie = 0;
        
//     }
// }