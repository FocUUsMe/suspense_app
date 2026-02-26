    'use client'
    
    import styles from "./profile.module.css";
    import Image from "next/image";
    import { SquarePen } from 'lucide-react';
    import { useState } from "react";
    
    import NavBar from "@/components/molecules/navBar/navBar";
    
    import { Jersey_10 } from "next/font/google";
    
    const jersey_10 = Jersey_10({
        subsets: ['latin'],
        weight: ['400']
    });

    
    const Profile = () => {
        const [profName, setProfName] = useState("No name yet.");
        
        const setName = () => {
            const name = prompt('Enter your name:');
            if(name !== ""){ setProfName( name ) };
        }

        return (
            <div className={`${styles.page} ${jersey_10.className}`}>
                <main className={styles.main}>
                    <NavBar />

                    <section className={styles.prof_main}>
                        <div className={styles.prof_banner}></div>

                        <div className={styles.prof_pfp}>
                            <Image 
                            src={"/pixel_user.png"}
                            alt="your_profile_picture"
                            width={64}
                            height={64}
                            />
                        </div>

                        <div className={styles.info_group}>
                            <div>
                             <span className={styles.prof_name}> Name: {profName} </span>
                            
                             <br />
                             <br />
                             <button className={`${styles.setname_btn} ${jersey_10.className}`} onClick={setName}>
                                 Set name
                                 <SquarePen 
                                    size={24}
                                 />
                             </button>
                            </div>

                            <div style={{fontSize: "2rem"}}>
                             Description:
                             <span className={styles.prof_descript}> No description provided. </span>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }

    export default Profile;