import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../services/operations/authAPI';

export default function ProfileDropdown() {

  const [open, setOpen] = useState(false);
    const {user} = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function clickHandler() {
      dispatch(logout(navigate));
    }

    const toggle = () => {
      setOpen((prev) => !prev)
    }

  return (
    <div>
        <button onClick={toggle}>
            <img src={user.image} alt="" className=' w-14 h-14 rounded-full'/>
        </button>
        {open === true && (
          <div className=' absolute border border-black rounded pe-10 px-5 py-5 flex flex-col items-start gap-1 text-lg font-medium bg-white top-20 right-32'>
          <Link to="/myprofile">My Profile</Link>
          <button onClick={clickHandler}>Logout</button>
      </div>
        )}
    </div>
  )
}
