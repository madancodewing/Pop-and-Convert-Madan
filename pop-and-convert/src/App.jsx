import { useState } from 'react'
import Navbar from './assets/Component/Navbar'
import Screen from './assets/Component/Screen'
import Notification from './assets/Page/Notification'
import Welcome from './assets/Page/Welcome'

const screens = {
    welcome: Welcome,
    notification: Notification,
}


function App() {
    const [currentPage, setCurrentPage] = useState('welcome')
    return (
        <>
            <Navbar onScreenChange={setCurrentPage} currentScreen={currentPage} />
            <Screen screen={screens[currentPage] || null} />
        </>
    )

}

export default App


