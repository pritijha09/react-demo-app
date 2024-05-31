import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render (){
    let {title, description, imageUrl, newsUrl, auther, date, source} = this.props; 
   return(
    <div className='my-3'>       
           <div className="card">
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'
            }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
             <img className="card-img-top" src={imageUrl? imageUrl: "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"} alt=".." />
             <div className="card-body">
               <h5 className="card-title">{title}
              
               </h5>
               <p className="card-text">{description}...</p>
               <p className="card-text">
                <small className="text-muted">
                  By {auther} on {new Date(date).toLocaleTimeString()}.
                </small>
               </p>
               <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">
                 Read More
               </a>
             </div>
           </div>
         </div>
   )
  }
   // 
    
}
export default NewsItem
