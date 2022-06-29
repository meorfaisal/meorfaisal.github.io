var dir = "/page";
var fileextension = ".html";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        // List all mp4 file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http://", "");
file = filename
$.get(file, function(data) {
	var txt = new Array(data);
		var destination = document.getElementById("App")
			destination.innerHTML += txt + '<br>';

});          
        });

    }
});

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
          <a class="btn btn-primary" href="/docs/4.3/components/navbar/" role="button">Resume Rasa »</a>
        </p>
      </div>
    </div>
  </main>
<body>
    <div class="container">
        <h1>Apa yang saya pernah buat?</h1>
        <p>Saya membuat beberapa sistem berkaitan kampeni dan persendirian.<br>
        Dibawah ini saya sertakan beberapa projek yang saya pernah buat.</p>
        
    <div id="App"></div>    
  </div>
  <div class="container">
    <img width="250px" src="/src/mf.jpg" alt="" >
</div>
    
</body>`

$(document).ready(function() {
    $('#content').append(konten);
  })