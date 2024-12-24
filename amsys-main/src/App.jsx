import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/landingPage";
import DashboardPage from "./Pages/dashboardPage";
import AkademikPage from "./Pages/akademikPage";
import TugasPage from "./Pages/tugasPage";
import JadwalPage from "./Pages/jadwalPage";
import InformasiTerkini from "./Pages/informasiTerkini";
import InformasiAkademikPage from "./Pages/informasiAkademikPage";
import InformasiBiayaPage from "./Pages/informasiBiayaPage";
import InformasiKalenderAkademik from "./Pages/informasiKalenderAkademik";
import KemahasiswaanPage from "./Pages/kemahasiswaanPage";
import InformasiPage from "./Pages/informasiPage";
import KhsEvaluasiPage from "./Pages/khsEvaluasiPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/akademik" element={<AkademikPage />}/>
        <Route path="/akademik-khs" element={<KhsEvaluasiPage />}/>
        <Route path="/akademik-tugas" element={<TugasPage />}/>
        <Route path="/akademik-jadwal" element={<JadwalPage />}/>
        <Route path="/informasi" element={<InformasiPage />}/>
        <Route path="/informasi-terkini" element={<InformasiTerkini />}/>
        <Route path="/informasi-akademik" element={<InformasiAkademikPage />}/>
        <Route path="/informasi-biaya" element={<InformasiBiayaPage />}/>
        <Route path="/informasi-kalender" element={<InformasiKalenderAkademik />}/>
        <Route path="/kemahasiswaan" element={<KemahasiswaanPage />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
