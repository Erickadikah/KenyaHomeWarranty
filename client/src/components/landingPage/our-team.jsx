import React, {useState} from 'react'
//placeholder profile image

import placeholdeProfilePic from "../../assets/images/customerUi/icons/sidemenu/profile.png"

export default function OurTeam() {
    const [khwTeam, updateUsers] = useState ([
        {
            id: 1,
            name: "Peter Watua",
            role: "C.E.O",
            profileImage: "" 
        },
        {
            id: 2,
            name: "Erick Adika",
            role: "Founder",
            profileImage: ""
        },
        {
            id: 3,
            name: "Robert Okoba",
            role: "Founder",
            profileImage: ""
        },
        {
            id: 4,
            name: "Jacob Wanyonyi",
            role: "Founder",
            profileImage:  ""
        }
    ]);

    const team = khwTeam.map(member => {
        const {id, name, role} = member;
        return (
            <div key={id} className='team-card'>
                <img src={placeholdeProfilePic} alt='user-profile' />
                <span>{name}</span>
                <span className='text-warning fst-italic'>{role}</span>
            </div>
        )
    });


    return (
        <div className='container' style={{marginTop: "30px", marginBottom: "40px"}}>
            <h1 className="text-center text-sm">Our Team</h1>
            <div className='d-flex justify-content-center align-items-center flex-wrap' id="team-members">
                {team}
            </div>
        </div>
    )
}
