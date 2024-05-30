import React, { memo } from 'react'
import './adminPanel.scss'

const AdminPanel = () => {
  return (
    <section className='admin-panel container'>
        <h2>How can help you ?</h2>
        <div className="admin-panel__descs row">

            <div className="admin-panel__desc">
                <h1>Admin panel</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus eo.</p>
            </div>
            <div className="admin-panel__desc">
                <div className="admin-panel__desc-top">
                    <h4>01. Visit Feedback</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="admin-panel__desc-bottom">
                    <h4><span>03. Billing Inquiries</span></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            <div className="admin-panel__desc">
                <div className="admin-panel__desc-top">
                    <h4>01. Visit Feedback</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="admin-panel__desc-bottom">
                    <h4>03. Billing Inquiries</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default memo(AdminPanel)