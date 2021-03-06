import React from 'react';
import './App.css';
import Logo from './Pic/engi.png'
import Logo2 from './Pic/page-1-copy-2@3x.png'
import Logo3 from './Pic/group-3-copy-4.png';
import Logo4 from './Pic/group-2.png'
import Logo5 from './Pic/page-1.png'

function App() {
    return(
       <div className="main">
           <div className="header1">
           <img src={Logo} className="engi" />
               <div>
                    <div className="sub-header">
                        <p className="sub-header-2">คณะวิศวกรรมศาสตร์</p> <img src={Logo5} className="Page-1" />
                    </div>
                    <p className="sub-header-3">สาขาวิศวกรรมทั่วไป</p>
                    <p className="sub-header-4">จุฬาลงกรณ์มหาวิทยาลัย</p>
               </div>
               
           </div>      
        <span className="Path-4-Copy" />  

        <div className="content3">
            <p className="round">รอบที่เปิด</p>
            <div style={{display: 'flex', flexDirection:'row'}}>
                <p className="circle-border">1</p>
                <p className="circle-border">2</p>
                <p className="circle-border" style={{backgroundColor: '#d8d8d8'}}>3</p>
                <p className="circle-border">4</p>
                <p className="circle-border" style={{backgroundColor: '#d8d8d8'}}>5</p>                
            </div>    
        </div>

        <br />
         <div className="box">
            <span className="content1">
                <div>รอบที่ 4 : Admission</div>
                <div className="sub-right">
                    <p className="change-score">แก้ไขคะแนน</p>
                    <img src={Logo3}  className="Group-3-Copy-4" />
                
                </div>
                
            </span> 
            <span className="sub-content-1">
                <img src={Logo2} className="Page-1-Copy-2 " />
                <p className="score">คะแนนของคุณคือ <strong>23,453</strong></p>  
            </span>   
        </div>        
        
        <span className="content2">
            <p className="score-content2">
                <p className="text-style-1">20,845</p> คะแนนต่ำสุด 60
            </p>
            <p className="score-content2-2">
                <p className="text-style-1">21,345</p> คะแนนเฉลี่ย 60
            </p>
            <p className="score-content2">
                <p className="text-style-1">23,415</p> คะแนนสูงสุด 60
            </p>            
        </span>

        <span className="Path-4-Copy-3" />  
        {/* <img className="Triangle"></img> */}
        <a href="#" className="text-content4" style={{textDecoration:'none'}}>ดูสัดส่วนคะแนน</a>
        <span className="Path-4-Copy-5" />  

        <div className="content5">
            {/* <img className="Fill-103"></img> */}
            <p className="interest">10 คนที่สนใจ</p> 
            <img src={Logo4} className="Group-2" />
                      
        </div>
        
    
       </div>
    )

}

export default App;