import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
    <>
        <Navbar />
        
        <div className="container">
            <Routes>
                <Route path="/marvel" element={<MarvelPage />} />
                <Route path="/dc" element={<DcPage />} />

                <Route path="/search" element={<HeroPage />} />
                <Route path="/hero" element={<SearchPage />} />
                
                <Route path="/" element={<Navigate to='/marvel' />} />
            </Routes>
        </div>
    </>
}
