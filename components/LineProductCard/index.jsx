import Image from "next/image"
import { useRouter } from "next/router";

export default function LineProductCard({ prod }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/productos/${prod.sku}`);
  };

  return (
    <div className="line-product" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="bg"></div>
      <div className="image">
        <Image src={prod.imgs[0]} fill />
      </div>
      <p className="sku">{prod.sku}</p>
      <p className="title">{prod.shortDesc}</p>
      <p className="desc">{prod.longDesc}</p>
      <button className="verMasButton">Ver más</button>
    </div>
  );
}
