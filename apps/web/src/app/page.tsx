import { getProducts } from "@/services/product";

export default async function Home() {
  const products = await getProducts();

  return (<>
    <p>榴蓮樹樹</p>
    <div>
      <h1>榴蓮商品</h1>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ${p.price}
        </div>
      ))}
    </div>
  </>);
}
