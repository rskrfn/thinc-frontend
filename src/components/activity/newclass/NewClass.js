import React from "react";
import classes from "./NewClass.module.css";
import NewClassContent from "../components/newclass_content/NewClassContent";
import SearchIcon from "../../../assets/icons/icon_search.png";

function NewClass(props) {
  const { newclass, loading, newclassinfo, filter, setFilter } = props;

  const pageList = () => {
    let pages = [];
    for (let i = 1; i <= newclassinfo?.totalPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = pageList();

  console.log({ newclassinfo });
  return (
    <main className={classes.maincontainer}>
      <div className={classes.content}>
        <p className={classes.pageheader}>New class</p>
        <section className={classes.filtersection}>
          <div className={classes.searchcontainer}>
            <div className={classes.searchboxcontainer}>
              <img className={classes.searchicon} src={SearchIcon} alt="" />
              <input
                className={classes.searchbox}
                placeholder="Quick search"
                onChange={(e) => {
                  setFilter({ ...filter, search: e.target.value });
                }}
              />
            </div>
            <button className={classes.searchbtn}>Search</button>
          </div>
          <div className={classes.filtercontainer}>
            <div className={classes.dropdowncontainer}>
              <select
                className={classes.dropdown}
                onChange={(e) => {
                  setFilter({ ...filter, category: e.target.value });
                }}
              >
                <option value={null} selected disable hidden>
                  Categories
                </option>
                <option value={"software"}>Software</option>
                <option value={"history"}>History</option>
                <option value={"psychology"}>Psychology</option>
                <option value={"finance"}>Finance</option>
                <option value={"math"}>Mathematics</option>
                <option value={"science"}>Science</option>
              </select>
            </div>
            <div className={classes.dropdowncontainer}>
              <select
                className={classes.dropdown}
                onChange={(e) => {
                  setFilter({ ...filter, level: e.target.value });
                }}
              >
                <option value={null} selected disable hidden>
                  Level
                </option>
                <option value={"beginner"}>Beginner</option>
                <option value={"intermediate"}>Intermediate</option>
                <option value={"advance"}>Advance</option>
              </select>
            </div>
            <div className={classes.dropdowncontainer}>
              <select
                className={classes.dropdown}
                onChange={(e) => {
                  console.log("value", e.target.value);
                  setFilter({ ...filter, price: e.target.value });
                }}
              >
                <option value={null} selected disable hidden>
                  Pricing
                </option>
                <option value={"free"}>Free</option>
                <option value={"paid"}>Paid</option>
              </select>
            </div>
            <div className={classes.dropdowncontainer}>
              <select
                className={classes.dropdown}
                onChange={(e) => {
                  setFilter({ ...filter, sort: e.target.value });
                }}
              >
                <option value={null} selected disable hidden>
                  Sort by
                </option>
                <option value="name-AZ">Name ascending</option>
                <option value="name-ZA">Name descending</option>
                <option value="category-AZ">Category ascending</option>
                <option value="category-ZA">Category descending</option>
                <option value="Price-AZ">Price ascending</option>
                <option value="price-ZA">Price descending</option>
                <option value="level-AZ">Level ascending</option>
                <option value="level-ZA">Level descending</option>
              </select>
            </div>
            <button
              className={classes.clearfilterbtn}
              onClick={() => {
                setFilter({
                  search: "",
                  sort: "",
                  category: "",
                  level: "",
                  price: "",
                  page: "",
                });
              }}
            >
              Clear Filter
            </button>
          </div>
        </section>
        <section className={classes.newclasscontainer}>
          <div className={classes.headersection}>
            <div className={classes.headerclassname}>
              <p className={classes.headertext}>Class Name</p>
            </div>
            <div className={classes.headercategory}>
              <p className={classes.headertext}>Category</p>
            </div>
            <div className={classes.headerdescription}>
              <p className={classes.headertext}>Description</p>
            </div>
            <div className={classes.headerlevel}>
              <p className={classes.headertext}>Level</p>
            </div>
            <div className={classes.headerpricing}>
              <p className={classes.headertext}>Pricing</p>
            </div>
          </div>
          <div className={classes.contentsection}>
            <NewClassContent newclass={newclass} loading={loading} />
          </div>
          <div className={classes.paginationsection}>
            <div className={classes.leftcontent}>
              <p className={classes.paginationinfo}>{`Showing ${
                (newclassinfo.currpage - 1) * 10 + (newclass?.length || 0)
              } out of ${newclass ? newclassinfo?.count : 0}`}</p>
            </div>
            <div className={classes.rightcontent}>
              <button
                className={
                  newclassinfo.prev !== null
                    ? classes.paginationbtn
                    : classes.paginationbtndisable
                }
                disabled={!newclassinfo?.prev}
                onClick={() => {
                  if (newclassinfo?.prev === null) return;
                  setFilter({ ...filter, page: newclassinfo?.currpage - 1 });
                }}
              >
                b
              </button>
              {pages.map((page, index) => {
                return (
                  <button
                    className={
                      newclassinfo?.currpage === page
                        ? classes.paginationbtnactive
                        : classes.paginationbtn
                    }
                    key={index}
                    onClick={() => {
                      setFilter({ ...filter, page: page });
                    }}
                  >
                    {page}
                  </button>
                );
              })}
              <button
                className={
                  newclassinfo.next !== null
                    ? classes.paginationbtn
                    : classes.paginationbtndisable
                }
                disabled={!newclassinfo?.next}
                onClick={() => {
                  if (newclassinfo?.next === null) return;
                  setFilter({ ...filter, page: newclassinfo?.currpage + 1 });
                }}
              >
                n
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default NewClass;
