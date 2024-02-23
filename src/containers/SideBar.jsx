import './SideBar.css';
import { MdDashboard, MdInsertChart } from 'react-icons/md'
import {FaFileAlt} from 'react-icons/fa'

function SideBar() {
    return (
        <>
            <aside className='sidebar-aside'>
                <ul className='sidebar-list'>
                    <li className='sidebar-item'>
                        <a className='sidebar-icon' href="http://localhost:3000/">
                            <MdDashboard/>
                        </a>
                    </li>
                    <li className='sidebar-item'>
                        <a className='sidebar-icon' href="http://localhost:3000/">
                            <MdInsertChart/>
                        </a>
                    </li>
                    <li className='sidebar-item'>
                        <a className='sidebar-icon' href="http://localhost:3000/">
                            <FaFileAlt/>
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    );
}

export default SideBar;