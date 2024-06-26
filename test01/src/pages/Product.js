import React, { useState } from 'react';
import { Image, Modal, Button } from "antd";

const Product = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const handleViewMore = () => {
        setModalVisible(true);
    };
    const handleViewMoreFinish = () => {
        setModalVisible2(true);
    };
    const handleModalClose = () => {
        setModalVisible(false);
    };
    const handleModalCloseFinish = () => {
        setModalVisible2(false);
    };
    return (

        <div className='product-container'>

            <Image.PreviewGroup

                items={[
                    'Vivobook-1.jpg',
                    'Vivobook-2.jpg',
                    'Vivobook-3.jpg',
                    'Vivobook-4.jpg'
                ]}
            >
                <Image
                    className='image'
                    width={400}
                    height={400}
                    src="Vivobook-1.jpg"
                />
            </Image.PreviewGroup>
            <div className='title'>12代i5 處理器 <br />
                華碩 ASUS Vivobook 15 X1502ZA-0021B1235U<br />
                i5-1235U/8G/512G PCIe<br />
                <div className="textbold"><br />$17,999</div>
                <div>
                    <br /><br />付款方式<br />信用卡、無卡分期、行動支付，與其他多種方式<br />刷PChome聯名卡筆筆享最高6%<br />
                    <br />出貨<br />PChome 倉庫出貨，24小時到貨<br />
                    <br />配送<br />
                    宅配滿$490免運，超取滿$350免運
                </div>
            </div>

            <div className='btn-container'>
                <Button className='btn-cart' type="text" onClick={handleViewMore}>加入購物車</Button>
                <Button className='btn-buy' type="primary" onClick={handleViewMoreFinish}>立即購買</Button>
                <Modal
                    title="訊息"
                    open={modalVisible}
                    onCancel={handleModalClose}
                    footer={null}
                >
                    <p>已成功加入購物車！</p>
                </Modal>
                <Modal
                    title="訊息"
                    open={modalVisible2}
                    onCancel={handleModalCloseFinish}
                    footer={null}
                >
                    <p>為您導入結帳畫面~</p>
                </Modal>
            </div>

        </div>
    );

}
export default Product;