import React from "react";

import './book-details.styles.scss'

const BookDetails = () =>{

    return(
        <div className="book-details mt-2">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-2 book-img">
                        <div className="img">
                            <img src="https://picsum.photos/200/300" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7  book-details">

                    <div className="book-details-d ">
                    <div className=" lh"><h2 className="title">The Book Thief</h2></div>
                        <div className="authro lh"><h3 className="title">by Markus Zusak</h3></div>
                            <p className="EAN-ISBN"> <span>EAN / ISBN:</span> 9780552773898</p>
                            <p className="product-details"><span>media:</span> PDF</p>
                            <p className="number-of-pages"><span>number of pages:</span> 560</p>
                            <p className="Release-date"><span>Release date:</span> 2008-01-01</p>
                            <p className="language"><span>language:  </span> English</p>

                         </div>  
                       
                         <div className="lh"> <h4>Summary</h4></div>
                        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident tempora laudantium doloremque doloribusa asdsadasdasasdsadsadsadsadsad
                        dicta deleniti mollitia natus? Recusandae consectetur quis reprehenderit facilis laudantium, laborum tempora
                        ?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio maxime excepturi odit sit, recusandae adipisci
                        doloribus saepe eveniet. Ipsum omnis unde, corporis fugiat assumenda facilis tempore fuga et voluptas quia officiis 
                        beatae numquam vero minus in iusto. Explicabo, incidunt architecto cumque aliquid iste dicta omnis dolore unde, minus
                        officia iure? Quasi hic commodi dolor neque itaque veniam adipisci fuga, ex, laborum velit asperiores cupiditate laboriosam 
                        enim non reiciendis blanditiis! Libero ipsa sunt exercitationem, voluptatibus eos saepe impedit reiciendis necessitatibus,
                        soluta dolor dicta, voluptatum numquam molestiae quidem quo rerum. Id quis deleniti consequatur fugiat corrupti saepe ut
                        illum cupiditate commodi maxime.</div>
                        
                      
                        

                    </div>
                    <div className="col-lg-3 add-to-cart">

                        <div className="box">
                            <div className="price">Cost $3</div>
                            <button className="btn btn-primary" > add to cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails