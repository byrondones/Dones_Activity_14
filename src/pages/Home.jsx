import React from "react"
import './css/Styles.css'

function Home(){

    return(
        <>
            {/* Add a hero image */}

        <div className="container-fluid">
            <div className="row hero-image">
                <div className="col-12">
                <section className="hero-section p-5 text-center">
                        <p className='text-white fw-bold'
                            style={{isolation:'isolate', fontSize:64, paddingTop:150}}
                        >Adopt Now</p>

                        <p className='text-white pt-3 pb-3'
                            style={{isolation:'isolate', fontSize:32}}>
                        Embracing a new chapter of love and family. 💖👨‍👩‍👧‍👦 #AdoptNow
                        </p>

                    <button className='btn btn-dark fw-bold btn-lg' style={{isolation:'isolate'}}>Book for an adoption</button>
                </section>
                </div>
            </div>
        </div>

        </>
    )

}

export default Home