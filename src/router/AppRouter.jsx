import { Route, Routes } from "react-router-dom"

import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"
import { PrivatreRoute } from "./PrivatreRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
      <Routes>
          
          <Route path="/login/*" element={
            <PublicRoute>
              {/* <LoginPage /> */}
              <Routes>
                <Route path="/*" element={ <LoginPage />} /> 
              </Routes>
            </PublicRoute> }
          />

          <Route path="/*" element={
            <PrivatreRoute>
              <HeroesRoutes />
            </PrivatreRoute>
          } />
          
      </Routes>
    </>
  )
}
