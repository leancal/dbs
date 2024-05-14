import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CategoryMainBanner from "../../components/CategoryMainBanner";
import NotFound from "../../components/NotFound";
import Head from "next/head";
import { products } from "../../content/products";
import CategoryLineSwiper from "../../components/CategoryLineSwiper";
import CategorySwiper from "../../components/CategorySwiper";
import { lvTwoCat, lvOneCat } from "../../content/categories";
import { productGroups } from "../../content/groups";
import CookSearch from "../../components/CookSearch";
import lineas from '../../content/lineas';

export default function Category({ lvTwoCat }) {
  const url = useRouter();
  const { cat } = url.query;
  let lineArr = [];
  const category = lvTwoCat.find((e) => e.route === `/categorias/${cat}`);
  const [error, setError] = useState(null);
  const isLvOneCategory = lvOneCat.some((lvOneCategory) => cat === lvOneCategory.route.replace('/categorias/', ''));
  let lvOneCategory = null;

  if (isLvOneCategory) {
    lvOneCategory = lvOneCat.find((lvOneCategory) => cat === lvOneCategory.route.replace('/categorias/', ''));
  }



  // Dentro del bloque que maneja las categorías de nivel 1
  if (isLvOneCategory) {


    return (
      <>
        <Head>
          <title>{`Cooks | Aiwa Electronics`}</title>
        </Head>
        <main id={`categorias ${cat}`}>
          <CategoryMainBanner
            banner={{
              img: lvOneCategory.img,
              alt: lvOneCategory.name,
              noText: lvOneCategory.noTextOnCategoryBanner,
              text: {
                title: lvOneCategory.name,
                subtitle: lvOneCategory.desc,
                align: lvOneCategory.categoryBannerTextPos?.[1] || 'left',
                valign: lvOneCategory.categoryBannerTextPos?.[0] || 'center',
              },
            }}
            isFirst={true}
          />
          <section className="product-list">
            <ul>
              <CookSearch />
            </ul>
          </section>
        </main>
      </>
    );
  }



  if (!category) {
    return <NotFound desc={`No se ha encontrado la categoría "${cat}"`} />;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  const prod = products.filter(
    (e) => e.categories.includes(category.id)
  );

  const categoryObj = {
    // Formatea la data para el componente MainBanner
    img: category.img,
    alt: category.name,
    noText: category.noTextOnCategoryBanner,
    text: {
      title: category.name,
      subtitle: category.desc,
      align: category.categoryBannerTextPos ? category.categoryBannerTextPos[1] : "left",
      valign: category.categoryBannerTextPos ? category.categoryBannerTextPos[0] : "center",
    },
  };

  if (prod.every((e) => e.line)) {
    prod.forEach((e) => {
      const line = lineArr.find((f) => f == e.line);
      if (!line) {
        lineArr.push(e.line);
      }
    });
  }

  function selectGroup(cat, groups) {
    switch (cat) {
      case 'parlantes':
        return groups.parlantes;
      case 'torres-de-sonido':
        return groups.torres;
      case 'in-ear':
        return groups.in_ear;
      case 'on-ear':
        return groups.on_ear;
      case 'notebooks':
        return groups.notebooks;
      case 'tablets':
        return groups.tablets;
      case 'discontinuos':
        return groups.discontinuos;
      case 'cook':
        return groups.cook;
      default:
        return null;
    }
  }



  if (prod.every(e => e.line)) {
    prod.forEach(e => {
      const line = lineArr.find(f => f === e.line);
      if (!line) {
        lineArr.push(e.line);
      }
    });
  }

  return (
    <>
      <Head>
        <title>{`${category.name} | Aiwa Electronics`}</title>
      </Head>
      <main id={`categorias ${cat}`}>
        <CategoryMainBanner banner={categoryObj} />
        <section className="swiper-categorias">
          {lineArr.length > 0
            ? lineArr.map((e, i) => {
              const prods = prod.filter(f => e == f.line)
              return <CategoryLineSwiper products={prods} key={i} />
            })
            : <CategorySwiper skus={selectGroup(cat, productGroups)} />
          }
        </section>
      </main>
    </>
  )

}

export async function getStaticProps() {
  return {
    props: { lvTwoCat, lvOneCat },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { cat: 'parlantes' } },
      { params: { cat: 'torres-de-sonido' } },
      { params: { cat: 'in-ear' } },
      { params: { cat: 'on-ear' } },
      { params: { cat: 'tablets' } },
      { params: { cat: 'notebooks' } },
      { params: { cat: 'discontinuos' } },
      { params: { cat: 'yogurteras' } },
      { params: { cat: 'cook' } },
    ],
    fallback: false, // también puede ser true o 'blocking'
  };
}