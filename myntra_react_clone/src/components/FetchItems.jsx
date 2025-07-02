import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { itemActions } from "../store/itemSlice"
import { fetchStatusActions } from "../store/fetchStatusSlice"

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus)
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted())
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone())
        dispatch(fetchStatusActions.markFetchingFinished())
        dispatch(itemActions.addInitialItems(items[0]))
      })
      .catch((err) => {
        console.log(err);
      })

    // fetchData()
    return () => {
      controller.abort();
    }
  }, [fetchStatus])


  return (
    <>
      {/* <div>
        Fetch Done :{fetchStatus.fetchDone.toString()}
        Currently Fetching :{fetchStatus.currentlyFetching.toString()}
      </div> */}
    </>
  )

}
export default FetchItems