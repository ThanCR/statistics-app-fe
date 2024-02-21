import './SideBar.css';
import { MdDashboard, MdInsertChart } from 'react-icons/md'
import {FaFileAlt} from 'react-icons/fa'

function SideBar() {
    return (
        <>
            <aside className='sidebar-aside'>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <a href="#">
                            <MdDashboard/>
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="#">
                            <MdInsertChart/>
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="#">
                            <FaFileAlt/>
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    );
}

export default SideBar;