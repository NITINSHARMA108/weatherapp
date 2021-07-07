import React from 'react'

const Footer = (props) => {
    const sty=props.style ?'bg-dark text-light text-center fixed-bottom' :'bg-dark text-light text-center'
    return (
        <div className={sty}>
            <div className="contact">
                <a className="text-light mr-3" href="https://www.facebook.com/people/Nitin-Sharma/100025384778791/" target="_blank"><i class="fab fa-facebook"></i></a>
                <a className="text-light mr-3" href="https://www.instagram.com/nitinsharma4388/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a className="text-light mr-3" href="https://github.com/nitinsharma108" target="_blank"><i class="fab fa-github"></i></a>
                <a className="text-light mr-3" href="https://www.linkedin.com/in/nitin-sharma-054559194/" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
            <div >Copyright &copy; 2021</div>
        </div>
    )
}

export default Footer
