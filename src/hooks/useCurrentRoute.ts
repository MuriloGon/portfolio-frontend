import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../slices';
import { setType } from '../slices/global.slice';
import { routes } from '../utils/variables';


function useCurrentRoute(route: routes) {
  const currentRoute = useSelector<RootState>(x => x.globalReducer.currentRoute);
  const dispatch = useDispatch()

  function setRoute(route: routes) {
    dispatch(setType(route));
  }

  useEffect(() => { setRoute(route); }, []);


  return { currentRoute, setRoute };
}

export default useCurrentRoute;
