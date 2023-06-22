
export const SearchPage = () => {
  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form>    
            <input 
              type="text" 
              className="form-control" 
              name="searchText" 
              placeholder="Search a Hero" 
              autoComplete="off" 
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search a Hero
          </div>

          <div className="alert alert-danger">
            No resulrs <b>ABC</b>
          </div>

          {/* <HeroCard  {..hero}/> */}
        </div>
      </div>
    </>

  )
}
