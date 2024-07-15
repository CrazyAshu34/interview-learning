import { Link } from "react-router-dom";

export default function Header() {
  return (

    <>
      <div className="header" style={{ display: 'flex', background: '#242424', padding: "1.5rem 2rem", justifyContent: 'space-between', color: 'white' }}>
        <div className="logo_img">
          Logo  
        </div>

        <div className="middle_content">
          <div className="list" style={{ display: 'flex', gap: '0px 20px' }}>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'><div className="list_items active">Home</div></Link>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/comic'><div className="list_items">COSMIC CON</div></Link>
            {/* <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/man'><div className="list_items">Man</div></Link> */}
            {/* <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/women'><div className="list_items">Women</div></Link> */}
          </div>
        </div>

        <div className="icons" style={{ display: 'flex', gap: '0px 20px' }}>

          <span><Link style={{ textDecoration: 'none', color: 'inherit' }} to='#'><div className="list_items">login</div></Link></span>
          <span><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/wishlist'><div className="list_items">wishlist</div></Link></span>
          <span><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Addtocart'><div className="list_items">cart</div></Link></span>

        </div>
      </div>

    </>
  )
}