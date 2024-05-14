import { useRouter } from 'next/router';
import { products } from '../../content/products';
import features from '../../content/features'
import { lvOneCat, lvTwoCat } from '../../content/categories'
import { useState, useEffect } from 'react';
import ProductCard from '../ProductCardCook'


export default function CookSearch() {
    const router = useRouter();
    const { cat } = router.query;
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedFeature, setSelectedFeature] = useState('')
    const [selectedValue, setSelectedValue] = useState('')
    const [showDiscontinued, setShowDiscontinued] = useState(false)
    const [showBackToTop, setShowBackToTop] = useState(false)
    const [skuInput, setSkuInput] = useState('')
    const [cookProducts, setCookProducts] = useState([]);
    let finalProducts, finalFeatures, finalValues

    function sortAlphabetically(data, prop) {
        return prop ? data.sort((a, b) => a[prop] >= b[[prop]] ? 1 : -1) : data.sort((a, b) => a >= b ? 1 : -1)
    }

    function removeDuplicates(arr) {
        return Array.from(new Set(arr))
    }

    function findProductsByMasterCategory(catId, products) {
        const categories = lvTwoCat.map(e => e.parent == catId && e.id)
        return products.filter(prod => prod.categories.some(prodCat => categories.some(cat => cat == prodCat)))
    }

    if (!selectedCategory) { // Si no tocaste nada, ves todos los productos
        finalProducts = products
    } else { // Si seleccionaste categoria...
        // Filtras productos por categoría
        finalProducts = findProductsByMasterCategory(selectedCategory, products)
        // Generas lista de características posibles
        const featureArray = features.filter(e => finalProducts.some(prod => prod.features.some(feat => feat.id == e.id && !e.hideInSearchPage)))
        finalFeatures = removeDuplicates(sortAlphabetically(featureArray, 'name'))
        if (selectedFeature) { // Si seleccionaste característica, generas lista de valores posibles
            const featValues = [] // Array temporal de valores posibles
            finalProducts.forEach(prod => { // Por cada producto...
                const match = prod.features.find(feat => feat.id == selectedFeature) // Busca la feature seleccionada
                if (match) featValues.push(match.value) // Si hay coincidencia, incluye su valor en el array temporal
            })
            finalValues = removeDuplicates(sortAlphabetically(featValues)) // Genera los valores posibles sin repetir
            if (selectedValue) {
                finalProducts = finalProducts.filter(prod => prod.features.some(feat => feat.id == selectedFeature && feat.value == selectedValue)) // Filtra por valor seleccionado
            }
        }
    }
    if (!showDiscontinued) {
        finalProducts = finalProducts.filter(prod => !prod.categories.some(cat => cat == 110))
    }
    if (skuInput) {
        finalProducts = finalProducts.filter(prod => prod.sku.includes(skuInput))
    }

    useEffect(() => {
        const cookProductsByCategory = {}; // Objeto para almacenar productos por categoría
        // Filtra los productos de cook que tengan las categorías 112, 113, 114 o 115
        const filteredProducts = products.filter(product => product.categories.includes(112) || product.categories.includes(113) || product.categories.includes(114) || product.categories.includes(115));
        // Agrupa los productos por categoría
        filteredProducts.forEach(product => {
            const category = lvTwoCat.find(cat => product.categories.includes(cat.id)); // Encuentra la categoría del producto
            if (category) {
                if (!cookProductsByCategory[category.id]) {
                    cookProductsByCategory[category.id] = { subName: category.subName, products: [] };
                }
                cookProductsByCategory[category.id].products.push(product);
            }
        });
        setCookProducts(cookProductsByCategory);
    }, [products]);



    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowBackToTop(true)
            } else {
                setShowBackToTop(false)
            }
        })
    }, [])


    return (
        <main className="search">
            <div className="productsCook">
                {Object.keys(cookProducts).map(categoryId => (
                    <div key={categoryId}>
                        <div className='cookName' > <h2>{cookProducts[categoryId].subName}</h2></div>

                        <div className="product-row">
                            {cookProducts[categoryId].products.map((product, index) => (
                                <ProductCard key={index} sku={product.sku} showName showSku showTags showMenu />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
