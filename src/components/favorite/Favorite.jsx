import React, { Component } from 'react'
import NavBar from '../navbar/NavBar';
import gibel from '../../assets/gibel.jpg';
import hardrock from '../../assets/hard-rock.jpg';
import Prambor from '../../assets/Prambor.png';
import Female from '../../assets/female.jpg';
import Dradio from '../../assets/dradio.png';
import Manggis from '../../assets/manggis.png';
import Surabaya from '../../assets/suara-surabaya.jpg';
import SuaraGiri from '../../assets/suara-giri.jpg';
import Prima from '../../assets/prima.jpg';
import './Favorite.css';
import Footer from '../Footer/Footer';
class Favorite extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<div className="container my-5">
					<h3>Radio Jakarta </h3>
					<hr />
					<div className="card favorite float-sm-left">
						<img src={hardrock} class="card-img-top custom-image" alt="hard-rock" />
						<div className="card-body">
							<h4 className="card-title custom">Hard-rock 87.6 Fm</h4>
							<p className="card-text">Hard Rock FM memiliki segmentasi anak muda. Mengambil range usia antara 15-25 tahun, Hard Rock FM merangkul pendengar yang smart, dinamis, urbanis, dan visioner. Hard Rock FM memiliki jargon "Lifestyle and Entertainment Station" memiliki makna mampu mengikuti perkembangan zaman. Berdiri sejak tahun 1996</p>
						</div>
					</div>
					<div className="card favorite float-sm-left">
						<img src={Prambor} class="card-img-top custom-image" alt="logo Prambors" />
						<div className="card-body">
							<h4 className="card-title custom">Prambors 102.2 Fm</h4>
							<p className="card-text">Prambors adalah stasiun radio yang ditujukan kepada kawula muda di Indonesia. Nama lengkap Prambors adalah Prambors Rasisonia, yang merupakan singkatan dari Prambanan, Mendut, Borobudur dan Sekitarnya serta Radio Siaran Sosial Niaga.</p>
						</div>
					</div>
					<div className="card favorite float-sm-left">
						<img src={Female} class="card-img-top custom-image" alt="Female" />
						<div className="card-body">
							<h4 className="card-title custom">Female 97.9 Fm</h4>
							<p className="card-text">Female Radio merupakan stasiun radio perempuan nomor satu di Indonesia. Sejak 1989, Female Radio berusaha memenuhi kebutuhan para pendengarnya melalui pilihan musik, informasi aktual dalam berbagai hal di dunia bisnis, hiburan, ekonomi, gaya hidup hingga keluarga. </p>
						</div>
					</div>
					<h3 className="judul-favorite">Radio Jambi</h3>
					<hr />
					<div className="card favorite float-sm-left">
						<img src={gibel} class="card-img-top custom-image" alt="gibel" />
						<div className="card-body">
							<h4 className="card-title custom ">Gibel 99.7 Fm</h4>
							<p className="card-text">Alamat: Jl. Lintas Sumatera, Sengeti, Payung Sekaki, Kabupaten Muaro Jambi, Riau 28292 Telepon: 0813-7356-2001	Provinsi: Jambi</p>
						</div>
					</div>
					<div className="card favorite float-sm-left">
						<img src={Dradio} class="card-img-top custom-image" alt="dradio" />
						<div className="card-body">
							<h4 className="card-title custom">Dradio 104.3 Fm</h4>
							<p className="card-text">Alamat: Jl. Kapten Pattimura No.35, Kenali Besar, Kec. Kota Baru, Kota Jambi, Jambi 36138 </p>
						</div>
					</div>
					<div className="card favorite float-sm-left">
						<img src={Manggis} class="card-img-top custom-image" alt="manggis" />
						<div className="card-body">
							<h4 className="card-title custom">Dradio 104.3 Fm</h4>
							<p className="card-text">Alamat: Jl. RJM Suryaningrat No.201, Sungai Asam, Kec. Ps. Jambi, Kota Jambi, Jambi 36123 Telepon: 0812-7401-367 </p>
						</div>
					</div>
					<h3 className="judul-favorite">Radio Surabaya</h3>
					<hr />
					<div className="card favorite float-sm-left">
						<img src={Surabaya} class="card-img-top custom-image" alt="logo" />
						<div className="card-body">
							<h4 className="card-title custom ">Suara Surabaya 100 Fm</h4>
							<p className="card-text">Suara Surabaya FM adalah sebuah stasiun radio terkenal di Kota Surabaya, Jawa Timur, Indonesia. Suara Surabaya mengudara pertama kali bersamaan dengan gerhana matahari total pada tanggal 11 Juni 1983. Slogan: "News, Interaktif, Solutif" </p>
						</div>
					</div>
					<div className="card favorite float-sm-left">
						<img src={Prima} class="card-img-top custom-image" alt="logo" />
						<div className="card-body">
							<h4 className="card-title custom">Prima 103.8 Fm</h4>
							<p className="card-text">Alamat: Jalan Raya Patimura Ruko Plaza Segi Delapan Blok 826, A Blok A No.22, Sukomanunggal, Kec. Sukomanunggal, Kota SBY, Jawa Timur 60198. Telepon: (031) 7388700 </p>
						</div>
					</div>
					<div className="card favorite float-sm-left">
						<img src={SuaraGiri} class="card-img-top custom-image" alt="logo" />
						<div className="card-body">
							<h4 className="card-title custom">Suara Giri 98.4 Fm</h4>
							<p className="card-text">Alamat: Jl. Veteran, Panggang, Gending, Kec. Kebomas, Kabupaten Gresik, Jawa Timur 61122. Telepon: (031) 3979222 </p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Favorite;



