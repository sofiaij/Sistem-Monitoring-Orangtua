import CardAbsensi from "../Components/Fragments/CardAbsensi"
import CardAkademik from "../Components/Fragments/CardAkademik"
import Navbar, { NavbarLeft } from "../Components/Fragments/Navbar"
import Graph from "../Components/Fragments/Graph";

const AkademikPage = () => {
  const data = [
    { x: 1, y: 3.47 },
    { x: 2, y: 3.53 },
    { x: 3, y: 3.67 },
    { x: 4, y: 3.72 },
    { x: 5, y: 3.81 },
  ];
  const xLabel = 'Semester';
  const yLabel = 'IPS';
  return (
    <div className="flex flex-col">
      <Navbar types={'akademik-navbar'}/>        
      <div className=" mt-[29%] md:mt-[14%] lg:mt-[7%] 2xl:mt-[7%] flex flex-col lg:flex-row py-5 gap-5">
        <NavbarLeft/>        
        <div className="flex flex-col p-3 md:flex-row lg:hidden">
         <CardAbsensi matkul={['IMK','BASIS DATA','METNUM','AI']}/>
         <div className="flex flex-col p-9 rounded-lg shadow-lg animate-fade-left ">
          <h1 className="mx-auto font-semibold text-tBlue">Statistik IP Semester</h1>
          <Graph data={data} xLabel={xLabel} yLabel={yLabel} />
         </div>
        </div>
        <div className="w-full lg:ml-[22%] flex flex-col gap-2 2xl:gap-5 p-4 lg:p-0">
          <CardAkademik title={'Jadwal Kuliah'} icons={'icon-schedule.svg'} images={'akademik-image.png'} navigate={'/akademik-jadwal'}/>           
          <CardAkademik title={'Tugas'} icons={'icon-tugas.svg'} images={'tugas-image.png'} navigate={'/akademik-tugas'}/> 
          <CardAkademik title={'Kartu Hasil Studi dan Evaluasi'} icons={'icon-KHS.svg'} images={'khs-image.png'} navigate={'/akademik-khs'}/> 
        </div>
        <div className="hidden w-full lg:flex flex-col 2xl:gap-6">
         <CardAbsensi matkul={['IMK','BASIS DATA','METNUM','AI']}/>
         <div className="w-full max-w-md lg:min-w-lg 2xl:max-w-xl flex flex-col p-9 rounded-lg shadow-lg animate-fade-left ">
          <h1 className="mx-auto text-sm md:text-md lg:text-lg 2xl:text-2xl font-semibold text-tBlue">Statistik IP Semester</h1>
          <Graph data={data} xLabel={xLabel} yLabel={yLabel} />
         </div>
        </div>
        
      </div>      
      
    </div>
  )
}

export default AkademikPage