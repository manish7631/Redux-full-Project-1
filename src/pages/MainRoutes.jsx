import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Admin } from './Admin'
import { Boooks } from './Boooks'
import { EditBooks } from './EditBooks'
import { SingleBooks } from './SingleBooks'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Boooks />} />
      <Route path="/books/:id" element={<SingleBooks />} />
      <Route path="/books/:id/edit" element={<EditBooks />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  )
}
