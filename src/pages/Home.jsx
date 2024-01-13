import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

import axios from 'axios';

import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setPageCounte } from '../redux/slices/filterSlice';

function Home() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isloading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const pizzas = items.map((obj) =>
    isloading ? <Skeleton /> : <PizzaBlock key={obj.id} {...obj} />,
  );
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  React.useEffect(() => {
    setIsLoading(true);
    const search = searchValue ? `&title=${searchValue}` : '';

    // try {
    //   axios
    //     .get(
    //       `https://-e3b0c38e15f1a3a8.mokky.dev/items?${
    //         categoryId > 0 ? `category=${categoryId}` : ''
    //       }&sortBy=${sortType}${search} `,
    //     )
    //     .then((res) => {
    //       setItems(res.data);
    //       setIsLoading(false);
    //       console.log(555);
    //     });
    // } catch (err) {
    //   setIsLoading(false);
    //   alert('Ошибка при получении пицц');
    //   console.log(err, 'AXIOS ERROR');
    // }
    axios
      .get(
        `https://e3b0c38e15f1a3a8.mokky.dev/items?${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType}${search} `,
      )
      .then((res) => {
        setItems(res.data);
      })

      .catch((err) => {
        console.log(err, 'AXIOS ERROR');
        alert('Ошибка при получении пицц');
      })
      .finally(() => {
        setIsLoading(false);
        console.log('finally loading');
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sortType} onChangeSort={(index) => sortType(index)} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isloading ? skeletons : pizzas}</div>
      <Pagination />
    </div>
  );
}
export default Home;
