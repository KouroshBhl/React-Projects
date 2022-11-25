import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

const CocktailList = () => {
  const { data, onClickDetailHandler, search } = useGlobalContext()
  const { drinks } = data

  console.log(data)
  console.log(search)

  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>

      <div className='cocktails-center'>
        {drinks.map((item) => {
          const { idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb } =
            item

          return (
            <article className='cocktail' key={idDrink}>
              <div className='img-container'>
                <img src={strDrinkThumb} alt={strDrink} />
              </div>

              <div className='cocktail-footer'>
                <h3>{strDrink}</h3>
                <h4>{strGlass}</h4>
                <p>{strAlcoholic}</p>
                {
                  <Link
                    className='btn btn-primary btn-details'
                    to={`cocktail/${idDrink}`}
                    onClick={onClickDetailHandler}
                  >
                    Details
                  </Link>
                }
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default CocktailList
