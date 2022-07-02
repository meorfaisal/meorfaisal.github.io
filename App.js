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
<div class="col-sm">
<b>${tahun}: ${syarikat}</b>
<ul>${text}</ul>
</div>
`
		})
		// console.log(biodata)
		var destination = document.getElementById("Servis")
		destination.innerHTML += `
<div class="row">

<div class="col-lg-4 col-md-6 d-flex ">
  <div>
    <h4>Web Developement</h4>
    <p>Membuat sistem website (backend)</p>
    <p class="font-italic">PHP & JavaScript</p>
  </div>
</div>

<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
  <div>
    <h4>WEB3 dApp</h4>
    <p>Membuat sistem blockchain (backend)</p>
  </div>
</div>

</div>   
`

		var destination = document.getElementById("Skill")
		destination.innerHTML += `
<div class="row">
 
<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
<b>WordPress/CMS:</b> 90%
</div>
<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
<b>PHP:</b> 80%
</div>
<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
<b>HTML:</b> 50%
</div>
<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
<b>CSS:</b> 50%
</div>
<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
<b>Solidity:</b> 50%
</div>
<div class="col-lg-4 col-md-6 d-flex align-items-stretch">
<b>JavaScript:</b> 45%
</div>
</div>

`

		var destination = document.getElementById("bio")
		destination.innerHTML +=
			`
<div class="col-lg-6">
<ul>
<li><strong>Tarikh Lahir:</strong> <span>${biodata.TarikhLahir}</span></li>
<li><strong>Website:</strong> <span>www.meorfaisal.com</span></li>
<li><strong>Telefon:</strong> <span>${biodata.Telefon}</span></li>
<li><strong>Tempat Tinggal:</strong> <span>${biodata.TempatTinggal}</span></li>
</ul>
</div>
<div class="col-lg-6">
<ul>
  <li><strong>Umur:</strong> <span>${biodata.Umur}</span></li>
  <li><strong>Pengajian:</strong> <span>${biodata.Pengajian}</span></li>
  <li><strong>E-Mel:</strong> <span>${biodata.EMel}</span></li>
  <li><strong>Freelance:</strong> <span>Available</span></li>
</ul>
</div>
`
	})
})



let konten = `
<main role="main">



  <!-- ======= About Me ======= -->
  <div class="jumbotron">
    <div class="row">
      <div class="col-lg-4" data-aos="fade-right">
      <img class="d-block mx-auto mb-4" src="/src/ico.png" >
      <center><a class="btn btn-primary" href="https://meorfaisal.com/RESUME_MEOR_FAISAL_BIN_MEOR_JALALUDDIN.pdf" role="button">Resume Saya »</a></center>
      </div>
      <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h3>MEOR FAISAL</h3>
        <p class="fst-italic">
          Lebih suka bidang kreatif kerana boleh mengekplor benda baru.
        </p>
        <div class="row" id="bio">
        </div>
        <p>Meningkatkan dan memajukan diri dalam bidang yang diceburi bagi menjadikan kerjaya professional.</p>
        <p>Mencari pengalaman dan meningkatkan pengetahuan yang berguna, yang boleh mendapat manfaat melalui kemahiran komunikasi yang baik, kemahiran penyelesaian masalah dan kemahiran lain, bagi membantu meningkatkan pretasi peribadi, produktiviti dan kualiti.</p>
        <p>Membangunkan dan mengekalkan pretasi cemerlang termasuk memberi idea untuk penambahbaikan sistem pengurusan sedia ada.</p>
      </div>
    </div>

  </div><!-- End About Me -->

</main>
<body>

<div class="container">
  <div class="card d-flex align-items-stretch">
    <h5 class="card-header">SKILL »
    </h5>
    <div class="card-body">
      <div id="Skill">
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="card d-flex align-items-stretch">
    <h5 class="card-header">SERVIS »
    </h5>
    <div class="card-body">
      <div id="Servis">
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="card d-flex align-items-stretch">
    <h5 class="card-header">RESUME »
    </h5>
    <div class="card-body">
      <div id="Resume">
      </div>
    </div>
  </div>
</div>

</body>`

$(document).ready(function() {
	$('#content').append(konten);
})
