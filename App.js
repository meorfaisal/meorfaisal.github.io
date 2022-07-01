$(document).ready(function() {
  let urlGraph = 'https://api.meorfaisal.com'
  $.get(urlGraph, function(data) {
      jsonGraph = JSON.stringify(data);
      const biodata = data.MEOR_FAISAL.Tentang
      const pekerjaan = data.MEOR_FAISAL.Pekerjaan

      pekerjaan.forEach(kerja => {
          tahun = kerja.Tahun
          jawatan = kerja.Jawatan
          syarikat = kerja.Syarikat
          desc = kerja.desc
              // console.log(desc.slice())
          let text = "";
          for (let i = 0; i < desc.length; i++) {
              text += "<li>" + desc[i] + "</li>";
          }
          var destination = document.getElementById("Resume")
          destination.innerHTML += `
<div class="container">
<b>${tahun}: ${syarikat}</b><br>
<span>${text}</span>
</div>
<br>
`
      })
  })
})

let konten = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Centered nav only <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
<main role="main">
  <div class="jumbotron">
    <div class="col-sm-8 mx-auto">
      <h1>Hai, Saya Meor Faisal.</h1>
      <p>Saya lebih kepada membangunkan website dan suka ke arah "backend" . Masih memperkuatkan kemahiran saya bahagian "frontend"

      <p>Saya terbuka pada jawatan Web Developer.</p>
      <p>
        <a class="btn btn-primary" href="https://meorfaisal.com/RESUME_MEOR_FAISAL_BIN_MEOR_JALALUDDIN.pdf" role="button">Resume Rasa »</a>
      </p>
    </div>
  </div>
</main>
<body>
  <div class="container">
      <h1>Resume Saya</h1>        
  <div id="Resume"></div>    
</div>
<div class="container">
  <img width="250px" src="/src/mf.jpg" alt="" >
</div>
  
</body>`

$(document).ready(function() {
  $('#content').append(konten);
})
