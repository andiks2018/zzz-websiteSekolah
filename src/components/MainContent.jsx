import React from "react";
import Hero from "./Hero";
import CardKegiatan from "./CardKegiatan";
import CardJurusan from "./CardJurusan";
import image4 from "./../assets/img4.jpg";
import image5 from "./../assets/img5.jpg";
import image7 from "./../assets/img7.jpg";
import image8 from "./../assets/img8.jpg"
import image1 from "./../assets/img1.jpg"
import image2 from "./../assets/img2.jpg"

export default function MainContent() {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Jurusan sekolah</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-12 my-3">
            <CardJurusan gambar={image4} jurusan="teknik informatika" />
          </div>
          <div className="col-lg-4 col-12 my-3">
            <CardJurusan gambar={image5} jurusan="teknik kimia" />
          </div>
          <div className="col-lg-4 col-12 my-3">
            <CardJurusan gambar={image7} jurusan="teknik fisika" />
          </div>
        </div>
        <div className="row">
            <div className="col text-center my-5">
                <h1>Kegiatan</h1>
            </div>
        </div>
        <div className="row">
            <div className="col my-5">
                <CardKegiatan image={image8} desc={"Ini adalah kegiatan camping"} />
            </div>
            <div className="col my-5">
                <CardKegiatan image={image1} desc={"Ini adalah kegiatan camping"} />
            </div>
            <div className="col my-5">
                <CardKegiatan image={image8} desc={"Ini adalah kegiatan camping"} />
            </div>
        </div>
      </div>
    </>
  );
}
