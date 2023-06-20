import { Route, Routes } from "react-router-dom"

import { DcPage, HeroPage, HeroesRoutes, MarvelPage, SearchPage } from "../heroes"
import { LoginPage } from "../auth"
import { Navbar } from "../ui"

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPage />} />

          <Route path="/search" element={<HeroPage />} />
          <Route path="/hero" element={<SearchPage />} />

          <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}
