import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import './App.css'
import { Navbar, Sidebar, ThemeSettings } from './components'
// import {
//     Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid
//     , Kanban, Area, Bar, Pie, Financial, ColorMapping,
//     ColorPicker, Editor,Line
// } from './pages'
import { useStateContext } from './context/ContextProvider'
const Ecommerce = React.lazy(() => import('./pages/Ecommerce'))
const Orders = React.lazy(() => import('./pages/Orders'))
const Calendar = React.lazy(() => import('./pages/Calendar'))
const Employees = React.lazy(() => import('./pages/Employees'))
const Stacked = React.lazy(() => import('./pages/Charts/Stacked'))
const Pyramid = React.lazy(() => import('./pages/Charts/Pyramid'))
const Kanban = React.lazy(() => import('./pages/Kanban'))
const Area = React.lazy(() => import('./pages/Charts/Area'))
const Bar = React.lazy(() => import('./pages/Charts/Bar'))
const Pie = React.lazy(() => import('./pages/Charts/Pie'))
const Financial = React.lazy(() => import('./pages/Charts/Financial'))
const ColorMapping = React.lazy(() => import('./pages/Charts/ColorMapping'))
const ColorPicker = React.lazy(() => import('./pages/ColorPicker'))
const Editor = React.lazy(() => import('./pages/Editor'))
const Line = React.lazy(() => import('./pages/Charts/Line'))



const App = () => {
    const { activeMenu, ThemSettings, setThemSettings,
        currentColor, currentMode } = useStateContext()

    return (
        <div className={currentMode === "Dark" ? "dark" : ""} >
            <BrowserRouter basename="/dashboard" >
            {/* <BrowserRouter> */}
                <div className='flex relative dark:bg-main-dark-bg' >
                    <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }} >
                        <TooltipComponent content='Settings' position="Top">
                            <button type='button'
                                className="text-3xl p-3
                            hover:drop-shadow-x1
                            hover:bg-light-gray text-white"
                                onClick={() => setThemSettings(true)}
                                style={{ background: currentColor, borderRadius: "50%" }} >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className='w-72 fixed sidebar
                        dark:bg-secondary-dark-bg 
                        bg-white' >
                            <Sidebar />
                        </div>
                    ) : (
                        <div className='w-0 
                        dark:bg-secondary-dark-bg' >
                            <Sidebar />
                        </div>
                    )}
                    <div className={
                        `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
                      ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                    } >
                        <div className='fixed md:static
                        bg-main-bg dark:bg-main-dark-bg 
                        navbar w-full' >
                            <Navbar />
                        </div>

                        <div>
                            {ThemSettings && <ThemeSettings />}
                            <Suspense fallback={<div className='m-2 md:m-10 mt-24 p-2 
    md:p-10 bg-white rounded-3xl' >Loading...</div>}>
                                <Routes>
                                    {/* dashborad */}
                                    <Route path='/' element={<Ecommerce />} />
                                    <Route path='/ecommerce' element={<Ecommerce />} />

                                    <Route path='/orders' element={<Orders />} />
                                    <Route path='/employees' element={<Employees />} />
                                    {/* <Route path='/customers' element={<Customers />} /> */}

                                    {/* apps */}
                                    <Route path='/kanban' element={<Kanban />} />
                                    <Route path='/editor' element={<Editor />} />
                                    {/* <Route path='/calendar' element={<Calendar />} /> */}
                                    <Route path='/color-picker' element={<ColorPicker />} />

                                    <Route path='/line' element={<Line />} />
                                    <Route path='/area' element={<Area />} />
                                    <Route path='/bar' element={<Bar />} />
                                    <Route path='/pie' element={<Pie />} />
                                    <Route path='/financial' element={<Financial />} />
                                    <Route path='/color-mapping' element={<ColorMapping />} />
                                    <Route path='/pyramid' element={<Pyramid />} />
                                    <Route path='/stacked' element={<Stacked />} />

                                </Routes>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
