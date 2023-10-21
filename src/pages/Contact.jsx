import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact(){
    const notify = () => toast.success("Sent!",{
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return(
        <div>  
            <div className="col-md-2"></div>
            <div className="col-md-5 mx-auto pt-5">

            <section className="card p-5">
            <h1 className="pb-3">Contact Us!</h1>
                <input type="text" className="form form-control mb-3" placeholder="Fullname"/>
                <input type="email" className="form form-control mb-3" placeholder="Email Address"/>
                <input type="text" className="form form-control mb-3" placeholder="Phone Number"/>
                <textarea className="form-control mb-3" id=""></textarea>
                <button className="btn btn-dark" onClick={notify}>Submit!</button>

                <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
            </section>
            </div>

        </div>
    )

}

export default Contact