AOS.init({
  duration:1300,
})

function toggle(id){
  if(document.getElementById(id).style.display == 'block'){
    document.getElementById(id).style.display = 'none';
  }else{
    document.getElementById(id).style.display = 'block';
  }
}

function toggleBar(x){
  x.classList.toggle("change")
}

