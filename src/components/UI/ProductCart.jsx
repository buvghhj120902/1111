import React from 'react'
import { motion } from 'framer-motion'
import '../../style/product-card.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const ProductCart = ({ item }) => {
    return (
        <>
            <Col lg='3' md='4' >

                <div className="product_item">

                    <div className="product_img">
                        <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
                    </div>

                    <div className="p-2 product_info">

                        <h3 className="product_name">
                            <Link to={`/shop/${item.id}`} style={{ textDecoration: 'none', color: '#0a1d37' }} > {item.productName} </Link>
                        </h3>

                        <span>{item.category}</span>

                    </div>

                    <div className="product_card-bottom p-2">

                        <span className="price">
                            ${item.price}
                        </span>

                        <motion.span whileTap={{ scale: 1.2 }} ><i class="ri-add-fill"></i></motion.span>

                    </div>

                </div>

            </Col>
        </>
    )
}

export default ProductCart