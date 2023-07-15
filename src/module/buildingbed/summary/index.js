import React from 'react';
import "./scss/index.scss";

export const Summary = () => {
  return (
    <div className='summary_section'>
     <div className='nested_summarySection'>
       <div className='heading_summary'>
              <h3>Your Bundle</h3>
       </div>
       <div className='bundle_details'>
          <div className='pricing_section'>
             <p>Subtotal (incl. GST)</p>
             <span>$630.00</span>
          </div>
          <div className='pricing_section'>
             <p>Bundle Discount</p>
             <span>-$126.00</span>
          </div>
          <div className='pricing_section'>
             <p>Total</p>
             <p><span>AUD</span> <span className="bundle-price">$504.00</span></p>
          </div>
          <div className='btn_cart'>
            <a href="#/">Add To Cart</a>
          </div>
       </div>
     </div>
    </div>
  )
}
