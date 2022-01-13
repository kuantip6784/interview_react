import React from 'react'
import { Link , withRouter} from 'react-router-dom'

function NavbarComponent() {
    return (
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link to="/" className="nav-link">เพิ่มรายการหนังสือ</Link>
                </li>
                <li className="nav-item pr-3 pt-3 pb-3">
                    <Link to="/create" className="nav-link">รายการหนังสือที่อ่านแล้ว</Link>
                </li>           
            </ul>
        </nav>
    )
}

export default NavbarComponent
