import CardInformasi from "../Components/Fragments/CardInformasi"
import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const InformasiKalenderAkademik = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar types={"akademik-navbar"}/>
      <div className="flex flex-row justify-center gap-4 mt-[7%]">
        <NavbarLeft/>
        <div className="w-full lg:ml-[22%] flex flex-col-reverse lg:flex-row justify-center gap-3 mt-20 lg:mt-3 ">
          
          <div className="w-full lg:h-[80vh] flex flex-col gap-2 lg:overflow-y-scroll p-3 animate-fade-down">
          <div className="w-full flex flex-row gap-2 px-4 md:px-0 "> 
              <input type="text" placeholder="ketikkan sesuatu" className="w-full text-[12px] lg:text-[15px] 2xl:text-[18px] shadow-md rounded-md p-3" />
              <button className="bg-tBlue text-[12px] lg:text-[15px] 2xl:text-[18px] text-white rounded-md px-3 py-2">Cari</button>
            </div>
            <CardInformasi type={"kalender-card"} 
              status={'terbaru'} 
              date={'20 November 2023'}
              title={'Pengumuman Pengambilan Jas Almamater Bagi Mahasiswa Angkatan Tahun 2023 Jenjang D3, D4, dan S1'}
              detail={'Direktur Direktorat Aset dengan ini mengumumkan pendistribusian jas almamater bagi Mahasiswa . . .'}
              />            
            <CardInformasi type={"kalender-card"}
              status={'sudah dibuka'} 
              date={'18 November 2023'}
              title={'Kelas yang Diwajibkan Mengikuti Kuliah Tamu'}
              detail={'Paduan Suara FLOICE, dari FTP Universitas Brawijaya menyabet tiga gelar juara di ajang “Busan Choral Festival & Competition 2023” yang diselenggarakan . . .'}
            />            
            <CardInformasi type={"kalender-card"}
              status={'sudah dibuka'} 
              date={'14 November 2023'}
              title={'Pelaksanaan perkuliahan selama penyelenggaraan GEMASTIK 2023'}
              detail={'Universitas Brawijaya (UB) Malang menemukan potensi limbah cangkang tiram yang digunakan sebagai bahan baterai kendaraan listrik. . .='}
            />            
          </div>
          
            <div className="w-full mx-auto md:max-w-sm 2xl:max-w-lg justify-center animate-fade-left px-4">
              <h1 className="text-2xl text-tBlue font-bold mb-5">Kalender Akademik</h1>
              <Calendar className="w-full rounded-lg border-none shadow-lg p-8 font-semibold text-[#485C71]"/>
            </div>

          

          
        </div>
      </div>
    </div>
  )
}

export default InformasiKalenderAkademik