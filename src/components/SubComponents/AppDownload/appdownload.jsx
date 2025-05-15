import './index.css';

const AppDownload = () => {
    return (
        <div className="app_download_container">
            <div className="app_download_content">
                <div className="app_download_text">
                    <h1>Scan the QR code to <span>download our app</span></h1>
                    <div className='Qr_code_container'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="" className='Qrcode' />
                        <div className='downloadapp_images'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/1200px-Download_on_the_App_Store_RGB_blk.svg.png" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='image_container'>
                    <img src="https://res.cloudinary.com/da98b7kad/image/upload/v1747235992/pngtree-flat-office-work-scene-image_2223333-removebg-preview_reyfha.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default AppDownload;