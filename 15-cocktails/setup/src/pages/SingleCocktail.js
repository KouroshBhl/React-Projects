import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { cocktailID } = useParams()
  const { loading, searchDataHandler, cocktail } = useGlobalContext()
  // const findProduct = data.drinks.find((item) => item.idDrink === cocktailID)
  // console.log(findProduct)
  useEffect(() => {
    searchDataHandler(cocktailID)
  }, [cocktailID])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        cocktail.map((item, index) => {
          const {
            idDrink,
            strDrinkThumb,
            strDrink,
            strCategory,
            strAlcoholic,
            strGlass,
            strInstructions,
          } = item

          return (
            <section className='section cocktail-section' key={idDrink}>
              <a className='btn btn-primary' href='/'>
                Back to home{' '}
              </a>
              <h2 className='section-title'>{strDrink}</h2>
              <div className='drink'>
                <img src={strDrinkThumb} alt={strDrink} />
                <div className='drink-info'>
                  <p>
                    <span className='drink-data'>Name: </span>
                    {strDrink}
                  </p>
                  <p>
                    <span className='drink-data'>Category: </span>
                    {strCategory}
                  </p>
                  <p>
                    <span className='drink-data'>info: </span>
                    {strAlcoholic}
                  </p>
                  <p>
                    <span className='drink-data'>Glass: </span>
                    {strGlass}
                  </p>
                  <p>
                    <span className='drink-data'>Instructions: </span>
                    {strInstructions}
                  </p>
                  <p></p>
                </div>
              </div>
            </section>
          )
        })
      )}
    </>
  )
}

export default SingleCocktail
