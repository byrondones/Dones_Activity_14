function Contact(){

    return(
        <>
            <h1 className="text-center mb-5">Contact Us!</h1>
            <div className="col-md-2"></div>
            <div className="col-md-5 mx-auto">
            <section className="card p-5">
                <input type="text" className="form form-control mb-3" placeholder="Fullname"/>
                <input type="email" className="form form-control mb-3" placeholder="Email Address"/>
                <input type="text" className="form form-control mb-3" placeholder="Phone Number"/>
                <textarea className="form-control mb-3" id=""></textarea>
                <button className="btn btn-primary">Submit!</button>
            </section>
            </div>
        </>
    )

}

export default Contact