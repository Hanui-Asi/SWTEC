import ProductOptions from "./ProductOptions.js"
import { request } from "./api.js"

const dummyData = [
   {
      optionID: 1,
      optionName: "신라면",
      optionPrice: 2000,
      stock: 10
   },
   {
      optionID: 2,
      optionName: "진라면",
      optionPrice: 1500,
      stock: 8
   },
   {
      optionID: 3,
      optionName: "삼양",
      optionPrice: 1000,
      stock: 0
   }
]

const $target = document.querySelector("#app")

const DEFAULT_PRODUCT_ID = 1

const fetchOptionData = (productID) => {
   return request(`/products/${productID}`)
      .then(product => {
         return request(`product-options?product.id=${product.id}`)
      })
      .then(productOptions => {
         return Promise.all([
            Promise.resolve(productOptions),
            Promise.all(
               productOptions.map(productOption => productOption.id).map(id => {
                  return request(`/product-option-stocks?productOption.id=${id}`)
               })
            )
         ])
      })
      .then(data => {
         console.log(data)
      })
}

fetchOptionData(DEFAULT_PRODUCT_ID)

new ProductOptions({
   $target,
   initialState: dummyData,
   onSelect: (option) => {
      alert(option.optionName)
   }
})
