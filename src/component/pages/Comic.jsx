// path - src\component\pages\Comic.jsx
import ProductCard from "../card/ProductCard";

export default function Comic() {
  return (
    <>
      <h1>cosmic</h1><hr />
      <section className="section-1" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <ProductCard />
      </section>
      <hr />
    </>
  )
}
