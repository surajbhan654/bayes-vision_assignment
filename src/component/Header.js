import  "./header.css";

const Header = () => {
    return (
       <div className="header">
          <div className="logo-container">
             <img className="logo" src= "https://img1.wsimg.com/isteam/ip/881cd290-9040-498b-96c0-14149f96dc96/Black%20on%20Transparent.png/:/rs=w:432,h:75,cg:true,m/cr=w:432,h:75/qt=q:95" />
          </div>
          
          <div className="nav-items">
             <ul> 
                <li className="nav"> Home </li>
                <li className="nav"> About us </li>
                <li className="nav"> Contact us </li>
             </ul>
          </div>
       </div>
    );
 };

 export default Header;